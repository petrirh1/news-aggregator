import axios from 'axios';
let cancelToken;

export const fetchData = async (url, page = 1, limit) => {
	if (cancelToken) {
		cancelToken.cancel('Operation canceled due to new request.');
	}
	cancelToken = axios.CancelToken.source();

	try {
		const { data } = await axios.get(
			`/api/uutiset${url}?page=${page}&limit=${limit}`,
			{ cancelToken: cancelToken.token }
		);

		return data;
	} catch (error) {
		return error;
	}
};
