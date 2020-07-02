const categories = require('../sources/feeds/categories');

const parseCategory = arr => {
	const result = findCommonElements(arr, categories);
	return result ? ['tekniikka'] : arr;
};

const findCommonElements = (arr1, arr2) => {
	return arr1.some(r => arr2.includes(r.toLowerCase()));
};

module.exports = parseCategory;
