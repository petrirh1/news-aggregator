const parseTitle = title => {
	return title.split('|').pop();
};

module.exports = parseTitle;
