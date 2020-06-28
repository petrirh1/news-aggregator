import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import { overrides } from '../../overrides';

const darkTheme = createMuiTheme({
	palette: {
		primary: {
			main: blueGrey[50]
		},
		secondary: {
			main: blueGrey[300] //menu icon
		},
		background: {
			default: '#151617',
			paper: '#292A2B' // menu bg
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
				backgroundColor: '#151617'
			}
		}
	}
});

export default darkTheme;
