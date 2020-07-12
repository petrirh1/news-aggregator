const removeDuplicates = require('../helpers/removeDuplicates');

const filterByCategory = category => {
	return (req, res, next) => {
		const { parsedData } = res;

		const filteredData = parsedData.filter(el =>
			el.categories.includes(category)
		);

		res.parsedData = filteredData;

		next();
	};
};

module.exports = filterByCategory;
