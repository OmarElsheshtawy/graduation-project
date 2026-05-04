/** Canonical roles (must match API / database). */
export const ROLES = {
  ADMIN: 'admin',
  INSTRUCTOR: 'instructor',
  STUDENT: 'student',
}

export function defaultDashboardPath(role) {
  if (role === ROLES.ADMIN) return '/admin'
  if (role === ROLES.INSTRUCTOR) return '/instructor-dashboard'
  return '/student-dashboard'
}

/** Admins may use student-only learning APIs in dev; UI still gates /learn to students + admin. */
export function canAccessLearning(role) {
  return role === ROLES.STUDENT || role === ROLES.ADMIN
}

export function canAccessInstructorArea(role) {
  return role === ROLES.INSTRUCTOR || role === ROLES.ADMIN
}

export function canAccessAdminArea(role) {
  return role === ROLES.ADMIN
}
