const getCategory = require('../getCategory');

describe('return category or empty array', () => {
	test('should return single category', () => {
		expect(getCategory(['tekniikka', 'esports'])).toEqual(['tekniikka']);
		expect(getCategory(['kehittäjäversio', 'viihde'])).toEqual(['tekniikka']);
		expect(getCategory(['peli', 'pelit'])).toEqual(['viihde']);
		expect(getCategory(['3g', 'indie', 'f1'])).toEqual(['tekniikka']);
		expect(getCategory(['la liga'])).toEqual(['urheilu']);
	});

	test('should return an empty array', () => {
		expect(getCategory(['abc'])).toEqual([]);
		expect(getCategory([])).toEqual([]);
		expect(getCategory()).toEqual([]);
		expect(getCategory({})).toEqual([]);
		expect(getCategory(null)).toEqual([]);
		expect(getCategory(undefined)).toEqual([]);
	});
});
