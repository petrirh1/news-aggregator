import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import styles from './Footer.module.css';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className={styles.root}>
			<Divider />
			<div className={styles.wrapper}>
				<Typography color='primary' variant='body2'>{`©${year} Uutisankka`}</Typography>
			</div>
		</div>
	);
};

export default Footer;
