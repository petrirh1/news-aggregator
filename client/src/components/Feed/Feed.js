import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress, Backdrop } from '@material-ui/core';
import Masonry from 'react-masonry-css';

import PropTypes from 'prop-types';

import ErrorState from '../States/Error/Error';
import FeedItem from '../FeedItem/FeedItem';
import styles from './Feeds.module.css';

const breakpoints = {
	default: 3,
	1090: 3,
	760: 2,
	560: 1
};

const Feed = ({ data = [], fetchMore, hasMore, hasError, isLoading }) => {
	return (
		<InfiniteScroll
			dataLength={data.length}
			next={fetchMore}
			hasMore={hasMore}
			loader={
				<div className={styles.loader}>
					<CircularProgress color='primary' size={26} thickness={4} />
				</div>
			}
			style={{ overflow: 'none', position: 'relative' }}>
			<Backdrop className={styles.backdrop} open={isLoading}>
				<CircularProgress color='primary' size={26} thickness={4} />
			</Backdrop>
			{hasError ? (
				<ErrorState />
			) : (
				<Masonry
					breakpointCols={breakpoints}
					className={styles.masonryGrid}
					columnClassName={styles.masonryGridColumn}>
					{data &&
						!hasError &&
						data.map((data, i) => <FeedItem data={data} key={i} />)}
				</Masonry>
			)}
		</InfiniteScroll>
	);
};

Feed.propTypes = {
	data: PropTypes.array,
	fetchMore: PropTypes.func,
	hasMore: PropTypes.bool,
	hasError: PropTypes.bool,
	isLoading: PropTypes.bool
};

export default Feed;
