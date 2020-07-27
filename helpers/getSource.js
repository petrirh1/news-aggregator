const getSource = (values, arr) => {
	let res = '';
	if (!Array.isArray(values) || !Array.isArray(arr)) return res;

	arr.forEach(item => {
		if (!item) return;

		const { long } = item;
		const temp = long && long.replace(' ', '').replace('&', '');

		if (values[0] && values[0].match(new RegExp(long, 'i'))) {
			return (res = item);
		}
		if (values[1] && values[1].match(new RegExp(temp, 'i'))) {
			return (res = item);
		}
	});

	return res;
};

module.exports = getSource;
