import React from 'react';
import { Typography, Button } from '@material-ui/core';

import styles from './Error.module.css';

const Error = () => {
	const handlePageRefresh = () => {
		window.location.reload(false);
	};

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<Typography variant='h4' className={styles.title}>
					Voi pahus!
				</Typography>
				<Typography variant='subtitle2' color='secondary'>
					jotain meni pieleen..
				</Typography>
				<Button
					onClick={handlePageRefresh}
					variant='outlined'
					color='secondary'
					className={styles.button}>
					Päivitä sivu
				</Button>
			</div>
		</div>
	);
};

export default Error;
