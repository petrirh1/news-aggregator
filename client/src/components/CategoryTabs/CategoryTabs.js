import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab, useMediaQuery } from '@material-ui/core';

export const categories = [
	'uusimmat',
	'kotimaa',
	'ulkomaat',
	'politiikka',
	'urheilu',
	'viihde',
	'tekniikka',
	'tekniikka(en)'
];

const CategoryTabs = props => {
	const notHoverable = useMediaQuery('(hover: none)');
	const matches = useMediaQuery('(min-width: 975px)');
	const { history, match } = props;
	const { params } = match;
	const { page } = params;

	useEffect(() => {
		setSelectedTab(findIndexOf(page));
	}, [page]);

	const findIndexOf = page => {
		const index = categories.indexOf(page);
		return index < 0 ? 0 : index;
	};

	const [selectedTab, setSelectedTab] = useState(findIndexOf(page));

	const handleChange = (event, newValue) => {
		// setSelectedTab(newValue);
		history.push(`${categories[newValue]}`);
		window.scrollTo(0, 0);
	};

	return (
		<AppBar position='static' elevation={0} color='default'>
			<Tabs
				centered={matches}
				value={selectedTab}
				onChange={handleChange}
				indicatorColor='primary'
				textColor='primary'
				variant={matches ? 'standard' : 'scrollable'}
				scrollButtons={!matches && notHoverable ? 'off' : 'on'}
				aria-label='uutiskategoriat'>
				{categories.map((label, i) => (
					<Tab key={i} label={label} style={{ minWidth: 100 }} />
				))}
			</Tabs>
		</AppBar>
	);
};

export default CategoryTabs;
