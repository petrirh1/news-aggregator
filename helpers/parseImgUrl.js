const parseImageUrl = source => {
	if (!source.type || !source.type.includes('image')) return '';

	const newUrl = source.url
		.replace('w_205', 'w_600')
		.replace('h_115', 'h_337')
		.replace('q_70', 'q_90');

	return newUrl;
};

module.exports = parseImageUrl;
