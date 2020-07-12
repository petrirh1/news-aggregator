import React from 'react';
import { CategoryTabs, Logo, Menu } from '../../components';
import { AppBar, Toolbar, useScrollTrigger, Slide } from '@material-ui/core';

import PropTypes from 'prop-types';

import styles from './Header.module.css';

const HideOnScroll = props => {
	const { children } = props;
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
};

const Header = props => {
	return (
		<HideOnScroll {...props}>
			<AppBar
				position='sticky'
				elevation={0}
				color='default'
				className={styles.appbar}>
				<Toolbar className={styles.toolbar}>
					<div className={styles.wrapper}>
						<Logo width={21} variant={'h5'} mr={'12px'} />
						<Menu {...props} />
					</div>
				</Toolbar>
				<CategoryTabs {...props} />
			</AppBar>
		</HideOnScroll>
	);
};

HideOnScroll.propTypes = {
	children: PropTypes.object
};

export default Header;
