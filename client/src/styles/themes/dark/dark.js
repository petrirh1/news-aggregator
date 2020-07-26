import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import { overrides } from '../../overrides';
const darkBGcolor = '#131314';

const darkTheme = createMuiTheme({
	palette: {
		primary: {
			main: blueGrey[50]
		},
		secondary: {
			main: blueGrey[300] //menu icon
		},
		background: {
			default: darkBGcolor,
			paper: '#222426' // menu bg
		},
		text: {
			primary: '#F2F5F6',
			secondary: blueGrey[300] // details, tabs
		},
		divider: 'rgba(55, 71, 79, 0.5)'
	},
	overrides: {
		...overrides,
		MuiButtonBase: {
			root: {
				color: blueGrey[50] //card hover
			}
		},
		MuiTouchRipple: {
			child: {
				backgroundColor: '#768494'
			}
		},
		MuiTab: {
			root: {
				'&:hover': {
					color: blueGrey[50],
					borderRadius: '3px 3px 0 0'
				}
			}
		},
		MuiAppBar: {
			colorDefault: {
				backgroundColor: darkBGcolor
			}
		},
		// MuiCardMedia: {
		// 	root: {
		// 		borderBottom: '1px solid #2F393E'
		// 	}
		// },
		// MuiCard: {
		// 	root: {
		// 		background: darkBGcolor,
		// 		borderRadius: '5px',
		// 		border: '1px solid #2F393E'
		// 	}
		// },
		MuiLink: {
			root: {
				'&:hover': {
					color: blueGrey[50]
				}
			}
		}
	}
});

export default darkTheme;
