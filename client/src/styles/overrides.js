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
	MuiAvatar: {
		rounded: {
			borderRadius: '2px'
		}
	},
	MuiTypography: {
		h4: {
			fontSize: '28px'
		}
	},
	MuiButton: {
		containedSecondary: {
			boxShadow:
				'0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.05), 0 32px 64px rgba(0,0,0,0.05)',
			'&:hover': {
				boxShadow:
					'0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.05), 0 32px 64px rgba(0,0,0,0.05)'
			}
		}
	},
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
