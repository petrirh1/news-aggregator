import React, { useState, useEffect } from 'react';
import {
	IconButton,
	Menu,
	FormControl,
	FormLabel,
	FormGroup,
	FormControlLabel,
	Switch
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import PropTypes from 'prop-types';
import style from './Menu.module.css';

const SimpleMenu = ({ isDark, handleThemeChange }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [checked, setChecked] = useState(isDark);

	useEffect(() => {
		setChecked(isDark);
	}, [isDark]);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChange = () => {
		setChecked(!checked);
		handleThemeChange();
	};

	return (
		<div className={style.root}>
			<IconButton aria-label='Asetukset' onClick={handleClick}>
				<MoreVertIcon color='secondary' />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				getContentAnchorEl={null}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				transformOrigin={{ vertical: 'top', horizontal: 'center' }}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<FormControl component='fieldset'>
					<FormLabel color='primary' focused={false} component='label'>
						Vaihda teema
					</FormLabel>
					<FormGroup>
						<FormControlLabel
							control={
								<Switch
									color='secondary'
									checked={checked}
									onChange={handleChange}
									name='theme-switch'
								/>
							}
							label='Tumma'
						/>
					</FormGroup>
				</FormControl>
			</Menu>
		</div>
	);
};

Menu.propTypes = {
	isDark: PropTypes.bool,
	handleThemeChange: PropTypes.func
};

export default SimpleMenu;
