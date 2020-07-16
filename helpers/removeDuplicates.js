const removeDuplicates = (array, prop) => {
	if (
		!Array.isArray(array) ||
		array.length === 0 ||
		Object.keys(array[0]).length === 0
	)
		return null;

	let uniq = {};
	return array.filter(obj => !uniq[obj[prop]] && (uniq[obj[prop]] = true));
};

module.exports = removeDuplicates;
