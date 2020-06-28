const paginateResults = () => {
	return (req, res, next) => {
		const page = parseInt(req.query.page);
		const limit = parseInt(req.query.limit);
		const data = res.parsedData;

		console.log(page, limit, req.route.path.replace('/api/uutiset', ''));

		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;

		const results = {};

		if (endIndex < data.length) {
			results.next = {
				page: page + 1,
				limit: limit
			};
		}

		results.results = data.slice(startIndex, endIndex);
		res.paginatedResults = results;

		next();
	};
};

module.exports = paginateResults;
