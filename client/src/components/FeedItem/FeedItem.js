import React, { useState } from 'react';
import ReactTimeAgo from 'react-time-ago';
import JavascriptTimeAgo from 'javascript-time-ago';
import fi from 'javascript-time-ago/locale/fi';
import { firstLetter } from '../../helpers/string';
import ImageIcon from '@material-ui/icons/Image';
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

	const handleImageError = e => {
		console.log(e.target);
		e.target.style.display = 'none';
	};

	const handleImageLoad = () => {
		setHasLoaded(true);
	};

	return (
		<Fade timeout={1000} in={true}>
			<Card
				elevation={1}
				className={styles.root}
				onClick={() => window.open(data.link, '_blank', 'noopener noreferrer')}>
				<CardActionArea disableRipple>
					{image.url && !hidePics && (
						<div className={styles.container}>
							<Fade timeout={500} in={hasLoaded}>
								<CardMedia
									component='img'
									className={styles.media}
									image={image.url}
									title={source}
									alt='Uutiskuva'
									onError={handleImageError}
									onLoad={handleImageLoad}
								/>
							</Fade>
							<div className={styles.placeholder}>
								<ImageIcon color='primary' />
							</div>
						</div>
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
									<ReactTimeAgo date={new Date(isoDate)} locale='fi' timeStyle='twitter' />
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
