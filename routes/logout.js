const express = require('express');
const router = express.Router();
const logoutController = require('../contrrollers/logoutController');

router.get('/', logoutController.handleLogout);

module.exports = router;