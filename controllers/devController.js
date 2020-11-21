const getFavicons = require('get-website-favicon');

exports.getFavicon = async (req, res) => {
	const url = req.query.url;

	try {
		const result = await getFavicons(url).then(data => {
			return data.icons;
		});
	
		res.send(result);
		
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: err
		});
	}
};