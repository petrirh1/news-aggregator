const parseTitle = require('../parseTitle');

describe('parse title', () => {
	test('should remove | if found', () => {
		expect(parseTitle('Urheilu | Uutinen')).toBe('Uutinen');
		expect(parseTitle('Uusi uutinen')).toBe('Uusi uutinen');
	});

	test('should remove white space', () => {
		expect(parseTitle(' Uusi uutinen')).toBe('Uusi uutinen');
	});

	test('should return an empty string', () => {
		expect(parseTitle('')).toBe('');
		expect(parseTitle(undefined)).toBe('');
		expect(parseTitle(null)).toBe('');
		expect(parseTitle({ object: 'object' })).toBe('');
		expect(parseTitle(['item1', 'item2'])).toBe('');
	});
});
