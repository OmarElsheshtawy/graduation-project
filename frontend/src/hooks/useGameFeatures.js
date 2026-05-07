import { useCallback, useEffect, useMemo, useState } from 'react'

const KEY_STREAK = 'lb_streak'
const KEY_XP = 'lb_total_xp'
const KEY_BOOKMARKS = 'lb_bookmarks'
const KEY_DAILY_STATE = 'lb_daily_challenge_state'

const LEVELS = [
  { level: 1, title: 'Starter', icon: '🌱', minXP: 0 },
  { level: 2, title: 'Learner', icon: '📘', minXP: 100 },
  { level: 3, title: 'Explorer', icon: '🧭', minXP: 250 },
  { level: 4, title: 'Speaker', icon: '🗣️', minXP: 450 },
  { level: 5, title: 'Achiever', icon: '🏅', minXP: 700 },
  { level: 6, title: 'Mentor', icon: '🧠', minXP: 1000 },
  { level: 7, title: 'Master', icon: '👑', minXP: 1400 },
  { level: 8, title: 'Legend', icon: '🏆', minXP: 1900 },
]

const DAILY_POOL = [
  { id: 'vocab10', title: 'Learn 10 new words', xp: 40 },
  { id: 'quiz1', title: 'Finish one quiz', xp: 35 },
  { id: 'lesson1', title: 'Complete one lesson', xp: 50 },
  { id: 'streak', title: 'Maintain your daily streak', xp: 30 },
]

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

function safeReadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function useStreak() {
  const [state, setState] = useState(() =>
    safeReadJSON(KEY_STREAK, { count: 0, lastDate: null, todayDone: false })
  )

  useEffect(() => {
    const today = todayKey()
    if (state.lastDate === today) return
    setState((prev) => ({ ...prev, todayDone: false }))
  }, [state.lastDate])

  useEffect(() => {
    localStorage.setItem(KEY_STREAK, JSON.stringify(state))
  }, [state])

  const markDoneToday = useCallback(() => {
    const today = todayKey()
    setState((prev) => {
      if (prev.lastDate === today) return { ...prev, todayDone: true }
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
      const nextCount = prev.lastDate === yesterday ? prev.count + 1 : 1
      return { count: nextCount, lastDate: today, todayDone: true }
    })
  }, [])

  return { streak: state.count, todayDone: state.todayDone, markDoneToday }
}

export function useXP() {
  const [totalXP, setTotalXP] = useState(() => Number(localStorage.getItem(KEY_XP) || 0))

  useEffect(() => {
    localStorage.setItem(KEY_XP, String(totalXP))
  }, [totalXP])

  const getLevelInfo = useCallback((level) => {
    return LEVELS.find((l) => l.level === level) || LEVELS[LEVELS.length - 1]
  }, [])

  const level = useMemo(() => {
    let current = 1
    for (const def of LEVELS) {
      if (totalXP >= def.minXP) current = def.level
    }
    return current
  }, [totalXP])

  const title = getLevelInfo(level).title

  const getProgress = useCallback(() => {
    const current = getLevelInfo(level)
    const next = getLevelInfo(level + 1)
    if (!next || next.level === current.level) {
      return { percent: 100, xpToNext: 0, currentMin: current.minXP, nextMin: current.minXP }
    }
    const span = Math.max(1, next.minXP - current.minXP)
    const progressXP = Math.max(0, totalXP - current.minXP)
    return {
      percent: Math.min(100, Math.round((progressXP / span) * 100)),
      xpToNext: Math.max(0, next.minXP - totalXP),
      currentMin: current.minXP,
      nextMin: next.minXP,
    }
  }, [getLevelInfo, level, totalXP])

  const addXP = useCallback((amount) => {
    const value = Number(amount) || 0
    if (value <= 0) return
    setTotalXP((x) => x + value)
  }, [])

  return { totalXP, level, title, addXP, getProgress, getLevelInfo, LEVELS }
}

export function useDailyChallenge() {
  const [state, setState] = useState(() =>
    safeReadJSON(KEY_DAILY_STATE, { date: null, completed: false })
  )

  const challenge = useMemo(() => {
    const key = todayKey()
    const hash = key.split('-').reduce((acc, part) => acc + Number(part), 0)
    return DAILY_POOL[hash % DAILY_POOL.length]
  }, [])

  useEffect(() => {
    const today = todayKey()
    if (state.date !== today) {
      setState({ date: today, completed: false })
    }
  }, [state.date])

  useEffect(() => {
    localStorage.setItem(KEY_DAILY_STATE, JSON.stringify(state))
  }, [state])

  const complete = useCallback(() => {
    setState({ date: todayKey(), completed: true })
  }, [])

  return { challenge, state, complete }
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => safeReadJSON(KEY_BOOKMARKS, []))

  useEffect(() => {
    localStorage.setItem(KEY_BOOKMARKS, JSON.stringify(bookmarks))
  }, [bookmarks])

  const toggle = useCallback((item) => {
    const id = item?.id
    if (!id) return
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.id === id && b.type === item.type)
      if (exists) return prev.filter((b) => !(b.id === id && b.type === item.type))
      return [...prev, { ...item, savedAt: new Date().toISOString() }]
    })
  }, [])

  return { bookmarks, toggle }
}
