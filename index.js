const compression = require('compression');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

const parseData = require('./middleware/parseData');
const paginateResults = require('./middleware/paginateResults');
const getFavicon = require('./middleware/getFavicon');

const RssFeedEmitter = require('rss-feed-emitter');
const feeder = new RssFeedEmitter();

const recentNews = [];
const homeNews = [];
const abroadNews = [];
const politicalNews = [];
const sportNews = [];
const entertainmentNews = [];
const techNews = [];
const techNewsEN = [];

const sources = require('./sources/feeds/feedSources');
const {
	recent,
	home,
	abroad,
	political,
	sports,
	entertainment,
	technology,
	technologyEN
} = require('./sources/feeds/feeds');

app.use(compression());

feeder.add(
	{
		url: recent,
		eventName: 'recent'
	},
	{
		url: home,
		eventName: 'home'
	},
	{
		url: abroad,
		eventName: 'abroad'
	},
	{
		url: political,
		eventName: 'political'
	},
	{
		url: sports,
		eventName: 'sports'
	},
	{
		url: entertainment,
		eventName: 'entertainment'
	},
	{
		url: technology,
		eventName: 'technology'
	},
	{
		url: technologyEN,
		eventName: 'technologyEN'
	}
);

feeder.on('recent', item => {
	recentNews.push(item);
});

feeder.on('home', item => {
	homeNews.push(item);
});

feeder.on('abroad', item => {
	abroadNews.push(item);
});

feeder.on('political', item => {
	politicalNews.push(item);
});

feeder.on('sports', item => {
	sportNews.push(item);
});

feeder.on('entertainment', item => {
	entertainmentNews.push(item);
});

feeder.on('technology', item => {
	techNews.push(item);
});

feeder.on('technologyEN', item => {
	techNewsEN.push(item);
});

feeder.on('error', err => {
	console.log(err);
	return;
});

app.get('/favicon', getFavicon, (req, res) => {
	res.send({ favicons: res.favicons });
});

app.get('/api/lahteet', (req, res) => {
	const newsSources = sources.map(source => source.long).sort();
	res.send({ sources: newsSources, count: newsSources.length });
});

app.get(
	'/api/uutiset/uusimmat',
	parseData(recentNews),
	paginateResults(),
	(req, res) => {
		res.send(res.paginatedResults);
	}
);

app.get(
	'/api/uutiset/kotimaa',
	parseData(homeNews),
	paginateResults(),
	(req, res) => {
		res.send(res.paginatedResults);
	}
);

app.get(
	'/api/uutiset/ulkomaat',
	parseData(abroadNews),
	paginateResults(),
	(req, res) => {
		res.send(res.paginatedResults);
	}
);

app.get(
	'/api/uutiset/politiikka',
	parseData(politicalNews),
	paginateResults(),
	(req, res) => {
		res.send(res.paginatedResults);
	}
);

app.get(
	'/api/uutiset/urheilu',
	parseData(sportNews),
	paginateResults(),
	(req, res) => {
		res.send(res.paginatedResults);
	}
);

app.get(
	'/api/uutiset/viihde',
	parseData(entertainmentNews),
	paginateResults(),
	(req, res) => {
		res.send(res.paginatedResults);
	}
);

app.get(
	'/api/uutiset/tekniikka',
	parseData(techNews),
	paginateResults(),
	(req, res) => {
		res.send(res.paginatedResults);
	}
);

app.get(
	'/api/uutiset/tekniikkaen',
	parseData(techNewsEN),
	paginateResults(),
	(req, res) => {
		res.send(res.paginatedResults);
	}
);

app.use(express.static(path.join(__dirname, '/client/build')));
app.use(
	'/assets',
	express.static(path.join(__dirname, 'public/assets/favicons/'))
);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
