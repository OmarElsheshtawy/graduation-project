import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { ROLES } from './auth/rbac'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import DashboardLayout from './components/DashboardLayout'

import Auth from './pages/Auth'
import Home from './pages/Home'
import About from './pages/About'
import CoursesHub from './pages/CoursesHub'
import CourseDetail from './pages/CourseDetail'
import CourseMap from './pages/CourseMap'
import LessonPlayer from './pages/LessonPlayer'
import Community from './pages/Community'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Leaderboard from './pages/Leaderboard'
import Certificates from './pages/Certificates'
import Chat from './pages/Chat'
import QuizPlayer from './pages/QuizPlayer'
import StudentDashboard from './pages/StudentDashboard'
import InstructorDashboard from './pages/InstructorDashboard'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Auth />} />

          {/* Learning paths — students and admins only */}
          <Route element={<ProtectedRoute allow={[ROLES.STUDENT, ROLES.ADMIN]} />}>
            <Route path="/learn/:courseId" element={<CourseMap />} />
            <Route path="/learn/:courseId/:lessonId" element={<LessonPlayer />} />
            <Route path="/quiz/:courseId" element={<QuizPlayer />} />
            <Route path="/quiz" element={<QuizPlayer />} />
          </Route>

          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<CoursesHub />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute allow={[ROLES.STUDENT, ROLES.INSTRUCTOR, ROLES.ADMIN]} passAdmin={false} />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/chat" element={<Chat />} />

            <Route element={<ProtectedRoute allow={[ROLES.STUDENT, ROLES.ADMIN]} />}>
              <Route path="/certificates" element={<Certificates />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allow={[ROLES.STUDENT, ROLES.ADMIN]} />}>
            <Route path="/student-dashboard" element={<DashboardLayout role="student" />}>
              <Route index element={<StudentDashboard />} />
              <Route path="my-courses" element={<StudentDashboard />} />
              <Route path="progress" element={<StudentDashboard />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allow={[ROLES.INSTRUCTOR, ROLES.ADMIN]} />}>
            <Route path="/instructor-dashboard" element={<DashboardLayout role="instructor" />}>
              <Route index element={<InstructorDashboard />} />
              <Route path="manage-courses" element={<InstructorDashboard />} />
              <Route path="students" element={<InstructorDashboard />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allow={[ROLES.ADMIN]} passAdmin={false} />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}
