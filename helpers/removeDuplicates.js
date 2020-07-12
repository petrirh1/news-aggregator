const removeDuplicates = (myArr, prop) => {
	return myArr.filter((obj, pos, arr) => {
		return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
	});
};

module.exports = removeDuplicates;
