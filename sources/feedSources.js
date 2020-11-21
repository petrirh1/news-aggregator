const feedSources = [
	{
		url: 'https://www.io-tech.fi/feed/',
		source: 'io-tech',
		category: 'tekniikka',
		favicon: 'https://www.io-tech.fi/wp-content/uploads/2016/11/cropped-favicon-192x192.png'
	},
	{
		url: 'https://muropaketti.com/kategoria/mobiili/mobiiliuutiset/feed/',
		source: 'Muropaketti',
		category: 'tekniikka',
		favicon:
			'https://muropaketti.com/wp-content/themes/om-muropaketti-theme/assets/img/apple-icon-180.png'
	},
	{
		url: 'https://muropaketti.com/kategoria/tietotekniikka/tietotekniikkauutiset/feed/',
		source: 'Muropaketti',
		category: 'tekniikka',
		favicon:
			'https://muropaketti.com/wp-content/themes/om-muropaketti-theme/assets/img/apple-icon-180.png'
	},
	{
		url: 'https://muropaketti.com/kategoria/elokuvat/elokuvauutiset/feed/',
		source: 'Muropaketti',
		category: 'viihde',
		favicon:
			'https://muropaketti.com/wp-content/themes/om-muropaketti-theme/assets/img/apple-icon-180.png'
	},
	{
		url: 'https://muropaketti.com/kategoria/pelit/peliuutiset/feed/',
		source: 'Muropaketti',
		category: 'viihde',
		favicon:
			'https://muropaketti.com/wp-content/themes/om-muropaketti-theme/assets/img/apple-icon-180.png'
	},
	{
		url: 'https://www.tivi.fi/api/feed/v2/rss/tv',
		source: 'Tivi',
		category: 'tekniikka',
		favicon: '/assets/tivi-favicon-192x192.png'
	},
	{
		url: 'https://teknavi.fi/rss',
		source: 'Teknavi',
		category: 'tekniikka',
		favicon: 'https://flockler.com/thumbs/sites/630/teknavi_favicon_s192x192_noupscale.png'
	},
	{
		url: 'https://mobiili.fi/feed/',
		source: 'Mobiili.fi',
		category: 'tekniikka',
		favicon: 'https://mobiili.fi/wp-content/uploads/2013/09/m+mobiili_2_q_square-apple.png'
	},
	{
		url: 'https://suomimobiili.fi/feed/',
		source: 'SuomiMobiili',
		category: 'tekniikka',
		favicon:
			'https://uploads.suomimobiili.fi/2017/04/cropped-SuomiMobiili-sivuston-kuvake-192x192.png'
	},
	{
		url: 'https://www.mikrobitti.fi/api/feed/v2/rss/mb',
		source: 'Mikrobitti',
		category: 'tekniikka',
		favicon: '/assets/mikrobitti-favicon-192x192.png'
	},
	{
		url: 'https://feeds.kauppalehti.fi/rss/topic/auto',
		source: 'Kauppalehti',
		category: 'tekniikka',
		favicon: 'https://assets.kauppalehti.fi/1.1.0/icons/favicon/favicon-196x196.png'
	},
	{
		url: 'https://feeds.kauppalehti.fi/rss/topic/elektroniikka',
		source: 'Kauppalehti',
		category: 'tekniikka',
		favicon: 'https://assets.kauppalehti.fi/1.1.0/icons/favicon/favicon-196x196.png'
	},
	{
		url: 'https://feeds.kauppalehti.fi/rss/main',
		source: 'Kauppalehti',
		favicon: 'https://assets.kauppalehti.fi/1.1.0/icons/favicon/favicon-196x196.png'
	},
	{
		url: 'https://feeds.kauppalehti.fi/rss/topic/eu',
		source: 'Kauppalehti',
		category: 'ulkomaat',
		favicon: 'https://assets.kauppalehti.fi/1.1.0/icons/favicon/favicon-196x196.png'
	},
	{
		url: 'https://feeds.kauppalehti.fi/rss/topic/usa',
		source: 'Kauppalehti',
		category: 'ulkomaat',
		favicon: 'https://assets.kauppalehti.fi/1.1.0/icons/favicon/favicon-196x196.png'
	},
	{
		url: 'https://feeds.kauppalehti.fi/rss/topic/venaja',
		source: 'Kauppalehti',
		category: 'ulkomaat',
		favicon: 'https://assets.kauppalehti.fi/1.1.0/icons/favicon/favicon-196x196.png'
	},
	{
		url: 'https://feeds.kauppalehti.fi/rss/topic/politiikka',
		source: 'Kauppalehti',
		favicon: 'https://assets.kauppalehti.fi/1.1.0/icons/favicon/favicon-196x196.png'
	},
	{
		url: 'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/lifestyle_autot',
		source: 'MTV Uutiset',
		category: 'tekniikka',
		favicon: '/assets/mtvuutiset-favicon-192x192.png'
	},
	{
		url: 'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET',
		source: 'Yle',
		favicon: 'https://yle.fi/public/img/yle_logo_180px.png'
	},
	{
		url: 'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-34837',
		source: 'Yle',
		category: 'kotimaa',
		favicon: 'https://yle.fi/public/img/yle_logo_180px.png'
	},
	{
		url: 'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-34953',
		source: 'Yle',
		category: 'ulkomaat',
		favicon: 'https://yle.fi/public/img/yle_logo_180px.png'
	},
	{
		url: 'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-38033',
		source: 'Yle',
		category: 'politiikka',
		favicon: 'https://yle.fi/public/img/yle_logo_180px.png'
	},
	{
		url: 'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-36066',
		source: 'Yle',
		category: 'viihde',
		favicon: 'https://yle.fi/public/img/yle_logo_180px.png'
	},
	{
		url: 'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_URHEILU',
		source: 'Yle',
		category: 'urheilu',
		favicon: 'https://yle.fi/public/img/yle_logo_180px.png'
	},
	{
		url: 'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/viihde_uusimmat',
		source: 'MTV Uutiset',
		category: 'viihde',
		favicon: '/assets/mtvuutiset-favicon-192x192.png'
	},
	{
		url: 'https://www.mtvuutiset.fi/api/feed/rss/uutiset',
		source: 'MTV Uutiset',
		favicon: '/assets/mtvuutiset-favicon-192x192.png'
	},
	{
		url: 'https://www.mtvuutiset.fi/api/feed/rss/uutiset_kotimaa',
		source: 'MTV Uutiset',
		category: 'kotimaa',
		favicon: '/assets/mtvuutiset-favicon-192x192.png'
	},
	{
		url: 'https://www.mtvuutiset.fi/api/feed/rss/uutiset_ulkomaat',
		source: 'MTV Uutiset',
		category: 'ulkomaat',
		favicon: '/assets/mtvuutiset-favicon-192x192.png'
	},
	{
		url: 'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/urheilu',
		source: 'MTV Uutiset',
		category: 'urheilu',
		favicon: '/assets/mtvuutiset-favicon-192x192.png'
	},
	{
		url: 'https://www.uusiteknologia.fi/feed/',
		source: 'Uusiteknologia',
		category: 'tekniikka',
		favicon:
			'https://www.uusiteknologia.fi/wp-content/uploads/2015/09/cropped-favicon-1-192x192.gif'
	},
	{
		url: 'https://www.motouutiset.fi/fi/static/rss/',
		source: 'Motouutiset',
		category: 'tekniikka',
		favicon: 'https://www.motouutiset.fi/themes/publication_3/theme_3/img/touch/favicon-128.png'
	},
	{
		url: 'https://autotoday.fi/osasto/automerkit/feed/',
		source: 'Autotoday',
		category: 'tekniikka',
		favicon: '/assets/autotoday-favicon-192x192.png'
	},
	{
		url: 'https://vanha.tekniikanmaailma.fi/feed/',
		source: 'Tekniikan Maailma',
		category: 'tekniikka',
		favicon: 'https://tekniikanmaailma.fi/assets/logos/favicon.ico'
	},
	{
		url: 'https://moottori.fi/feed/',
		source: 'Moottori',
		category: 'tekniikka',
		favicon:
			'https://moottori.fi/wp-content/themes/moottori/assets/icons/apple-touch-icon-144x144.png'
	},
	{
		url: 'https://avplus.fi/feed/',
		source: 'AVPlus',
		category: 'tekniikka',
		favicon:
			'https://s3-eu-west-1.amazonaws.com/magnet-wp-avplus/app/uploads/2018/11/15212449/cropped-imageedit_5_4942586604-192x192.gif'
	},
	{
		url: 'https://www.hs.fi/rss/tuoreimmat.xml',
		source: 'Helsingin Sanomat',
		favicon:
			'https://www.hs.fi/_next/static/images/favicon-240x240-83d3b2d2d176b643df720746e67f1b8f.png'
	},
	{
		url: 'https://www.hs.fi/rss/kotimaa.xml',
		source: 'Helsingin Sanomat',
		category: 'kotimaa',
		favicon:
			'https://www.hs.fi/_next/static/images/favicon-240x240-83d3b2d2d176b643df720746e67f1b8f.png'
	},
	{
		url: 'https://www.hs.fi/rss/ulkomaat.xml',
		source: 'Helsingin Sanomat',
		category: 'ulkomaat',
		favicon:
			'https://www.hs.fi/_next/static/images/favicon-240x240-83d3b2d2d176b643df720746e67f1b8f.png'
	},
	{
		url: 'https://www.hs.fi/rss/politiikka.xml',
		source: 'Helsingin Sanomat',
		category: 'politiikka',
		favicon:
			'https://www.hs.fi/_next/static/images/favicon-240x240-83d3b2d2d176b643df720746e67f1b8f.png'
	},
	{
		url: 'https://www.hs.fi/rss/urheilu.xml',
		source: 'Helsingin Sanomat',
		category: 'urheilu',
		favicon:
			'https://www.hs.fi/_next/static/images/favicon-240x240-83d3b2d2d176b643df720746e67f1b8f.png'
	},
	{
		url: 'https://www.iltalehti.fi/rss/autot.xml',
		source: 'Iltalehti',
		category: 'tekniikka',
		favicon: 'https://assets.ilcdn.fi/apple-touch-icon.png'
	},
	{
		url: 'https://www.iltalehti.fi/rss/digi.xml',
		source: 'Iltalehti',
		category: 'tekniikka',
		favicon: 'https://assets.ilcdn.fi/apple-touch-icon.png'
	},
	{
		url: 'https://www.iltalehti.fi/rss/uutiset.xml',
		source: 'Iltalehti',
		favicon: 'https://assets.ilcdn.fi/apple-touch-icon.png'
	},
	{
		url: 'https://www.iltalehti.fi/rss/urheilu.xml',
		source: 'Iltalehti',
		category: 'urheilu',
		favicon: 'https://assets.ilcdn.fi/apple-touch-icon.png'
	},
	{
		url: 'https://www.iltalehti.fi/rss/viihde.xml',
		source: 'Iltalehti',
		category: 'viihde',
		favicon: 'https://assets.ilcdn.fi/apple-touch-icon.png'
	},
	{
		url: 'https://www.is.fi/rss/politiikka.xml',
		source: 'Ilta-Sanomat',
		category: 'politiikka',
		favicon: 'https://www.is.fi/html-assets/icons/favicon-192x192.png'
	},
	{
		url: 'https://www.is.fi/rss/tuoreimmat.xml',
		source: 'Ilta-Sanomat',
		favicon: 'https://www.is.fi/html-assets/icons/favicon-192x192.png'
	},
	{
		url: 'https://www.is.fi/rss/digitoday/esports.xml',
		source: 'Ilta-Sanomat',
		category: 'viihde',
		favicon: 'https://www.is.fi/html-assets/icons/favicon-192x192.png'
	},
	{
		url: 'https://www.is.fi/rss/musiikki.xml',
		source: 'Ilta-Sanomat',
		category: 'viihde',
		favicon: 'https://www.is.fi/html-assets/icons/favicon-192x192.png'
	},
	{
		url: 'https://www.is.fi/rss/urheilu.xml',
		source: 'Ilta-Sanomat',
		category: 'urheilu',
		favicon: 'https://www.is.fi/html-assets/icons/favicon-192x192.png'
	},
	{
		url: 'https://www.is.fi/rss/viihde.xml',
		source: 'Ilta-Sanomat',
		category: 'viihde',
		favicon: 'https://www.is.fi/html-assets/icons/favicon-192x192.png'
	},
	{
		url: 'https://www.is.fi/rss/autot.xml',
		source: 'Ilta-Sanomat',
		category: 'tekniikka',
		favicon: 'https://www.is.fi/html-assets/icons/favicon-192x192.png'
	},
	{
		url: 'https://www.is.fi/rss/digitoday.xml',
		source: 'Ilta-Sanomat',
		category: 'tekniikka',
		favicon: 'https://www.is.fi/html-assets/icons/favicon-192x192.png'
	},
	{
		url: 'https://www.theverge.com/tech/rss/index.xml',
		source: 'The Verge',
		category: 'tekniikkaen',
		favicon:
			'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7395351/android-chrome-192x192.0.png'
	},
	{
		url: 'https://www.theverge.com/reviews/rss/index.xml',
		source: 'The Verge',
		category: 'tekniikkaen',
		favicon:
			'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7395351/android-chrome-192x192.0.png'
	},
	{
		url: 'https://www.androidauthority.com/feed/',
		source: 'Android Authority',
		category: 'tekniikkaen',
		favicon:
			'https://www.androidauthority.com/wp-content/themes/aa/images/aa-mascot-192x192.png?v=1.0.1'
	},
	{
		url: 'https://www.sammobile.com/feed/',
		source: 'SamMobile',
		category: 'tekniikkaen',
		favicon: 'https://www.sammobile.com/logo-highres.png'
	},
	{
		url: 'https://9to5mac.com/feed/',
		source: '9to5Mac',
		category: 'tekniikkaen',
		favicon:
			'https://9to5mac.com/wp-content/themes/9to5-2015/images/favicons/9to5mac/icon-192x192.png'
	},
	{
		url: 'https://9to5google.com/feed/',
		source: '9to5Google',
		category: 'tekniikkaen',
		favicon:
			'https://9to5google.com/wp-content/themes/9to5-2015/images/favicons/9to5google/icon-192x192.png'
	},
	{
		url: 'https://electrek.co/feed',
		source: 'Electrek',
		category: 'tekniikkaen',
		favicon:
			'https://electrek.co/wp-content/themes/9to5-2015/images/favicons/electrek/icon-192x192.png'
	},
	{
		url: 'https://appleinsider.com/rss/news',
		source: 'AppleInsider',
		category: 'tekniikkaen',
		favicon: 'https://photos5.appleinsider.com/v9/images/apple-touch-icon-144.png'
	},
	{
		url: 'https://www.imore.com/rss.xml',
		source: 'iMore',
		category: 'tekniikkaen',
		favicon: 'https://www.imore.com/sites/imore.com/files/images/icons/apple-touch-114x114.png'
	},
	{
		url: 'https://www.motortrend.com/feed/',
		source: 'Motortrend',
		category: 'tekniikkaen',
		favicon: '/assets/motortrend-favicon-192x192.png'
	},
	{
		url: 'https://www.autocar.co.uk/rss',
		source: 'Autocar',
		category: 'tekniikkaen',
		favicon: 'https://www.autocar.co.uk/sites/autocar.co.uk/themes/custom/autocar/favicon.ico'
	},
	{
		url: 'https://www.engadget.com/rss.xml',
		source: 'Engadget',
		category: 'tekniikkaen',
		favicon:
			'https://s.blogsmithmedia.com/www.engadget.com/assets-hc2382a6dcaa087f1ba75e975c839c33c/images/favicon-160x160.png?h=1638b0a8bbe7effa8f85c3ecabb63620'
	},
	{
		url: 'https://www.digitaltrends.com/feed/',
		source: 'Digital Trends',
		category: 'tekniikkaen',
		favicon:
			'https://icdn2.digitaltrends.com/image/digitaltrends/dt-site-icon-144x144.png'
	},
	{
		url: 'https://feeds2.feedburner.com/thenextweb',
		source: 'The Next Web',
		category: 'tekniikkaen',
		favicon:
			'https://cdn0.tnwcdn.com/wp-content/themes/cyberdelia/assets/icons/android-chrome-192x192.png?v=1594649130'
	},
	{
		url: 'https://www.androidpolice.com/feed/',
		source: 'Android Police',
		category: 'tekniikkaen',
		favicon: '/assets/androidpolice-favicon-192x192.png'
	},
	{
		url: 'http://feeds.feedburner.com/TechCrunch/',
		source: 'TechCrunch',
		category: 'tekniikkaen',
		favicon: '/assets/techcrunch-favicon-192x192.png'
	},
	{
		url: 'https://arstechnica.com/feed/',
		source: 'Ars Technica',
		category: 'tekniikkaen',
		favicon:
			'https://cdn.arstechnica.net/wp-content/themes/ars/assets/img/material-ars-db41652381.png'
	},
	{
		url: 'https://www.newsledge.com/feed/',
		source: 'News Ledge',
		category: 'tekniikkaen',
		favicon: 'https://cdn.newsledge.com/wp-content/uploads/2019/10/cropped-news-ledge-fav.jpg'
	},
	{
		url: 'https://aamuset.fi/rss.xml',
		source: 'Aamuset',
		favicon: 'https://aamuset.fi/Content/app/img/icons/android-chrome-192x192.png'
	},
	{
		url: 'https://ilkkapohjalainen.fi/cmlink/ilkka-pohjalainen-paikalliset-1.5242274',
		source: 'Ilkka-Pohjalainen',
		favicon:
			'https://ilkkapohjalainen.fi/img/imediat-img/icons/ilkkapohjalainen/android-icon-192x192.png'
	},
	{
		url: 'https://lansi-savo.fi/api/articles.rss',
		source: 'Länsi-Savo',
		favicon: '/assets/ls-favicon-192x192.png'
	},
	{
		url: 'https://wp.demokraatti.fi/feed/',
		source: 'Demokraatti',
		favicon: '/assets/demokraatti-favicon-192x192.png'
	},
	{
		url: 'https://www.ess.fi/feed/rss',
		source: 'ESS',
		favicon: 'https://www.ess.fi/icon-256.png'
	},
	{
		url: 'https://www.hameensanomat.fi/rss',
		source: 'Hämeen Sanomat',
		favicon: '/assets/hameensanomat-favicon-192x192.png'
	},
	{
		url: 'https://www.karjalainen.fi/component/obrss/karjalainen-uutiskirje',
		source: 'Karjalainen',
		favicon: '/assets/hameensanomat-favicon-192x192.png'
	},
	{
		url: 'https://www.kaleva.fi/feedit/rss/managed-listing/rss-uusimmat/',
		source: 'Kaleva',
		favicon: '/assets/kaleva-favicon-192x192.png'
	},
	{
		url: 'https://www.keskipohjanmaa.fi/uutiset/aihetunnisteet/Kotimaa/feed',
		source: 'Keski-Pohjanmaa',
		category: 'kotimaa',
		favicon: 'https://data.kosila.fi/kp24/images/keskipohjanmaa/192x192.png'
	},
	{
		url: 'https://www.keskipohjanmaa.fi/uutiset/aihetunnisteet/Ulkomaat/feed',
		source: 'Keski-Pohjanmaa',
		category: 'ulkomaat',
		favicon: 'https://data.kosila.fi/kp24/images/keskipohjanmaa/192x192.png'
	},
	{
		url: 'https://www.keskipohjanmaa.fi/feed?name=keskipohjanmaa',
		source: 'Keski-Pohjanmaa',
		favicon: 'https://data.kosila.fi/kp24/images/keskipohjanmaa/192x192.png'
	},
	{
		url: 'https://www.keskipohjanmaa.fi/uutiset/aihetunnisteet/Talous/feed',
		source: 'Keski-Pohjanmaa',
		favicon: 'https://data.kosila.fi/kp24/images/keskipohjanmaa/192x192.png'
	},
	{
		url: 'https://www.keskipohjanmaa.fi/uutiset/aihetunnisteet/Urheilu/feed',
		source: 'Keski-Pohjanmaa',
		category: 'urheilu',
		favicon: 'https://data.kosila.fi/kp24/images/keskipohjanmaa/192x192.png'
	},
	{
		url: 'https://www.paivanlehti.fi/etusivu/feed/',
		source: 'Päivän Lehti',
		favicon:
			'https://www.paivanlehti.fi/content/themes/propaganda/icons/apple-touch-icon-144x144.png'
	},
	{
		url: 'https://www.paivanlehti.fi/arkisto/urheilu/feed/',
		source: 'Päivän Lehti',
		category: 'urheilu',
		favicon:
			'https://www.paivanlehti.fi/content/themes/propaganda/icons/apple-touch-icon-144x144.png'
	},
	{
		url: 'https://www.suomenmaa.fi/feed/',
		source: 'Suomenmaa',
		favicon: '/assets/suomenmaa-favicon-192x192.png'
	},
	{
		url: 'https://www.talouselama.fi/api/feed/v2/rss/te',
		source: 'Talouselämä',
		favicon: '/assets/talouselama-favicon-192x192.png'
	},
	{
		url: 'https://www.ts.fi/rss.xml',
		source: 'Turun Sanomat',
		favicon: 'https://www.ts.fi/Content/app/img/icons/favicon-192x192.png'
	},
	{
		url: 'https://www.uusisuomi.fi/api/feed/v2/rss/us',
		source: 'Uusi Suomi',
		favicon: '/assets/uusisuomi-favicon-192x192.png'
	},
	{
		url: 'https://www.tekniikkatalous.fi/api/feed/v2/rss/tt',
		source: 'Tekniikka&Talous',
		favicon: '/assets/tekniikka&talous-favicon-192x192.png'
	},
	{
		url: 'https://www.maaseuduntulevaisuus.fi/feed/maaseudun-tulevaisuus-newest-rss-feed-7.136983',
		source: 'Maaseudun Tulevaisuus',
		favicon: '/assets/mt-favicon-192x192.png'
	},
	{
		url: 'https://www.maaseuduntulevaisuus.fi/feed/ulkomaat-rss-feed-7.140404',
		source: 'Maaseudun Tulevaisuus',
		category: 'ulkomaat',
		favicon: '/assets/mt-favicon-192x192.png'
	},
	{
		url: 'https://www.maaseuduntulevaisuus.fi/feed/politiikka-rss-feed-7.138718',
		source: 'Maaseudun Tulevaisuus',
		category: 'politiikka',
		favicon: '/assets/mt-favicon-192x192.png'
	},
	{
		url: 'https://esaimaa.fi/api/articles.rss',
		source: 'Etelä-Saimaa',
		favicon: '/assets/esaimaa-favicon-192x192.png'
	},
	{
		url: 'https://www.kansanuutiset.fi/feed',
		source: 'Kansan Uutiset',
		favicon: 'https://www.kansanuutiset.fi/images/cropped-ku_favicon-192x192.png'
	},
	{
		url: 'https://www.kdlehti.fi/feed/',
		source: 'KD-Lehti',
		favicon: '/assets/kdlehti-favicon-192x192.png'
	},
	{
		url: 'https://errori.net/feed/',
		source: 'errori',
		category: 'viihde',
		favicon:
			'https://i0.wp.com/errori.net/wp-content/uploads/2019/03/android-chrome-256x256.png?fit=192%2C192&ssl=1'
	},
	{
		url: 'https://eurheilu.com/feed/',
		source: 'eUrheilu.org',
		category: 'viihde',
		favicon: '/assets/eurheilu-favicon-192x192.png'
	},
	{
		url: 'https://kaaoszine.fi/feed/',
		source: 'Kaaoszine',
		category: 'viihde',
		favicon: '/assets/kaaoszine-favicon-192x192.png'
	},
	{
		url: 'https://pelaaja.fi/rss.xml',
		source: 'Pelaaja',
		category: 'viihde',
		favicon:
			'https://pelaaja.fi/sites/all/themes/pelaajaretro2016/img/favicon/android-chrome-192x192.png'
	},
	{
		url: 'https://respawn.fi/feed/',
		source: 'respawn',
		category: 'viihde',
		favicon: '/assets/respawn-favicon-192x192.png'
	},
	{
		url: 'https://www.tilt.fi/feed/',
		source: 'Tilt',
		category: 'viihde',
		favicon: '/assets/tilt-favicon-192x192.png'
	},
	{
		url: 'https://feat.fi/feed/',
		source: 'feat',
		category: 'viihde',
		favicon: 'https://feat.fi/wp-content/uploads/2018/07/cropped-favicon-1-1-192x192.png'
	},
	{
		url: 'https://www.finnsnooker.com/feed/',
		source: 'Finnsnooker',
		category: 'urheilu',
		favicon: 'https://www.finnsnooker.com/wp-content/uploads/2020/01/finnsnooker_pwa_192px.jpg'
	},
	{
		url: 'https://www.jatkoaika.com/rss/index.rss',
		source: 'Jatkoaika',
		category: 'urheilu',
		favicon:
			'https://www.jatkoaika.com/sites/all/themes/custom/jatkoaika/img/android-icon-192x192.png'
	},
	{
		url: 'https://www.laliiga.com/feed/',
		source: 'LaLiiga',
		category: 'urheilu',
		favicon: '/assets/laliiga-favicon-192x192.png'
	},
	{
		url: 'https://www.lapinkansa.fi/feedit/rss/managed-listing/urheilu/',
		source: 'Lapin Kansa',
		category: 'urheilu',
		favicon: '/assets/lapinkansa-favicon-192x192.png'
	},
	{
		url: 'https://www.leijonat.com/feed/',
		source: 'Leijonat',
		category: 'urheilu',
		favicon: 'https://www.leijonat.com/wp-content/uploads/2016/04/cropped-Leijona-192x192.png'
	},
	{
		url: 'https://www.nhlsuomi.com/feed/',
		source: 'NHL Suomi',
		category: 'urheilu',
		favicon: '/assets/nhlsuomi-favicon-192x192.png'
	},
	{
		url: 'https://www.suomif1.com/feed/',
		source: 'SuomiF1',
		category: 'urheilu',
		favicon: '/assets/suomif1-favicon-192x192.png'
	},
	{
		url: 'https://www.suomifutis.com/feed/',
		source: 'SuomiFutis',
		category: 'urheilu',
		favicon: '/assets/suomifutis-favicon-192x192.png'
	},
	{
		url: 'https://www.suomikiekko.com/feed/',
		source: 'SuomiKiekko',
		category: 'urheilu',
		favicon: '/assets/suomikiekko-favicon-192x192.png'
	},
	{
		url: 'https://www.suomikoris.com/feed/',
		source: 'SuomiKoris',
		category: 'urheilu',
		favicon: '/assets/suomikoris-favicon-192x192.png'
	},
	{
		url: 'https://www.valioliiga.com/feed/',
		source: 'Valioliiga',
		category: 'urheilu',
		favicon: '/assets/valioliiga-favicon-192x192.png'
	}
];

module.exports = feedSources;
