const express = require('express');
const router = express.Router();
const { signup, login, logout, getMe } = require('../controllers/auth.controller'); // Example import
const protectRoute = require("../middleware/protectRoute");



router.get('/me', protectRoute, getMe);
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
