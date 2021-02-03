const sources = require('./feedSources');
const requiredProps = ['url', 'home', 'source', 'favicon'];

test('Expect to return true', () => {
	expect(requiredProps.every(item => hasProperty(sources, item))).toBe(true);
});

const hasProperty = (arr, prop) => {
	return arr.every(item => item.hasOwnProperty(prop));
};
