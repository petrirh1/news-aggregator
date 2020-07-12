const { tech, entertainment, sport } = require('../sources/feeds/categories');
const categories = [tech, entertainment, sport];
const keywords = ['tekniikka', 'viihde', 'urheilu'];

const getCategory = arr => {
	const result = categories.map((category, i) => {
		if (findCommonElements(arr, category)) {
			return keywords[i];
		}
	});

	return result.filter(el => el != undefined);
};

const findCommonElements = (arr1, arr2) => {
	return arr1.some(r => {
		if (arr2.includes(r.toLowerCase())) {
			return arr2;
		}
	});
};

module.exports = getCategory;