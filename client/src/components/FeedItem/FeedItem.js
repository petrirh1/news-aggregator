import React, { useState } from 'react';
import ReactTimeAgo from 'react-time-ago';
import JavascriptTimeAgo from 'javascript-time-ago';
import fi from 'javascript-time-ago/locale/fi';
import { timeStyle } from '../../settings/time/timeStyle';
import { firstLetter } from '../../helpers/string';
import PropTypes from 'prop-types';

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

const FeedItem = ({ data, hidePics }) => {
	const [hasLoaded, setHasLoaded] = useState(false);
	const { image, source, title, isoDate, favicon } = data;
	const MIN_IMG_WIDTH = 350;

	const handleImageError = e => {
		e.target.style.display = 'none';
	};

	const handleImageLoad = e => {
		const { target } = e;

		if (target.naturalWidth < MIN_IMG_WIDTH) {
			target.style.objectFit = 'contain';
			target.style.width = 'auto';
			target.style.height = 'auto';
			target.style.borderRadius = '3px';
		}
		setHasLoaded(true);
	};

	return (
		<Fade timeout={650} in={true}>
			<Card
				elevation={1}
				className={styles.root}
				onClick={() => window.open(data.link, '_blank', 'noopener')}>
				<CardActionArea disableRipple>
					{image.url && !hidePics && (
						<Fade timeout={800} in={true}>
							<CardMedia
								style={{ display: 'none' }}
								component='div'
								className={styles.media}
								title={source}>
								<Fade timeout={500} in={hasLoaded}>
									<img
										onLoad={handleImageLoad}
										onError={handleImageError}
										alt='Uutiskuva'
										src={image.url}></img>
								</Fade>
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
									{firstLetter(source) || '?'}
								</Avatar>
								<Typography variant='subtitle2' color='textSecondary' className={styles.details}>
									{source}
								</Typography>
							</div>
							<div className={styles.date}>
								<Typography variant='subtitle2' color='textSecondary' className={styles.details}>
									<span style={{ margin: '5px' }}>-</span>
									<ReactTimeAgo date={new Date(isoDate)} locale='fi' timeStyle={timeStyle} />
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
