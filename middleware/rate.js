const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	max: 1000, // limit each IP to 100 requests per windowMs
});

module.exports = limiter;
