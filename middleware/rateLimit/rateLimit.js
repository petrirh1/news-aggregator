const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
	windowMs: 1000 * 2, // 2sec
	max: 20,
	message: {
		code: 429,
		message: 'Too many requests in a short period of time.'
	}
});

module.exports = limiter;
