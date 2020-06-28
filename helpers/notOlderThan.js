const DAYS = 60 * 60 * 24 * 3 * 1000; // 3 days

const notOlderThan = date => {
	const daysAgo = Date.now() - DAYS;
	return date > daysAgo;
};

module.exports = notOlderThan;
