const express = require('express');
const router = express.Router();

const feedController = require('../controllers/feedController');

router.get('/uusimmat', feedController.getLatest);
router.get('/:category', feedController.getByCategory);

module.exports = router;
