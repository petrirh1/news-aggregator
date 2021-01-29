const express = require('express');
const router = express.Router();
const devController = require('../controllers/devController');

/*
 * Retrieve a list of available favicons for a given url
 */
router.get('/', devController.getFavicon);

module.exports = router;
