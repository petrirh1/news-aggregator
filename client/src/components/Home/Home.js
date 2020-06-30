import React, { useState, useEffect } from 'react';
import { Header, Feed, Footer } from '../../components';
import { fetchData } from '../../api';
import { updateDocTitle, updatePath } from '../../helpers/string';
import PropTypes from 'prop-types';

import styles from './Home.module.css';
const title = document.title;

const Home = props => {
	const { pathname } = props.history.location;
	const { history } = props;

	const [isLoading, setLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [url, setUrl] = useState(pathname);
	const [news, setNews] = useState({ data: [] });
	const [hasMore, setHasMore] = useState(true);
	const defaultPage = 1;
	const limit = 25;

	useEffect(() => {
		setUrl(updatePath(pathname, history));
		setHasMore(true);
		setNews([]);
		fetchDataByCategory();
		setHasError(false);

		document.title = updateDocTitle(title, pathname);
	}, [pathname]);

	const fetchDataByCategory = async () => {
		setLoading(true);

		try {
			const data = await fetchData(pathname, defaultPage, limit);

			if (!data.next) {
				setHasMore(false);
			}

			setNews({ data: data.results, nextPage: data.next.page });
		} catch (err) {
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

			if (!data.next) {
				setHasMore(false);
			}

			setNews({
				data: [...news.data, ...data.results],
				nextPage: data.next ? data.next.page : null
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
