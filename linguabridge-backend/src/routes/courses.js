const router = require('express').Router();
const {
  getAllCourses, getCourseById, createCourse, updateCourse,
  deleteCourse, getInstructorCourses, getCourseStudents,
} = require('../controllers/courseController');
const { protect, authorize } = require('../middleware/auth');

// Public
router.get('/',    getAllCourses);
router.get('/instructor/my-courses', protect, authorize('instructor','admin'), getInstructorCourses);
router.get('/:id', getCourseById);

// Protected
router.post('/',    protect, authorize('instructor','admin'), createCourse);
router.put ('/:id', protect, authorize('instructor','admin'), updateCourse);
router.delete('/:id', protect, authorize('instructor','admin'), deleteCourse);
router.get('/:id/students', protect, authorize('instructor','admin'), getCourseStudents);

module.exports = router;
