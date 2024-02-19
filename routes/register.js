const express = require('express');
const router = express.Router();
const registerController = require('../contrrollers/registerController');

router.post('/', registerController.handleNewUser);

module.exports = router;