const router = require('express').Router();
const {
  getInstructorStats, getInstructorStudents, getStudentDetail,
} = require('../controllers/instructorController');
const { protect, authorize } = require('../middleware/auth');

router.get('/stats',                protect, authorize('instructor','admin'), getInstructorStats);
router.get('/students',             protect, authorize('instructor','admin'), getInstructorStudents);
router.get('/students/:studentId',  protect, authorize('instructor','admin'), getStudentDetail);

module.exports = router;
