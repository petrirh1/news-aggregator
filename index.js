const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const limiter = require('./middleware/rate');
const helmet = require('helmet');
const mongoose = require('mongoose');
const feedRoute = require('./routes/feedRoute');
const devRoute = require('./routes/devRoute');
const dev = process.env.NODE_ENV === 'production' ? false : true;
require('dotenv').config();

app.use(
	helmet({
		contentSecurityPolicy: {
			directives: {
				...helmet.contentSecurityPolicy.getDefaultDirectives(),
				'img-src': ['*'],
				'connect-src': [
					"'self'",
					"'sha256-eE1k/Cs1U0Li9/ihPPQ7jKIGDvR8fYw65VJw+txfifw='",
					'https://www.google-analytics.com/analytics.js',
					'www.google-analytics.com',
				],
				'script-src': [
					"'self'",
					"'sha256-eE1k/Cs1U0Li9/ihPPQ7jKIGDvR8fYw65VJw+txfifw='",
					'https://www.google-analytics.com/analytics.js',
				],
			},
		},
	})
);
app.use(limiter);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
	.connect(process.env.CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log('Connected to mongoDB...'))
	.catch((err) => {
		console.log(err);
	});

// mongoose.connection.once('connected', () => {
// 	require('./cronJob');
// });

app.use('/api/uutiset', feedRoute);

if (dev) {
	app.use('/api/getFavicon', devRoute);
}

app.use(express.static(path.join(__dirname, '/client/build')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets/favicons/')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
