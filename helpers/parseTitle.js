const parseTitle = title => {
	if (typeof title !== 'string') return '';

	return title
		.split('|')
		.pop()
		.trim();
};

module.exports = parseTitle;
