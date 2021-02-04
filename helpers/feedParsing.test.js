const { imageURL, date, sources } = require('./testData.js');
const {
	parseFeed,
	getImageDetails,
	daysAgo,
	filterOutNonUnique,
	parseImageUrl,
	parseCategories,
	getHostname
} = require('./feedParsing.js');

test('Expect to return an object with image dimensions', async () => {
	expect(await getImageDetails(imageURL)).toEqual({
		hUnits: 'px',
		height: 1401,
		length: 84447,
		mime: 'image/jpeg',
		type: 'jpg',
		url:
			'https://images.unsplash.com/photo-1612084545021-750fd73ab41b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
		wUnits: 'px',
		width: 934
	});
});

test('Expect to return hostname', () => {
	expect(getHostname('https://google.com')).toEqual('google');
});

test('Expect to return false', () => {
	expect(daysAgo(date)).toBe(false);
});

test('Expect to return an array of unique objects', () => {
	expect(filterOutNonUnique(sources)).toEqual([
		{
			source: 'Valioliiga',
			home: 'https://www.valioliiga.com'
		},
		{
			source: 'Muropaketti',
			home: 'https://muropaketti.com/'
		}
	]);
});
