import React from 'react';
import { Typography, Link } from '@material-ui/core';

import styles from './Logo.module.css';

const Logo = ({ width, variant, mr }) => {
	return (
		<div className={styles.branding}>
			<Link
				href='/'
				underline='none'
				style={{
					display: 'flex',
					height: '100%',
					alignItems: 'center'
				}}>
				<img
					width={width}
					src={require('../../assets/app-logo.svg')}
					alt='logo'
					style={{ marginRight: `${mr}` }}></img>
				<Typography
					variant={variant}
					color='primary'
					className={styles.appTitle}>
					Uutisankka
				</Typography>
			</Link>
		</div>
	);
};

export default Logo;
