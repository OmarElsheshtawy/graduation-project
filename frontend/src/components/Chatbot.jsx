import { useState, useRef, useEffect } from 'react'

// ── Knowledge Base ─────────────────────────────────────────────────────────
const RESPONSES = [
  // Greetings
  { patterns: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'greetings', 'howdy'],
    replies: ["Hello! 👋 I'm Luna, your English learning assistant! How can I help you today?", "Hey there! 😊 Ready to learn some English? Ask me anything!", "Hi! Great to see you! What English topic would you like to explore?"] },

  // How are you
  { patterns: ['how are you', 'how r u', 'how do you do', "what's up", 'whats up'],
    replies: ["I'm doing great, thanks for asking! 😄 I'm here to help you master English. What would you like to learn?", "I'm wonderful! Ready to help you with your English journey. What's on your mind?"] },

  // Grammar - Tenses
  { patterns: ['present simple', 'simple present', 'present tense'],
    replies: ["📝 **Present Simple** is used for:\n\n• Habits: *I eat breakfast every day.*\n• Facts: *The sun rises in the east.*\n• Schedules: *The train leaves at 9 AM.*\n\n✅ Structure: Subject + base verb (he/she/it adds -s)\n• I work | She works | They work\n\nWant to learn about other tenses? Just ask! 😊"] },

  { patterns: ['past simple', 'simple past', 'past tense'],
    replies: ["📝 **Past Simple** is used for:\n\n• Completed actions: *I visited Paris last year.*\n• Past habits: *She walked to school every day.*\n\n✅ Structure: Subject + verb-ed (or irregular form)\n• Regular: walk → walked, play → played\n• Irregular: go → went, eat → ate, have → had\n\nRemember: Questions use 'did' + base verb\n• *Did you go to the party?*"] },

  { patterns: ['present perfect', 'have been', 'has been', 'have done', 'has done'],
    replies: ["📝 **Present Perfect** connects past to present:\n\n• Experience: *I have visited Egypt.*\n• Recent actions: *She has just finished her homework.*\n• Unfinished time: *I have lived here for 5 years.*\n\n✅ Structure: have/has + past participle\n• I have eaten | He has gone | They have seen\n\n⚠️ Never use with specific past times (yesterday, last year).\nUse Past Simple instead: *I visited Egypt last year.* ✓"] },

  { patterns: ['future tense', 'will', 'going to', 'future simple'],
    replies: ["📝 **Future Tenses:**\n\n🔹 **Will** — decisions made now, predictions:\n• *I'll help you with that!*\n• *It will rain tomorrow.*\n\n🔹 **Going to** — plans already decided, evidence-based predictions:\n• *I'm going to study tonight.*\n• *Look at those clouds — it's going to rain!*\n\n🔹 **Present Continuous** — fixed future arrangements:\n• *I'm meeting my friend tomorrow.*"] },

  { patterns: ['conditional', 'if clause', 'zero conditional', 'first conditional', 'second conditional', 'third conditional'],
    replies: ["📝 **Conditionals:**\n\n0️⃣ **Zero** (general truths):\n• *If you heat water, it boils.*\n\n1️⃣ **First** (real/possible future):\n• *If it rains, I will stay home.*\n\n2️⃣ **Second** (unreal/hypothetical):\n• *If I were rich, I would travel the world.*\n\n3️⃣ **Third** (past regrets/impossible):\n• *If I had studied harder, I would have passed.*\n\nNeed examples for any specific one? 😊"] },

  // Grammar - Articles
  { patterns: ['article', 'a or an', 'the', 'when to use a', 'when to use an', 'when to use the'],
    replies: ["📝 **Articles (a, an, the):**\n\n🔹 **A** — before consonant sounds:\n• *a book, a university (sounds like 'yoo')*\n\n🔹 **An** — before vowel sounds:\n• *an apple, an hour (h is silent)*\n\n🔹 **The** — specific or known things:\n• *The book on the table is mine.*\n• *The sun, the moon* (unique things)\n\n❌ **No article** — general plurals/uncountable:\n• *I love music. Dogs are friendly.*"] },

  // Grammar - Prepositions
  { patterns: ['preposition', 'in on at', 'at in on', 'prepositions of time', 'prepositions of place'],
    replies: ["📝 **Prepositions of Time:**\n• **AT** — specific times: *at 5pm, at midnight, at Christmas*\n• **ON** — days/dates: *on Monday, on July 4th*\n• **IN** — months/years/seasons: *in July, in 2024, in summer*\n\n📍 **Prepositions of Place:**\n• **AT** — specific point: *at the bus stop, at school*\n• **ON** — surface: *on the table, on the wall*\n• **IN** — inside: *in the box, in Egypt, in the car*"] },

  // Vocabulary
  { patterns: ['idiom', 'idioms', 'expression', 'expressions', 'common phrases'],
    replies: ["🗣️ **Useful English Idioms:**\n\n• **Break a leg** — Good luck!\n• **Hit the nail on the head** — Exactly right\n• **Under the weather** — Feeling sick\n• **Bite the bullet** — Endure something painful\n• **Cost an arm and a leg** — Very expensive\n• **Once in a blue moon** — Very rarely\n• **It's raining cats and dogs** — Raining heavily\n• **Let the cat out of the bag** — Reveal a secret\n\nWant more idioms or explanations? Just ask! 😄"] },

  { patterns: ['phrasal verb', 'phrasal verbs', 'two word verb'],
    replies: ["📚 **Common Phrasal Verbs:**\n\n• **Give up** — stop trying: *Don't give up on your dreams!*\n• **Look up** — search for: *Look up the word in a dictionary.*\n• **Turn down** — refuse: *She turned down the job offer.*\n• **Come across** — find unexpectedly: *I came across an old photo.*\n• **Put off** — postpone: *Don't put off your homework!*\n• **Get along** — have a good relationship: *We get along well.*\n• **Figure out** — understand/solve: *Can you figure out this puzzle?*"] },

  { patterns: ['synonym', 'synonyms', 'another word for', 'different word', 'word for'],
    replies: ["📚 **Useful Synonyms to Expand Your Vocabulary:**\n\n• **Happy** → joyful, delighted, pleased, content, thrilled\n• **Sad** → unhappy, upset, miserable, gloomy, heartbroken\n• **Big** → large, huge, enormous, massive, gigantic\n• **Small** → tiny, little, miniature, petite, compact\n• **Good** → excellent, wonderful, fantastic, superb, great\n• **Bad** → terrible, awful, dreadful, horrible, poor\n• **Important** → crucial, essential, significant, vital, critical\n\nTell me a specific word and I'll give you synonyms! 😊"] },

  // Pronunciation
  { patterns: ['pronunciation', 'pronounce', 'how to say', 'silent letter', 'silent letters'],
    replies: ["🗣️ **Pronunciation Tips:**\n\n**Silent letters:**\n• K is silent before N: *know, knife, knee*\n• W is silent before R: *write, wrong, wrap*\n• G is silent before N: *sign, foreign, gnome*\n• B is silent after M: *climb, bomb, comb*\n\n**Tricky vowel sounds:**\n• 'ou' can sound like: *out, soup, could, country*\n• 'ea' can sound like: *eat, bread, steak*\n\n**Tip:** Listen to native speakers on YouTube and repeat out loud! 🎧"] },

  // Writing
  { patterns: ['essay', 'how to write', 'writing tips', 'paragraph', 'introduction', 'conclusion'],
    replies: ["✍️ **Essay Writing Structure:**\n\n**Introduction:**\n• Hook sentence (question, fact, or quote)\n• Background information\n• Thesis statement (your main argument)\n\n**Body Paragraphs (2-3):**\n• Topic sentence\n• Supporting evidence/examples\n• Explanation\n• Transition to next paragraph\n\n**Conclusion:**\n• Restate thesis (in different words)\n• Summarize main points\n• Final thought or call to action\n\n💡 **Tip:** Each paragraph = one main idea!"] },

  { patterns: ['email', 'formal email', 'business email', 'write email', 'professional email'],
    replies: ["📧 **Professional Email Structure:**\n\n**Subject:** Clear and specific\n• ✅ *Meeting Request — Thursday 3pm*\n• ❌ *Hi* or *Important*\n\n**Opening:**\n• Formal: *Dear Mr./Ms. [Name],*\n• Semi-formal: *Hello [Name],*\n\n**Body:**\n• State purpose in first sentence\n• Keep paragraphs short (3-4 lines)\n• Use polite, clear language\n\n**Closing:**\n• *Best regards,* / *Sincerely,* / *Kind regards,*\n• Your full name\n\n💡 Always proofread before sending!"] },

  // IELTS / TOEFL
  { patterns: ['ielts', 'ielts tips', 'ielts writing', 'ielts speaking', 'ielts reading', 'ielts listening'],
    replies: ["🎯 **IELTS Tips:**\n\n**Writing Task 2 (Essay):**\n• Write at least 250 words\n• Spend 40 minutes on it\n• Plan for 5 minutes before writing\n• Use formal vocabulary\n\n**Speaking:**\n• Don't memorize — speak naturally\n• Use a range of vocabulary and tenses\n• Expand your answers (don't say just Yes/No)\n\n**Reading:**\n• Skim first, then read carefully\n• Underline keywords in questions\n• Watch out for tricky True/False/Not Given\n\n**Listening:**\n• Read questions before audio plays\n• Spelling counts!\n\n📌 Practice daily for best results!"] },

  { patterns: ['toefl', 'toefl tips', 'toefl preparation'],
    replies: ["🎯 **TOEFL Tips:**\n\n**Reading:**\n• 54-72 minutes, 3-4 passages\n• Focus on main idea and author's purpose\n\n**Listening:**\n• Take notes while listening\n• Focus on main points, not every word\n\n**Speaking:**\n• 6 tasks — 4 integrated, 2 independent\n• Use templates for structure\n• Speak clearly and at a natural pace\n\n**Writing:**\n• Integrated: Read + Listen + Write (20 min)\n• Independent: Your opinion essay (30 min)\n\n💡 Aim for 150+ words in integrated, 300+ in independent!"] },

  // Speaking
  { patterns: ['speaking', 'speak english', 'speaking tips', 'fluency', 'fluent', 'how to speak'],
    replies: ["🗣️ **Tips to Improve Speaking:**\n\n1. **Practice daily** — even 10 minutes helps!\n2. **Think in English** — translate less\n3. **Talk to yourself** — describe your day in English\n4. **Watch English content** — movies, YouTube, podcasts\n5. **Repeat after speakers** — mimic pronunciation\n6. **Don't fear mistakes** — they're part of learning!\n7. **Join conversation clubs** — practice with others\n8. **Record yourself** — listen back and improve\n\n💡 Fluency comes from speaking, not just studying! Start today! 🚀"] },

  // Vocabulary building
  { patterns: ['vocabulary', 'learn words', 'new words', 'improve vocabulary', 'word list'],
    replies: ["📚 **How to Build Your Vocabulary:**\n\n1. **Learn in context** — read sentences, not just words\n2. **Use flashcards** — Anki app is great!\n3. **Learn word families** — create, creation, creative, creator\n4. **Read every day** — news, books, articles\n5. **Keep a vocabulary journal** — write new words + examples\n6. **Learn 5-10 words daily** — consistency beats intensity\n7. **Use new words immediately** — in sentences or conversation\n\n🎯 **Word of the Day:**\n**Perseverance** (n.) — continued effort despite difficulty\n*Her perseverance helped her pass the IELTS exam.*"] },

  // Common mistakes
  { patterns: ['mistake', 'mistakes', 'common mistake', 'error', 'wrong grammar'],
    replies: ["⚠️ **Common English Mistakes:**\n\n❌ *I am agree* → ✅ *I agree*\n❌ *She don't know* → ✅ *She doesn't know*\n❌ *Yesterday I have eaten* → ✅ *Yesterday I ate*\n❌ *I am very boring* → ✅ *I am very bored*\n❌ *He told me that he is tired* → ✅ *He told me that he was tired*\n❌ *I look forward to hear* → ✅ *I look forward to hearing*\n❌ *Can you explain me?* → ✅ *Can you explain to me?*\n❌ *I have 20 years* → ✅ *I am 20 years old*\n\nAny of these sound familiar? 😄"] },

  // Help / What can you do
  { patterns: ['help', 'what can you do', 'what do you know', 'topics', 'menu', 'options', 'commands'],
    replies: ["🤖 **I can help you with:**\n\n📝 **Grammar** — tenses, articles, conditionals, prepositions\n🗣️ **Speaking** — fluency tips, pronunciation\n✍️ **Writing** — essays, emails, paragraphs\n📚 **Vocabulary** — idioms, phrasal verbs, synonyms\n🎯 **Exam Prep** — IELTS, TOEFL tips\n⚠️ **Common Mistakes** — fixes for typical errors\n\n**Just type your question!** For example:\n• *'Explain present perfect'*\n• *'Give me idioms'*\n• *'IELTS writing tips'*\n• *'Common English mistakes'*"] },

  // Courses
  { patterns: ['course', 'courses', 'enroll', 'which course', 'recommend course'],
    replies: ["🎓 **LinguaBridge Courses:**\n\n• 🟢 **Beginner English** — Free! Perfect to start\n• 🟡 **Intermediate English** — $49, build confidence\n• 🔴 **Advanced English** — $79, master the language\n• 💼 **Business English** — $69, professional communication\n• 📋 **IELTS Preparation** — $99, exam focused\n• 🗣️ **Conversational English** — $39, speaking focused\n\nGo to the **Courses** page to enroll!\nNeed a recommendation? Tell me your level 😊"] },

  // Motivation
  { patterns: ['motivation', 'motivate', 'hard', 'difficult', 'give up', 'cant do', "can't learn", 'struggle'],
    replies: ["💪 **Don't give up! You're doing amazing!**\n\nEvery expert was once a beginner. Learning a language takes time, but every day you practice, you're making progress — even when it doesn't feel like it.\n\n🌟 **Remember:**\n• Mistakes are proof you're trying\n• Consistency beats perfection\n• Even 15 minutes a day adds up\n• Millions of people have done it — so can you!\n\n*'The journey of a thousand miles begins with a single step.'* 🚀\n\nWhat specific topic is giving you trouble? I can help! 😊"] },

  // Thank you
  { patterns: ['thank', 'thanks', 'thank you', 'thx', 'ty', 'appreciate'],
    replies: ["You're very welcome! 😊 Keep up the great work on your English journey!", "Happy to help! 🌟 Feel free to ask me anything anytime!", "Anytime! Learning English is a wonderful investment in yourself. Keep going! 💪"] },

  // Goodbye
  { patterns: ['bye', 'goodbye', 'see you', 'see ya', 'later', 'good night', 'good bye'],
    replies: ["Goodbye! 👋 Keep practicing your English every day!", "See you later! 😊 Remember: a little practice every day goes a long way!", "Take care! 🌟 Come back anytime you need English help!"] },
]

const FALLBACK = [
  "🤔 I'm not sure about that one! Try asking about:\n• Grammar (tenses, articles, conditionals)\n• Vocabulary (idioms, phrasal verbs)\n• Writing (essays, emails)\n• Speaking tips\n• IELTS/TOEFL prep\n\nOr type **'help'** to see everything I can do! 😊",
  "Hmm, I didn't quite get that! 🤔 I specialize in English learning. Try asking about grammar rules, vocabulary, or exam tips! Type **'help'** for a full list.",
  "I'm best at English learning topics! 📚 Ask me about tenses, idioms, writing tips, or pronunciation. Type **'help'** to see all topics!",
]

const QUICK_PROMPTS = [
  { label: '📝 Grammar tips',   text: 'Explain present perfect tense' },
  { label: '🗣️ Speaking tips',  text: 'How to improve speaking fluency' },
  { label: '📚 Idioms',         text: 'Teach me common English idioms' },
  { label: '✍️ Email writing',  text: 'How to write a professional email' },
  { label: '🎯 IELTS tips',     text: 'IELTS writing tips' },
  { label: '⚠️ Mistakes',       text: 'Common English grammar mistakes' },
]

// ── Matching Logic ─────────────────────────────────────────────────────────
function getResponse(input) {
  const lower = input.toLowerCase().trim()
  for (const item of RESPONSES) {
    if (item.patterns.some(p => lower.includes(p))) {
      return item.replies[Math.floor(Math.random() * item.replies.length)]
    }
  }
  return FALLBACK[Math.floor(Math.random() * FALLBACK.length)]
}

// ── Format message text (bold, newlines) ───────────────────────────────────
function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code style="background:rgba(0,0,0,0.08);padding:2px 6px;border-radius:4px;font-size:0.83em;font-family:monospace">$1</code>')
    .replace(/\n/g, '<br/>')
}

// ── Typing indicator ───────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '10px 14px' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 7, height: 7, borderRadius: '50%',
          background: '#9CA3AF',
          animation: 'lunaTyping 1.2s ease infinite',
          animationDelay: `${i * 0.2}s`,
        }} />
      ))}
    </div>
  )
}

// ── Main Chatbot Component ─────────────────────────────────────────────────
export default function Chatbot() {
  const [isOpen,    setIsOpen]    = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages,  setMessages]  = useState([{
    role: 'bot',
    text: "Hi! I'm **Luna** 🌙, your free English learning assistant!\n\nI can help you with grammar, vocabulary, idioms, writing, speaking tips, and exam preparation.\n\nWhat would you like to learn today?",
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
  }])
  const [input,     setInput]     = useState('')
  const [typing,    setTyping]    = useState(false)
  const [showQuick, setShowQuick] = useState(true)
  const [unread,    setUnread]    = useState(0)

  const endRef   = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) { setUnread(0); setTimeout(() => inputRef.current?.focus(), 150) }
  }, [isOpen])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = (text) => {
    const msg = (text || input).trim()
    if (!msg) return

    setShowQuick(false)
    setInput('')

    // Add user message
    const userMsg = { role: 'user', text: msg, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }
    setMessages(prev => [...prev, userMsg])
    setTyping(true)

    // Simulate typing delay (400–900ms)
    const delay = 400 + Math.random() * 500
    setTimeout(() => {
      const reply = getResponse(msg)
      setMessages(prev => [...prev, {
        role: 'bot', text: reply,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      }])
      setTyping(false)
      if (!isOpen) setUnread(u => u + 1)
    }, delay)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const clearChat = () => {
    setMessages([{ role: 'bot', text: "Chat cleared! 😊 What would you like to learn about English?", time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }])
    setShowQuick(true)
  }

  const w = isExpanded ? 440 : 360
  const h = isExpanded ? 660 : 540

  return (
    <>
      <style>{`
        @keyframes lunaTyping {
          0%,60%,100% { transform:translateY(0); opacity:0.4; }
          30% { transform:translateY(-5px); opacity:1; }
        }
        @keyframes lunaOpen {
          from { opacity:0; transform:translateY(16px) scale(0.95); }
          to   { opacity:1; transform:translateY(0)    scale(1); }
        }
        @keyframes lunaMsgIn {
          from { opacity:0; transform:translateY(6px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes lunaPulse {
          0%   { transform:scale(1);   opacity:0.7; }
          100% { transform:scale(1.6); opacity:0; }
        }
        .luna-quick:hover { background:#EFF6FF!important; border-color:#2563EB!important; color:#2563EB!important; }
        .luna-fab:hover { transform:scale(1.1)!important; }
        .luna-input:focus { border-color:#2563EB!important; box-shadow:0 0 0 3px rgba(37,99,235,0.1)!important; }
      `}</style>

      {/* ── Chat Window ── */}
      {isOpen && (
        <div style={{
          position: 'fixed', bottom: 90, right: 24,
          width: w, height: h,
          background: '#F8FAFC',
          borderRadius: 20,
          boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.08)',
          display: 'flex', flexDirection: 'column',
          zIndex: 9998, overflow: 'hidden',
          animation: 'lunaOpen 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          border: '1px solid #E5E7EB',
        }}>

          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
            padding: '13px 15px',
            display: 'flex', alignItems: 'center', gap: 10,
            flexShrink: 0,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'rgba(255,255,255,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.15rem', border: '2px solid rgba(255,255,255,0.3)',
            }}>🤖</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>Luna — English Assistant</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399' }} />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem' }}>Free · Always Online</span>
              </div>
            </div>
            <button onClick={() => setIsExpanded(e => !e)} title={isExpanded ? 'Shrink' : 'Expand'}
              style={{ background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: 7, color: 'white', cursor: 'pointer', padding: '5px 8px', fontSize: '0.85rem' }}>
              {isExpanded ? '⊟' : '⊞'}
            </button>
            <button onClick={clearChat} title="Clear chat"
              style={{ background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: 7, color: 'white', cursor: 'pointer', padding: '5px 8px', fontSize: '0.85rem' }}>
              🗑
            </button>
            <button onClick={() => setIsOpen(false)}
              style={{ background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: 7, color: 'white', cursor: 'pointer', padding: '5px 9px', fontSize: '1rem', lineHeight: 1 }}>
              ✕
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: 3 }}>
            {messages.map((msg, i) => {
              const isBot = msg.role === 'bot'
              return (
                <div key={i} style={{
                  display: 'flex',
                  flexDirection: isBot ? 'row' : 'row-reverse',
                  alignItems: 'flex-end', gap: 7,
                  marginBottom: 2,
                  animation: 'lunaMsgIn 0.25s ease',
                }}>
                  {isBot && (
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#2563EB,#1E40AF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', flexShrink: 0 }}>🤖</div>
                  )}
                  <div style={{ maxWidth: '80%' }}>
                    <div style={{
                      padding: '9px 13px',
                      borderRadius: isBot ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
                      background: isBot ? 'white' : 'linear-gradient(135deg,#2563EB,#1E40AF)',
                      color: isBot ? '#1F2937' : 'white',
                      fontSize: '0.835rem', lineHeight: 1.65,
                      boxShadow: isBot ? '0 2px 6px rgba(0,0,0,0.07)' : '0 3px 10px rgba(37,99,235,0.25)',
                      border: isBot ? '1px solid #F1F5F9' : 'none',
                    }}
                      dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                    />
                    <div style={{ fontSize: '0.62rem', color: '#9CA3AF', marginTop: 3, textAlign: isBot ? 'left' : 'right', paddingLeft: isBot ? 4 : 0 }}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Typing */}
            {typing && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#2563EB,#1E40AF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>🤖</div>
                <div style={{ background: 'white', borderRadius: '16px 16px 16px 4px', border: '1px solid #F1F5F9', boxShadow: '0 2px 6px rgba(0,0,0,0.07)' }}>
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Quick prompts */}
          {showQuick && !typing && (
            <div style={{ padding: '8px 12px', background: 'white', borderTop: '1px solid #F1F5F9', display: 'flex', gap: 5, flexWrap: 'wrap', flexShrink: 0 }}>
              {QUICK_PROMPTS.map((p, i) => (
                <button key={i} className="luna-quick" onClick={() => sendMessage(p.text)}
                  style={{ padding: '4px 9px', border: '1px solid #E5E7EB', borderRadius: 20, background: 'white', color: '#6B7280', fontSize: '0.7rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s', whiteSpace: 'nowrap' }}>
                  {p.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ background: 'white', borderTop: '1px solid #F1F5F9', padding: '10px 11px', display: 'flex', gap: 7, alignItems: 'flex-end', flexShrink: 0 }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about grammar, idioms, IELTS..."
              rows={1}
              className="luna-input"
              style={{ flex: 1, padding: '9px 13px', border: '1.5px solid #E5E7EB', borderRadius: 13, fontSize: '0.835rem', fontFamily: 'inherit', resize: 'none', lineHeight: 1.5, maxHeight: 90, outline: 'none', transition: 'all 0.2s', color: '#1F2937', background: '#FAFAFA' }}
              onInput={e => { e.target.style.height = 'auto'; e.target.style.height = Math.min(e.target.scrollHeight, 90) + 'px' }}
            />
            <button onClick={() => sendMessage()} disabled={!input.trim() || typing}
              style={{
                width: 38, height: 38, borderRadius: 11,
                background: input.trim() && !typing ? 'linear-gradient(135deg,#2563EB,#1E40AF)' : '#E5E7EB',
                border: 'none', cursor: input.trim() && !typing ? 'pointer' : 'not-allowed',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                transition: 'all 0.2s', boxShadow: input.trim() && !typing ? '0 3px 10px rgba(37,99,235,0.3)' : 'none',
              }}>
              <svg width="15" height="15" fill="none" stroke={input.trim() && !typing ? 'white' : '#9CA3AF'} strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div style={{ background: 'white', padding: '4px 12px 7px', textAlign: 'center', fontSize: '0.62rem', color: '#D1D5DB', borderTop: '1px solid #F9FAFB', flexShrink: 0 }}>
            100% Free · No AI API needed · LinguaBridge
          </div>
        </div>
      )}

      {/* ── FAB ── */}
      <button onClick={() => setIsOpen(o => !o)} className="luna-fab"
        style={{
          position: 'fixed', bottom: 24, right: 24,
          width: 58, height: 58, borderRadius: '50%',
          background: isOpen ? 'linear-gradient(135deg,#EF4444,#DC2626)' : 'linear-gradient(135deg,#2563EB,#1E40AF)',
          border: 'none',
          boxShadow: '0 6px 20px rgba(37,99,235,0.4)',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999,
          transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          fontSize: '1.4rem',
        }}>
        {!isOpen && (
          <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '3px solid rgba(37,99,235,0.35)', animation: 'lunaPulse 2s ease-out infinite' }} />
        )}
        {unread > 0 && !isOpen && (
          <div style={{ position: 'absolute', top: -3, right: -3, width: 18, height: 18, background: '#EF4444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'white', fontWeight: 700, border: '2px solid white' }}>
            {unread}
          </div>
        )}
        {isOpen
          ? <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          : '🤖'
        }
      </button>
    </>
  )
}
