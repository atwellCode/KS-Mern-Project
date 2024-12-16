const express = require('express');
const router = express.Router();
const { signup, login, logout,  } = require('../controllers/auth.controller'); // Example import

router.post('/signup', signup);
router.get('/login', login);
router.get('/logout', logout);

module.exports = router;
