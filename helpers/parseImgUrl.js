const parseImageUrl = src => {
	if (!src.type || !src.type.includes('image')) return '';

	const newUrl = src.url
		.replace('w_205', 'w_600')
		.replace('h_115', 'h_337')
		.replace('q_70', 'q_90');

	return newUrl;
};

module.exports = parseImageUrl;
