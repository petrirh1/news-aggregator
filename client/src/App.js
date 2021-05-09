import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Home } from './components';
import { lightTheme, darkTheme } from './styles';
import ReactGA from 'react-ga';

import styles from './App.module.css';

const App = () => {
	const [options, setOptions] = useState({ isDark: false });

	useEffect(() => {
		const darkTheme = localStorage.getItem('isDark') === 'true' ? true : false;
		setOptions({ isDark: darkTheme });

		ReactGA.initialize(process.env.REACT_APP_GA_ID);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	const handleThemeChange = () => {
		setOptions({ ...options, isDark: !options.isDark });
		localStorage.setItem('isDark', !options.isDark);
	};

	return (
		<MuiThemeProvider theme={options.isDark ? darkTheme : lightTheme}>
			<CssBaseline />
			<Router>
				<div className={styles.App}>
					<Switch>
						<Redirect exact from='/' to='/uusimmat' />
						<Route
							exact
							path='/:page?'
							render={props => (
								<Home isDark={options.isDark} handleThemeChange={handleThemeChange} {...props} />
							)}
						/>
						<Route render={() => <Redirect to={{ pathname: '/' }} />} />
					</Switch>
				</div>
			</Router>
		</MuiThemeProvider>
	);
};

export default App;
