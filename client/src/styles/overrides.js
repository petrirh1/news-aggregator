export const overrides = {
	MuiList: {
		padding: {
			paddingTop: 20,
			paddingRight: 15,
			paddingBottom: 15,
			paddingLeft: 15
		}
	},
	MuiFormLabel: {
		root: {
			marginBottom: 15
		}
	},
	MuiPaper: {
		elevation8: {
			boxShadow:
				'0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.05), 0 32px 64px rgba(0,0,0,0.05)'
		}
	},
	// MuiTabs: {
	// 	root: {
	// 		'&::after': {
	// 			content: "''",
	// 			position: 'absolute',
	// 			bottom: 0,
	// 			width: '100%',
	// 			height: '2px',
	// 			background: 'rgba(150, 150, 150, 0.15)'
	// 		}
	// 	}
	// },
	MuiTouchRipple: {
		child: {
			backgroundColor: '#90a4ae'
		}
	},
	PrivateTabIndicator: {
		root: {
			transition: 'none'
		}
	}
};
