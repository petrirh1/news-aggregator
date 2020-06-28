import React from 'react';
import { Typography, Button, Link } from '@material-ui/core';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';

import styles from './Error.module.css';

const Error = () => {
	return (
		<div className={styles.root}>
			<WarningRoundedIcon color='disabled' className={styles.icon} />
			<Typography variant='subtitle2' className={styles.subtitle}>
				Hups, jotain meni pieleen..
			</Typography>
			<Link href='/' underline='none'>
				<Button variant='contained' className={styles.button}>
					Yritä uudelleen
				</Button>
			</Link>
		</div>
	);
};

export default Error;
