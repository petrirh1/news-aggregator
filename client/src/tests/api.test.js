const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http');
const endpoint = 'http://localhost:5000/api/uutiset/';

describe('api tests', () => {
	test('Should not return duplicates', async () => {
		sessionStorage.clear();

		const batch1 = await axios.get(endpoint + 'uusimmat?page=1&limit=50');
		const batch2 = await axios.get(endpoint + 'uusimmat?page=2&limit=50');
		const batch3 = await axios.get(endpoint + 'uusimmat?page=3&limit=50');
		const batch4 = await axios.get(endpoint + 'uusimmat?page=4&limit=50');
		const batch5 = await axios.get(endpoint + 'uusimmat?page=5&limit=50');
		const news = [
			...batch1.data.docs,
			...batch2.data.docs,
			...batch3.data.docs,
			...batch4.data.docs,
			...batch5.data.docs,
		];

		const uniqueValues = new Set(news.map((el) => el.title));
		const hasUniqueValuesOnly = uniqueValues.size < news.length;
		sessionStorage.clear();

		expect(hasUniqueValuesOnly).toBeFalsy();
	});
});
