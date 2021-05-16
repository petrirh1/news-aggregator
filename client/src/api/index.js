import axios from 'axios';
import { shouldUseCache, storeInCache } from '../helpers/cache';
import { hasStorage } from '../helpers/hasStorage';
let cancelToken;

export const fetchData = async (url, page, limit) => {
	url = url.replace('(', '').replace(')', '');
	const cachedData = hasStorage() && sessionStorage.getItem(url);

	/*
	 * Cancel token is used to cancel ongoing fetch request,
	 * this is useful when category is changed before data has finished fetching
	 */
	if (cancelToken) {
		cancelToken.cancel('Operation canceled due to new request.');
	}

	cancelToken = axios.CancelToken.source();

	try {
		if (hasStorage() && cachedData && shouldUseCache(cachedData, page)) {
			console.log('Hi!');
			return JSON.parse(cachedData);
		}

		const { data } = await axios.get(`/api/uutiset${url}?page=${page}&limit=${limit}`, {
			cancelToken: cancelToken.token,
		});

		if (hasStorage()) {
			storeInCache(url, data);
		}

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
