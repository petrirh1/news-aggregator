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

const SimpleMenu = ({ isDark, handleThemeChange, setIsOpen }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [options, setOptions] = useState({
		isDark: isDark
	});

	useEffect(() => {
		setOptions({ isDark });
	}, [isDark]);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChange = ({ target }) => {
		if (target.id === 'theme-switcher') {
			setOptions({ ...options, isDark: !options.isDark });
			handleThemeChange();
		}
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
				onEnter={() => setIsOpen(true)}
				onExit={() => setIsOpen(false)}
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<FormControl component='fieldset'>
					<FormLabel color='primary' focused={true} component='label'>
						Ulkoasu
					</FormLabel>
					<FormGroup>
						<FormControlLabel
							control={
								<Switch
									color='secondary'
									id='theme-switcher'
									checked={options.isDark}
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
	handleThemeChange: PropTypes.func,
	setIsOpen: PropTypes.func
};

export default SimpleMenu;
