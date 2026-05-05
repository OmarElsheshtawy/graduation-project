const router = require('express').Router();
const { sendMessage, getMessages, markAsRead } = require('../controllers/contactController');
const { protect, authorize } = require('../middleware/auth');

router.post('/',           sendMessage);                                // public
router.get ('/',           protect, authorize('admin'), getMessages);   // admin only
router.patch('/:id/read',  protect, authorize('admin'), markAsRead);    // admin only

module.exports = router;
