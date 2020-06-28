import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@material-ui/core';
import Masonry from 'react-masonry-css';

import FeedItem from '../FeedItem/FeedItem';
import styles from './Feeds.module.css';

const breakpoints = {
	default: 3,
	1090: 3,
	760: 2,
	560: 1
};

const Feed = ({ data = [], fetchMore, hasMore }) => {
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
			style={{ overflow: 'none' }}>
			<Masonry
				breakpointCols={breakpoints}
				className={styles.masonryGrid}
				columnClassName={styles.masonryGridColumn}>
				{data && data.map((data, i) => <FeedItem data={data} key={i} />)}
			</Masonry>
		</InfiniteScroll>
	);
};

export default Feed;
