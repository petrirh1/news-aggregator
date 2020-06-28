const getFavicons = require('get-website-favicon');

const getFavicon = async (req, res, next) => {
	const url = req.query.url;

	console.log(url);

	const result = await getFavicons(url).then(data => {
		return data.icons;
	});

	console.log('res:', result);
	res.favicons = result;

	next();
};

module.exports = getFavicon;
