import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import JavascriptTimeAgo from 'javascript-time-ago';
import fi from 'javascript-time-ago/locale/fi';
import { timeStyle } from '../../settings/time/timeStyle';
import { firstLetter } from '../../helpers/string';
import PropTypes from 'prop-types';
import ImageIcon from '@material-ui/icons/Image';

import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	Avatar,
	Fade
} from '@material-ui/core';

import styles from './FeedItem.module.css';
JavascriptTimeAgo.addLocale(fi);

const FeedItem = ({ data }) => {
	const { image, source, title, date } = data;
	const { long, favicon } = source;
	const MIN_IMG_WIDTH = 350;

	const handleImageError = e => {
		e.target.style.display = 'none';
	};

	const handleImageLoad = e => {
		const target = e.target;

		if (e.target.naturalWidth < MIN_IMG_WIDTH) {
			target.style.objectFit = 'contain';
			target.style.width = 'auto';
			target.style.height = 'auto';
			target.style.borderRadius = '3px';
		}
	};

	return (
		<Fade timeout={650} in={true}>
			<Card
				elevation={1}
				className={styles.root}
				onClick={() => window.open(data.link, '_blank', 'noopener')}>
				<CardActionArea disableRipple>
					{image && (
						<Fade timeout={800} in={true}>
							<CardMedia component='div' className={styles.media} title={long}>
								<img
									onLoad={handleImageLoad}
									onError={handleImageError}
									alt='Uutiskuva'
									src={image}></img>
								<ImageIcon color='secondary' className={styles.placeholder} />
							</CardMedia>
						</Fade>
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
									alt='Lähteen logo'
									src={favicon}
									className={styles.avatar}>
									{firstLetter(long) || '?'}
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
									<span style={{ margin: '5px' }}>-</span>
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
		</Fade>
	);
};

FeedItem.propTypes = {
	data: PropTypes.object
};

export default FeedItem;
