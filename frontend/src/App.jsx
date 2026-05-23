import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardLayout from './components/DashboardLayout'
import { AuthProvider } from './auth/AuthContext'
import { ThemeProvider } from './pages/ThemeContext'

// Auth
import Auth           from './pages/Auth'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword  from './pages/ResetPassword'

// Utility
import { NotFound }          from './pages/ErrorPages'
import AdminDashboard        from './pages/AdminDashboard'
import NotificationsPage     from './pages/Notifications'

// Main pages
import Home           from './pages/Home'
import About          from './pages/About'
import CoursesHub     from './pages/CoursesHub'
import CourseDetail   from './pages/CourseDetail'
import Community      from './pages/Community'
import Forums         from './pages/Forums'
import Contact        from './pages/Contact'
import Login          from './pages/Login'
import Register       from './pages/Register'
import Profile        from './pages/Profile'
import Leaderboard    from './pages/Leaderboard'
import Gamification   from './pages/Gamification'
import Certificates   from './pages/Certificates'
import QuizPlayer     from './pages/QuizPlayer'
import PlacementQuiz  from './pages/PlacementQuiz'
import CourseQuiz     from './pages/CourseQuiz'
import Bookmarks      from './pages/Bookmarks'
import Analytics      from './pages/Analytics'
import PaymentSuccess from './pages/PaymentSuccess'

// Learn system (no navbar/footer — immersive)
import CourseMap      from './pages/CourseMap'
import LessonPlayer   from './pages/LessonPlayer'

// Dashboards
import StudentDashboard    from './pages/StudentDashboard'
import InstructorDashboard from './pages/InstructorDashboard'

export default function App() {
  return (
    <Router>
      <ThemeProvider>
      <AuthProvider>
      <Routes>

        {/* ── Auth (no layout) ── */}
        <Route path="/login"             element={<Login />} />
        <Route path="/register"          element={<Register />} />
        <Route path="/forgot-password"   element={<ForgotPassword />} />
        <Route path="/reset-password"    element={<ResetPassword />} />
        <Route path="/payment/success"   element={<PaymentSuccess />} />

        {/* ── Learn routes (immersive — no navbar/footer) ── */}
        <Route path="/learn/:courseId"             element={<CourseMap />} />
        <Route path="/learn/:courseId/:lessonId"   element={<LessonPlayer />} />

        {/* ── Quiz routes (immersive — no navbar/footer) ── */}
        <Route path="/placement-quiz"              element={<PlacementQuiz />} />
        <Route path="/course-quiz/:courseId"       element={<CourseQuiz />} />

        {/* ── Main layout routes ── */}
        <Route element={<Layout />}>
          <Route path="/"              element={<Home />} />
          <Route path="/home"          element={<Home />} />
          <Route path="/about"         element={<About />} />
          <Route path="/courses"       element={<CoursesHub />} />
          <Route path="/courses/:id"   element={<CourseDetail />} />
          <Route path="/community"     element={<Community />} />
          <Route path="/forums"        element={<Forums />} />
          <Route path="/contact"       element={<Contact />} />
          <Route path="/profile"       element={<Profile />} />
          <Route path="/leaderboard"   element={<Leaderboard />} />
          <Route path="/gamification"  element={<Gamification />} />
          <Route path="/certificates"  element={<Certificates />} />
          <Route path="/quiz"          element={<QuizPlayer />} />
          <Route path="/quiz/:courseId" element={<QuizPlayer />} />
          <Route path="/bookmarks"     element={<Bookmarks />} />
          <Route path="/analytics"     element={<Analytics />} />
        </Route>

        {/* ── Student Dashboard ── */}
        <Route path="/student-dashboard" element={<DashboardLayout role="student" />}>
          <Route index               element={<StudentDashboard />} />
          <Route path="my-courses"   element={<StudentDashboard />} />
          <Route path="progress"     element={<StudentDashboard />} />
        </Route>

        {/* ── Instructor Dashboard ── */}
        <Route path="/instructor-dashboard" element={<DashboardLayout role="instructor" />}>
          <Route index                   element={<InstructorDashboard />} />
          <Route path="manage-courses"   element={<InstructorDashboard />} />
          <Route path="students"         element={<InstructorDashboard />} />
        </Route>

        {/* ── Admin Dashboard ── */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* ── Notifications ── */}
        <Route element={<Layout />}>
          <Route path="/notifications" element={<NotificationsPage />} />
        </Route>

        {/* ── 404 catch-all ── */}
        <Route path="*" element={<NotFound />} />

      </Routes>
      </AuthProvider>
      </ThemeProvider>
    </Router>
  )
}
