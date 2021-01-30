import axios from 'axios';
let cancelToken;

export const fetchData = async (url, page, limit) => {
	/*
	 * Cancel token is used to cancel ongoing fetch request,
	 * this is useful when category is changed before data has finished fetching
	 */
	if (cancelToken) {
		cancelToken.cancel('Operation canceled due to new request.');
	}

	cancelToken = axios.CancelToken.source();
	url = url.replace('(', '').replace(')', '');

	try {
		const { data } = await axios.get(`/api/uutiset${url}?page=${page}&limit=${limit}`, {
			cancelToken: cancelToken.token
		});

		return data;
	} catch (error) {
		return error;
	}
};

export const fetchSources = async () => {
	try {
		const { data } = await axios.get('/api/uutiset/lahteet');
		return data;
	} catch (error) {
		return error;
	}
};

fetchSources();
