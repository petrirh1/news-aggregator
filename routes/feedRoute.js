const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feedController');
const { getOptions, getLatest, getSources, getByCategory } = feedController;

router.get('/uusimmat', getOptions, getLatest);
router.get('/lahteet', getSources);
router.get('/:category', getOptions, getByCategory);

module.exports = router;
