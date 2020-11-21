const express = require('express');
const router = express.Router();

const devController = require('../controllers/devController');

router.get('/favicon', devController.getFavicon);

module.exports = router;
