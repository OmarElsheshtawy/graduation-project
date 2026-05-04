const router = require('express').Router();
const {
  enrollInCourse, unenrollFromCourse, getMyEnrollments,
  updateProgress, getMyProgress, getProgressSummary,
} = require('../controllers/enrollmentController');
const { protect, authorize } = require('../middleware/auth');

// Enrollment
router.get   ('/my',          protect, authorize('student'), getMyEnrollments);
router.post  ('/:courseId',   protect, authorize('student'), enrollInCourse);
router.delete('/:courseId',   protect, authorize('student'), unenrollFromCourse);

// Progress
router.get('/progress/my',          protect, authorize('student'), getMyProgress);
router.get('/progress/summary',     protect, authorize('student'), getProgressSummary);
router.put ('/progress/:courseId',  protect, authorize('student'), updateProgress);

module.exports = router;
