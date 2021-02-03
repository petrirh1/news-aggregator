const imageURL = 'https://bit.ly/39AvVCo';
const date = '24/05/2021';
const sources = [
	{
		url: 'https://www.valioliiga.com/feed/',
		source: 'Valioliiga',
		home: 'https://www.valioliiga.com',
		category: 'urheilu',
		favicon: '/assets/valioliiga-favicon-192x192.png'
	},
	{
		url: 'https://muropaketti.com/kategoria/mobiili/mobiiliuutiset/feed/',
		source: 'Muropaketti',
		home: 'https://muropaketti.com/',
		category: 'tekniikka',
		favicon:
			'https://muropaketti.com/wp-content/themes/om-muropaketti-theme/assets/img/apple-icon-180.png'
	},
	{
		url: 'https://muropaketti.com/kategoria/tietotekniikka/tietotekniikkauutiset/feed/',
		source: 'Muropaketti',
		home: 'https://muropaketti.com/',
		category: 'tekniikka',
		favicon:
			'https://muropaketti.com/wp-content/themes/om-muropaketti-theme/assets/img/apple-icon-180.png'
	}
];

module.exports = { imageURL, date, sources };
