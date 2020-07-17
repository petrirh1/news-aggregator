const notOlderThan = require('../notOlderThan');

describe('filter dates older than', () => {
	test('should return true', () => {
		const date1 = new Date('2020-07-15T18:05:00.000Z');
		const date2 = new Date('2021-07-16T18:05:00.000Z');

		expect(notOlderThan(date1)).toBe(true);
		expect(notOlderThan(date2)).toBe(true);
	});

	test('should return false', () => {
		const date3 = new Date('2020-07-05T18:05:00.000Z');

		expect(notOlderThan(date3)).toBe(false);
		expect(notOlderThan(null)).toBe(false);
		expect(notOlderThan({})).toBe(false);
		expect(notOlderThan([])).toBe(false);
	});
});
