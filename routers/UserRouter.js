const express = require('express');
const userController = require('../controllers/UserController');
const { authenticate } = require('../auth/auth');

const router = express.Router();

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/users', authenticate, userController.getAllUsers);
router.get('/users/num', authenticate, userController.getNumUsers);

module.exports = router;
