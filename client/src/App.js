import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Home } from './components';
import { lightTheme, darkTheme } from './styles';

import styles from './App.module.css';

const App = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const darkTheme = localStorage.getItem('isDark') === 'true' ? true : false;
		setIsDark(darkTheme);
	}, []);

	const handleThemeChange = () => {
		setIsDark(!isDark);
		localStorage.setItem('isDark', !isDark);
	};

	return (
		<MuiThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<CssBaseline />
			<Router>
				<div className={styles.App}>
					<Switch>
						<Redirect exact from='/' to='/uusimmat' />
						<Route
							exact
							path='/:page?'
							render={props => (
								<Home
									isDark={isDark}
									handleThemeChange={handleThemeChange}
									{...props}
								/>
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
