import React, { useState } from 'react';
import ReactTimeAgo from 'react-time-ago';
import JavascriptTimeAgo from 'javascript-time-ago';
import fi from 'javascript-time-ago/locale/fi';
import { firstLetter } from '../../helpers/string';
import { getRandomNum } from '../../helpers/number';
import ImageIcon from '@material-ui/icons/Image';
import { MIN_IMAGE_WIDTH } from '../../constants/constants';
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

const FeedItem = ({ data }) => {
	const { image, source, title, isoDate, favicon } = data;
	const [hasLoaded, setHasLoaded] = useState(false);
	const randNum = getRandomNum(400, 1000);

	const handleImageLoad = () => {
		setHasLoaded(true);
	};

	return (
		<Card elevation={1} onClick={() => window.open(data.link, '_blank', 'noopener noreferrer')}>
			<CardActionArea disableRipple>
				{image.url && image.height >= MIN_IMAGE_WIDTH && (
					<div className={styles.container}>
						<Fade timeout={randNum} in={hasLoaded}>
							<CardMedia
								component='img'
								className={styles.media}
								image={image.url}
								title={source}
								alt='Uutiskuva'
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
							<Avatar variant='rounded' alt='Lähteen logo' src={favicon} className={styles.avatar}>
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
	);
};

FeedItem.propTypes = {
	data: PropTypes.object
};

export default FeedItem;
