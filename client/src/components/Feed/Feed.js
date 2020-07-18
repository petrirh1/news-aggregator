import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress, Backdrop } from '@material-ui/core';
import { FeedItem, Error } from '../../components';

import PropTypes from 'prop-types';

import { breakpoints } from '../../settings/masonryGrid/breakpoints';
import Masonry from 'react-masonry-css';
import styles from './Feeds.module.css';

const Feed = ({ data = [], fetchMore, hasMore, hasError, isLoading }) => {
	return (
		<InfiniteScroll
			dataLength={data.length}
			scrollThreshold={0.65}
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
				<Error />
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
