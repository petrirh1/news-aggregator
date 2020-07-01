import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import JavascriptTimeAgo from 'javascript-time-ago';
import fi from 'javascript-time-ago/locale/fi';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import { firstLetter } from '../../helpers/string';

import PropTypes from 'prop-types';

import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	Avatar
} from '@material-ui/core';

import styles from './FeedItem.module.css';
JavascriptTimeAgo.addLocale(fi);

const timeStyle = {
	flavour: ['short-convenient', 'short'],
	units: ['now', 'minute', 'hour', 'day', 'week', 'month', 'year']
};

const FeedItem = ({ data }) => {
	const { image, source, title, date } = data;
	const { long, favicon } = source;

	const handleImageError = e => {
		e.target.style.display = 'none';
	};

	return (
		<Card
			elevation={0}
			className={styles.root}
			onClick={() => window.open(data.link, '_blank', 'noopener')}>
			<CardActionArea disableRipple>
				{image && (
					<CardMedia component='div' className={styles.media}>
						<img onError={handleImageError} alt='news img' src={image}></img>
						<ImageRoundedIcon className={styles.placeholder} />
					</CardMedia>
				)}
				<CardContent>
					<Typography
						gutterBottom
						variant='subtitle2'
						color='textPrimary'
						component='h6'
						className={styles.title}>
						{title}
					</Typography>
					<div className={styles.wrapper}>
						<div className={styles.source}>
							<Avatar
								variant='rounded'
								alt='Source logo'
								src={favicon}
								className={styles.avatar}>
								{firstLetter(long)}
							</Avatar>
							<Typography
								variant='subtitle2'
								color='textSecondary'
								className={styles.details}>
								{long}
							</Typography>
						</div>
						<div className={styles.date}>
							<Typography
								variant='subtitle2'
								color='textSecondary'
								className={styles.details}>
								<span style={{ margin: '5px' }}> &#8226;</span>
								<ReactTimeAgo
									date={new Date(date)}
									locale='fi'
									timeStyle={timeStyle}
								/>
							</Typography>
						</div>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

FeedItem.propTypes = {
	data: PropTypes.object
};

export default FeedItem;
