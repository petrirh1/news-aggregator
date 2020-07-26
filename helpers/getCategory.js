const { tech, entertainment, sport } = require('../sources/feeds/categories');
const categories = [tech, entertainment, sport];
const keywords = ['tekniikka', 'viihde', 'urheilu'];

const getCategory = arr => {
	if (!Array.isArray(arr)) return;

	const result = categories.map((category, i) => {
		if (findCommonElements(arr, category)) {
			return keywords[i];
		}
	});

	const newResult = result.filter(el => el != undefined);
	return newResult.length ? [newResult[0]] : [];
};

const findCommonElements = (arr1, arr2) => {
	return arr1.find(r => {
		if (arr2.includes(r.toLowerCase())) {
			return arr2;
		}
	});
};

module.exports = getCategory;
