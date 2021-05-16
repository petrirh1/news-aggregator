import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Masonry as Masonic } from 'masonic';
import { CircularProgress, Backdrop } from '@material-ui/core';
import { FeedItem, Error } from '../../components';
import PropTypes from 'prop-types';
import styles from './Feeds.module.css';

const Feed = ({ data = [], fetchMore, hasMore, hasError, isLoading }) => {
	return (
		<InfiniteScroll
			dataLength={data.length}
			scrollThreshold={0.5}
			next={fetchMore}
			hasMore={hasMore}
			style={{ padding: '10px 10px 150px 10px' }}
			loader={
				<div className={styles.loader}>
					<CircularProgress
						color='primary'
						size={26}
						thickness={4}
						style={{ display: isLoading ? 'none' : 'block' }}
					/>
				</div>
			}>
			<Backdrop className={styles.backdrop} open={isLoading}>
				<CircularProgress color='primary' size={26} thickness={4} aria-label='progressbar' />
			</Backdrop>
			{hasError && <Error />}
			{data?.length > 1 && (
				<Masonic
					role='list'
					className={styles.masonry}
					items={data}
					columnGutter={25}
					columnWidth={235}
					overscanBy={2}
					render={FeedItem}
				/>
			)}
		</InfiniteScroll>
	);
};

Feed.propTypes = {
	data: PropTypes.array,
	fetchMore: PropTypes.func,
	hasMore: PropTypes.bool,
	hasError: PropTypes.bool,
	isLoading: PropTypes.bool,
};

export default Feed;
