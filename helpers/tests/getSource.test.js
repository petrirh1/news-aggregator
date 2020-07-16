const getSource = require('../getSource');
const sources = require('../../sources/feeds/feedSources');

describe('return news source', () => {
	test('should return source', () => {
		expect(
			getSource(
				[
					'Yle Uutiset | Tuoreimmat uutiset',
					'Yle Uutiset | Tuoreimmat uutiset'
				],
				sources
			)
		).toEqual(expect.objectContaining({ long: 'Yle' }));

		expect(
			getSource(
				[
					' ',
					'https://aamuset.fi/artikkeli/5007000/Valaistus+ja+kiveystyo+jatkuu+Piispankadulla+ja+Kasarmikadulla'
				],
				sources
			)
		).toEqual(expect.objectContaining({ long: 'Aamuset' }));
	});

	test('should return an empty string', () => {
		expect(getSource([' ', 'https://abc.fi'], sources)).toEqual('');
	});
});
