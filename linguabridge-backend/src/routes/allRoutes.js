const express = require('express');
const router  = express.Router();
const { protect, authorize } = require('../middleware/auth');

// Import all route files
const authRoutes       = require('./auth');
const courseRoutes     = require('./courses');
const enrollmentRoutes = require('./enrollments');
const instructorRoutes = require('./instructor');
const contactRoutes    = require('./contact');
const chatRoutes       = require('./chat');

// Mount routes
router.use('/auth',        authRoutes);
router.use('/courses',     courseRoutes);
router.use('/enrollments', enrollmentRoutes);
router.use('/instructor',  instructorRoutes);
router.use('/contact',     contactRoutes);
router.use('/chat',        chatRoutes);

module.exports = router;