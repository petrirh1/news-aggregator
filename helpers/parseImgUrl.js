const parseImageUrl = src => {
	if (src == null) return;

	if (src.url) {
		if (src.type && !src.type.includes('image')) return;

		// mostly for YLE's stamp sized images which are resizable by altering the url
		return src.url
			.replace('w_205', 'w_600')
			.replace('h_115', 'h_337')
			.replace('q_70', 'q_70')
			.replace('http:', 'https:');
	}

	if (src['media:content']) return src['media:content']['@'].url;
	if (src.includes('http:') || src.includes('https:')) {
		const matches = src
			.replace('http:', 'https:')
			.match(/\b(https?:\/\/\S+(?:png|jpe?g|gif)\s*)\b/i);

		return matches ? matches[0] : null;
	}
};

module.exports = parseImageUrl;
