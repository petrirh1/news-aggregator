import axios from 'axios';
let cancelToken;

export const fetchData = async (url, page = 1, limit) => {
	if (cancelToken) {
		cancelToken.cancel('Operation canceled due to new request.');
	}
	cancelToken = axios.CancelToken.source();

	const newUrl = url.replace('(', '').replace(')', '');

	try {
		const { data } = await axios.get(
			`/api/uutiset${newUrl}?page=${page}&limit=${limit}`,
			{ cancelToken: cancelToken.token }
		);

		// console.log(data);

		return data;
	} catch (error) {
		return error;
	}
};

export const fetchSources = async () => {
	try {
		const { data } = await axios.get('/api/lahteet');
		return data;
	} catch (error) {
		return error;
	}
};

fetchSources();
