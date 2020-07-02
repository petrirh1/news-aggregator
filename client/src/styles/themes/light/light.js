import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import { overrides } from '../../overrides';

const lightTheme = createMuiTheme({
	palette: {
		primary: {
			main: blueGrey[800]
		},
		secondary: {
			main: '#5A6064' //menu icon
		},
		background: {
			default: '#fff',
			paper: '#fff' // menu bg
		},
		text: {
			primary: blueGrey[900],
			secondary: 'rgba(55, 71, 79, 0.75)' // details, tabs
		},
		divider: '#e0e0e0'
	},
	overrides: {
		...overrides,
		// MuiCard: {
		// 	root: {
		// 		boxShadow:
		// 			'0px 20px 60px 1px rgba(0, 0, 0, 0.05) ,0px 7px 20px -18px rgba(0, 0, 0, 0.85), 0px 1px 5px -3px rgba(0, 0, 0, 0.3)'
		// 	}
		// },
		MuiCardContent: {
			root: {
				background: '#fff'
			}
		},
		MuiButtonBase: {
			root: {
				color: blueGrey[900] //card hover
			}
		},
		MuiTouchRipple: {
			child: {
				backgroundColor: '#899095'
			}
		},
		MuiTab: {
			root: {
				'&:hover': {
					color: blueGrey[800],
					borderRadius: '3px 3px 0 0'
				}
			}
		},
		MuiAppBar: {
			colorDefault: {
				backgroundColor: '#fff'
			}
		},
		MuiSwitch: {
			track: {
				backgroundColor: blueGrey[800]
			}
		}
	}
});

export default lightTheme;
