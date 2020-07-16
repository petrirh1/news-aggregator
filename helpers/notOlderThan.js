const DAYS = 60 * 60 * 24 * 5 * 1000;

const notOlderThan = date => {
	const daysAgo = Date.now() - DAYS;
	return date >= daysAgo;
};

module.exports = notOlderThan;
