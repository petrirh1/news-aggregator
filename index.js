const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const mongoose = require('mongoose');
const feedRoute = require('./routes/feedRoute');
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
	.connect(process.env.CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => console.log('Connected to mongoDB...'))
	.catch(err => {
		console.log(err);
	});

app.use('/api/uutiset', feedRoute);
app.use(express.static(path.join(__dirname, '/client/build')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets/favicons/')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
