const getSource = (value, arr) => {
	let res = '';

	arr.forEach(item => {
		const { long } = item;
		const temp = long.replace(' ', '').replace('&', '');

		if (value[0].match(new RegExp(long, 'i'))) {
			return (res = item);
		}
		if (value[1].match(new RegExp(temp, 'i'))) {
			return (res = item);
		}
	});

	return res;
};

module.exports = getSource;
