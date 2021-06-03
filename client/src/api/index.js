import axios from 'axios';
import { shouldUseCache, storeInCache } from '../helpers/cache';
import { hasStorage } from '../helpers/hasStorage';
import { DEFAULT_ENDPOINT } from '../constants/constants';
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
		if (hasStorage() && cachedData && shouldUseCache(cachedData, page, url)) {
			return JSON.parse(cachedData);
		}

		const { data } = await axios.get(`${DEFAULT_ENDPOINT}${url}?page=${page}&limit=${limit}`, {
			cancelToken: cancelToken.token,
		});

		if (hasStorage() && data.docs.length > 0) {
			storeInCache(url, data);
		}

		return data;
	} catch (error) {
		return error;
	}
};

export const fetchSources = async () => {
	try {
		const { data } = await axios.get(`${DEFAULT_ENDPOINT}/lahteet`);
		return data;
	} catch (error) {
		return error;
	}
};
