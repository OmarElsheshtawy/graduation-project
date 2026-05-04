# LinguaBridge Backend API

Node.js + Express + PostgreSQL REST API for the LinguaBridge English learning platform.

---

## 📁 Project Structure

```
linguabridge-backend/
├── src/
│   ├── index.js                  # App entry point
│   ├── config/
│   │   ├── db.js                 # PostgreSQL connection pool
│   │   ├── migrate.js            # Creates all DB tables
│   │   └── seed.js               # Populates demo data
│   ├── middleware/
│   │   ├── auth.js               # JWT protect + authorize
│   │   └── errorHandler.js       # Global error + 404 handlers
│   ├── controllers/
│   │   ├── authController.js     # Register, login, profile
│   │   ├── courseController.js   # Full courses CRUD
│   │   ├── enrollmentController.js # Enroll + progress tracking
│   │   ├── instructorController.js # Instructor stats & students
│   │   └── contactController.js  # Contact form messages
│   └── routes/
│       ├── auth.js
│       ├── courses.js
│       ├── enrollments.js
│       ├── instructor.js
│       └── contact.js
├── .env.example
├── .gitignore
└── package.json
```

---

## ⚙️ Setup

### 1. Install dependencies
```bash
cd linguabridge-backend
npm install
```

### 2. Create your `.env` file
```bash
cp .env.example .env
```
Then edit `.env` and fill in your PostgreSQL credentials and a strong JWT secret.

### 3. Create the PostgreSQL database
```sql
CREATE DATABASE linguabridge;
```

### 4. Run migrations (creates all tables)
```bash
npm run db:migrate
```

### 5. Seed demo data (optional)
```bash
npm run db:seed
```

### 6. Start the server
```bash
# Development (auto-reload)
npm run dev

# Production
npm start
```

Server runs at: **http://localhost:5000**

---

## 🔑 Demo Credentials (after seeding)

| Role       | Email                        | Password    |
|------------|------------------------------|-------------|
| Instructor | emily@linguabridge.com       | Emily123!   |
| Student    | sarah@linguabridge.com       | Sarah123!   |
| Admin      | admin@linguabridge.com       | Admin123!   |

---

## 🗄️ Database Schema

```
users              → id, name, email, password, role, avatar_url
courses            → id, title, description, level, duration, price, instructor_id, is_published
enrollments        → id, student_id, course_id, enrolled_at
progress           → id, student_id, course_id, percent_complete, last_accessed_at, completed_at
contact_messages   → id, name, email, subject, message, is_read
```

---

## 📡 API Reference

All protected routes require:
```
Authorization: Bearer <token>
```

---

### 🔐 Auth  `/api/auth`

| Method | Endpoint              | Auth     | Description                    |
|--------|-----------------------|----------|--------------------------------|
| POST   | `/register`           | Public   | Register new user              |
| POST   | `/login`              | Public   | Login, returns JWT             |
| GET    | `/me`                 | Any user | Get current user profile       |
| PUT    | `/me`                 | Any user | Update name / avatar           |
| PUT    | `/change-password`    | Any user | Change password                |

**Register body:**
```json
{
  "name": "Sarah Johnson",
  "email": "sarah@example.com",
  "password": "Sarah123!",
  "role": "student"
}
```

**Login body:**
```json
{
  "email": "sarah@example.com",
  "password": "Sarah123!"
}
```

**Login / Register response:**
```json
{
  "token": "eyJhbGci...",
  "user": { "id": 4, "name": "Sarah Johnson", "email": "...", "role": "student" }
}
```

---

### 📚 Courses  `/api/courses`

| Method | Endpoint                     | Auth              | Description                       |
|--------|------------------------------|-------------------|-----------------------------------|
| GET    | `/`                          | Public            | List all published courses        |
| GET    | `/:id`                       | Public            | Get single course                 |
| GET    | `/instructor/my-courses`     | Instructor/Admin  | Get instructor's own courses      |
| GET    | `/:id/students`              | Instructor/Admin  | List students enrolled in course  |
| POST   | `/`                          | Instructor/Admin  | Create a new course               |
| PUT    | `/:id`                       | Instructor/Admin  | Update a course                   |
| DELETE | `/:id`                       | Instructor/Admin  | Delete a course                   |

**Query params for GET `/`:**
- `level=Beginner` — filter by level
- `search=grammar` — search title/description
- `page=1&limit=12` — pagination

**Create course body:**
```json
{
  "title": "Business English",
  "description": "Learn professional communication...",
  "level": "Intermediate+",
  "duration": "6 weeks",
  "price": 69.00
}
```

---

### 🎓 Enrollments  `/api/enrollments`

| Method | Endpoint                    | Auth    | Description                    |
|--------|-----------------------------|---------|--------------------------------|
| GET    | `/my`                       | Student | My enrolled courses            |
| POST   | `/:courseId`                | Student | Enroll in a course             |
| DELETE | `/:courseId`                | Student | Unenroll from a course         |
| GET    | `/progress/my`              | Student | All my progress records        |
| GET    | `/progress/summary`         | Student | Stats: enrolled, completed etc |
| PUT    | `/progress/:courseId`       | Student | Update progress percentage     |

**Update progress body:**
```json
{ "percent_complete": 75 }
```

**Progress summary response:**
```json
{
  "summary": {
    "courses_enrolled": 3,
    "courses_completed": 1,
    "avg_progress": 45,
    "hours_learned": 2.7
  }
}
```

---

### 👨‍🏫 Instructor  `/api/instructor`

| Method | Endpoint                    | Auth       | Description                        |
|--------|-----------------------------|------------|------------------------------------|
| GET    | `/stats`                    | Instructor | Total students, revenue, courses   |
| GET    | `/students`                 | Instructor | All students across all courses    |
| GET    | `/students/:studentId`      | Instructor | Student detail + per-course progress |

**Stats response:**
```json
{
  "stats": {
    "total_courses": 2,
    "total_students": 165,
    "total_revenue": "2450.00"
  }
}
```

---

### 📬 Contact  `/api/contact`

| Method | Endpoint      | Auth  | Description               |
|--------|---------------|-------|---------------------------|
| POST   | `/`           | Public | Submit contact message   |
| GET    | `/`           | Admin  | List all messages        |
| PATCH  | `/:id/read`   | Admin  | Mark message as read     |

**Submit message body:**
```json
{
  "name": "Ahmed Hassan",
  "email": "ahmed@example.com",
  "subject": "Course question",
  "message": "When does the next IELTS cohort start?"
}
```

---

## 🔌 Connecting Your React Frontend

### 1. Update `Auth.jsx` — replace the mock `setTimeout` with a real API call:

```js
// src/services/api.js  ← create this file
import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/api' });

// Attach JWT to every request automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
```

### 2. Login example:
```js
import api from '../services/api';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user',  JSON.stringify(data.user));
    navigate(data.user.role === 'instructor' ? '/instructor-dashboard' : '/student-dashboard');
  } catch (err) {
    setErrors({ general: err.response?.data?.message || 'Login failed' });
  }
};
```

### 3. Load student dashboard data:
```js
useEffect(() => {
  api.get('/enrollments/my').then(({ data }) => setEnrolledCourses(data.enrollments));
  api.get('/enrollments/progress/summary').then(({ data }) => setSummary(data.summary));
}, []);
```

### 4. Load instructor dashboard data:
```js
useEffect(() => {
  api.get('/instructor/stats').then(({ data }) => setStats(data.stats));
  api.get('/courses/instructor/my-courses').then(({ data }) => setMyCourses(data.courses));
}, []);
```

---

## 🛡️ Role Summary

| Role       | Can Do                                                        |
|------------|---------------------------------------------------------------|
| student    | Browse courses, enroll, track own progress                    |
| instructor | All student actions + create/edit/delete own courses, view enrolled students |
| admin      | Everything, including viewing contact messages                |
