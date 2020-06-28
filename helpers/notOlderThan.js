const DAYS = 60 * 60 * 24 * 7 * 1000; // 7 days

const notOlderThan = date => {
	const daysAgo = Date.now() - DAYS;
	return date > daysAgo;
};

module.exports = notOlderThan;
