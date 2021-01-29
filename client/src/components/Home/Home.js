import React, { useState, useEffect } from 'react';
import { Header, Feed, Footer } from '../../components';
import { fetchData } from '../../api';
import { updateDocTitle, updatePath } from '../../helpers/string';
import { limit, defaultPage } from '../../settings/fetchData/fetch';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
const title = document.title;

const Home = props => {
	const { pathname } = props.history.location;
	const { history } = props;

	const [isLoading, setLoading] = useState(true);
	const [hasError, setHasError] = useState(false);
	const [url, setUrl] = useState(pathname);
	const [news, setNews] = useState({ data: [] });
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		setUrl(updatePath(pathname, history));
		setHasMore(true);
		setNews([]);
		fetchDataByCategory();
		setHasError(false);
		document.title = updateDocTitle(title, pathname);

		// eslint-disable-next-line
	}, [pathname]);

	const fetchDataByCategory = async () => {
		setLoading(true);

		try {
			const data = await fetchData(pathname, defaultPage, limit);
			const { page, pages } = data;

			if (page >= pages) {
				setHasMore(false);
			}

			if (data.message) return; // request has been cancelled
			if (data.docs.length < 1) throw new Error('Data fetch failed.');

			setNews({
				data: data.docs,
				nextPage: page < pages ? page + 1 : page
			});
		} catch (err) {
			console.log(err);
			setHasMore(false);
			setHasError(true);
		} finally {
			setLoading(false);
		}
	};

	const fetchMore = async () => {
		if (isLoading) return;

		try {
			const data = await fetchData(url, news.nextPage, limit);
			const { page, pages } = data;

			if (page >= pages) {
				setHasMore(false);
			}

			setNews({
				data: [...news.data, ...data.docs],
				nextPage: page < pages ? page + 1 : page
			});
		} catch (err) {
			setHasMore(false);
			setHasError(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={styles.root}>
			<Header {...props} />
			<Feed
				data={news.data}
				isLoading={isLoading}
				fetchMore={fetchMore}
				hasMore={hasMore}
				hasError={hasError}
			/>
			<Footer />
		</div>
	);
};

Home.propTypes = {
	pathname: PropTypes.string,
	history: PropTypes.object
};

export default Home;
