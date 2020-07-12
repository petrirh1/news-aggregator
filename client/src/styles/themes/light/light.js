import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, grey } from '@material-ui/core/colors';
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
		MuiCardContent: {
			root: {
				background: '#fff'
			}
		},
		MuiButtonBase: {
			root: {
				color: grey[600] //card hover
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
		},
		MuiLink: {
			root: {
				'&:hover': {
					color: '#263238',
					textShadow: '0 0 .5px #263238, 0 0 .5px #263238'
				}
			}
		}
	}
});

export default lightTheme;
