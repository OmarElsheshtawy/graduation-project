const router = require('express').Router();
const { protect, adminOnly } = require('../middleware/auth');
const { listUsers, updateUser, deleteUser, platformStats } = require('../controllers/adminController');

router.get('/stats', protect, adminOnly, platformStats);
router.get('/users', protect, adminOnly, listUsers);
router.patch('/users/:id', protect, adminOnly, updateUser);
router.delete('/users/:id', protect, adminOnly, deleteUser);

module.exports = router;
