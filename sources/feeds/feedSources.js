const sources = [
	{
		long: 'Iltalehti',
		favicon: 'https://assets.ilcdn.fi/apple-touch-icon.png'
	},
	{
		long: 'Ilta-Sanomat',
		favicon: 'https://www.is.fi/html-assets/icons/favicon-192x192.png'
	},
	{
		long: 'Karjalainen',
		favicon: '/assets/karjalainen-favicon-192x192.png'
	},
	{
		long: 'Aamuset',
		favicon:
			'https://aamuset.fi/Content/app/img/icons/android-chrome-192x192.png'
	},
	{
		long: 'Uutisvuoksi',
		favicon: '/assets/uutisvuoksi-favicon-192x192.png'
	},
	{
		long: 'Turun Sanomat',
		favicon: 'https://www.ts.fi/Content/app/img/icons/favicon-192x192.png'
	},
	{
		long: 'Talouselämä',
		favicon: '/assets/talouselama-favicon-192x192.png'
	},
	{
		long: 'Mediuutiset',
		favicon: '/assets/mediuutiset-favicon-192x192.png'
	},
	{
		long: 'Päivän Lehti',
		favicon:
			'https://www.paivanlehti.fi/content/themes/propaganda/icons/apple-touch-icon-144x144.png'
	},
	{
		long: 'Suomenmaa',
		favicon:
			'https://www.suomenmaa.fi/wp-content/themes/pt-suomenmaa-theme/assets/images/favicons/suomenmaa__favicon_192x192.png'
	},
	{
		long: 'Kauppalehti',
		favicon:
			'https://assets.kauppalehti.fi/1.1.0/icons/favicon/favicon-196x196.png'
	},
	{
		long: 'Kaleva',
		favicon: '/assets/kaleva-favicon-192x192.png'
	},
	{
		long: 'Tekniikan Maailma',
		favicon: 'https://tekniikanmaailma.fi/assets/logos/favicon.ico'
	},
	{
		long: 'Helsingin Sanomat',
		favicon:
			'https://www.hs.fi/_next/static/images/favicon-240x240-83d3b2d2d176b643df720746e67f1b8f.png'
	},
	{
		long: 'Mikrobitti',
		favicon: 'https://www.mikrobitti.fi/static/images/mikrobitti_favicon.png'
	},
	{
		long: 'Mobiili.fi',
		favicon:
			'https://mobiili.fi/wp-content/uploads/2013/09/m+mobiili_2_q_square-apple.png'
	},
	{
		long: 'SuomiMobiili',
		favicon:
			'https://uploads.suomimobiili.fi/2017/04/cropped-SuomiMobiili-sivuston-kuvake-192x192.png'
	},
	{
		long: 'Uusiteknologia',
		favicon:
			'https://www.uusiteknologia.fi/wp-content/uploads/2015/09/cropped-favicon-1-192x192.gif'
	},
	{
		long: 'Muropaketti',
		favicon:
			'https://muropaketti.com/wp-content/themes/om-muropaketti-theme/assets/img/apple-icon-180.png'
	},
	{
		long: 'io-tech',
		favicon:
			'https://www.io-tech.fi/wp-content/uploads/2016/11/cropped-favicon-192x192.png'
	},
	{
		long: 'Tivi',
		favicon: '/assets/tivi-favicon-192x192.png'
	},
	{
		long: 'Yle',
		favicon: 'https://yle.fi/public/img/yle_logo_180px.png'
	},
	{
		long: 'ESS',
		favicon: 'https://www.ess.fi/icon-256.png'
	},
	{
		long: 'Hardware.fi',
		favicon: '/assets/harware-favicon-192x192.png'
	},
	{
		long: 'Teknavi',
		favicon:
			'https://flockler.com/thumbs/sites/630/teknavi_favicon_s192x192_noupscale.png'
	},
	{
		long: 'Pelaaja',
		favicon:
			'https://pelaaja.fi/sites/all/themes/pelaajaretro2016/img/favicon/android-chrome-192x192.png'
	},
	{
		long: 'Respawn',
		favicon: '/assets/respawn-favicon-192x192.png'
	},
	{
		long: 'Tilt',
		favicon:
			'https://1ertvb136xj1277r411b8hw78wp-wpengine.netdna-ssl.com/android-chrome-192x192.png'
	},
	{
		long: 'Eurheilu.org',
		favicon: '/assets/eurheilu-favicon-192x192.png'
	},
	{
		long: 'Eurheilu.com',
		favicon: 'https://eurheilu.com/wp-content/themes/eurheilu/img/icon.png'
	},
	{
		long: 'Maaseudun Tulevaisuus',
		favicon: '/assets/mt-favicon-192x192.png'
	},
	{
		long: 'Autotoday',
		favicon: '/assets/autotoday-favicon-192x192.png'
	},
	{
		long: 'Autobild',
		favicon: 'https://autobild.fi/neo/16/icon180x180.png'
	},
	{
		long: 'Motouutiset',
		favicon:
			'https://www.motouutiset.fi/themes/publication_3/theme_3/img/touch/favicon-128.png'
	},
	{
		long: 'Moottori',
		favicon:
			'https://moottori.fi/wp-content/themes/moottori/assets/icons/apple-touch-icon-144x144.png'
	},
	{
		long: 'Kuluttaja',
		favicon:
			'https://kuluttaja.fi/wp-content/uploads/2020/05/cropped-favicon-512x512-192x192.png'
	},
	{
		long: 'Uusi Suomi',
		favicon: '/assets/uusisuomi-favicon-192x192.png'
	},
	{
		long: 'Hämeen Sanomat',
		favicon:
			'https://www.hameensanomat.fi/wp-content/uploads/2018/08/cropped-HaSA_512x512-300x300.png'
	},
	{
		long: 'Verkkouutiset',
		favicon: '/assets/verkkouutiset-favicon-192x192.png'
	},
	{
		long: 'MTV Uutiset',
		favicon: '/assets/mtvuutiset-favicon-192x192.png'
	},
	{
		long: 'Ilkka-Pohjalainen',
		favicon:
			'https://ilkkapohjalainen.fi/img/imediat-img/icons/ilkkapohjalainen/android-icon-192x192.png'
	},
	{
		long: 'Kansan Uutiset',
		favicon:
			'https://www.kansanuutiset.fi/images/cropped-ku_favicon-192x192.png'
	},
	{
		long: 'Lapin Kansa',
		favicon: '/assets/lapinkansa-favicon-192x192.png'
	},
	{
		long: 'KD-Lehti',
		favicon: '/assets/kdlehti-favicon-192x192.png'
	},
	{
		long: 'Demokraatti',
		favicon: '/assets/demokraatti-favicon-192x192.png'
	},
	{
		long: 'NHL Suomi',
		favicon:
			'https://www-league.nhlstatic.com/nhl.com/builds/site-core/7b953e34e749f566edd975e9a991603ede89fd08_1588866764/images/iOS/apple-icon-144x144.png'
	},
	{
		long: 'Valioliiga',
		favicon: '/assets/valioliiga-favicon-192x192.png'
	},
	{
		long: 'LaLiiga',
		favicon:
			'https://www.laliiga.com/wp-content/uploads/2016/06/cropped-laliiga_fav-192x192.png'
	},
	{
		long: 'SuomiKiekko',
		favicon:
			'https://www.suomikiekko.com/wp-content/themes/Newspaper-child/site-specific/suomikiekko/images/ios_thumbs/152.png'
	},
	{
		long: 'SuomiFutis',
		favicon:
			'https://www.suomifutis.com/wp-content/themes/Newspaper-child/site-specific/suomifutis/images/ios_thumbs/152.png'
	},
	{
		long: 'SuomiKoris',
		favicon:
			'https://www.suomikoris.com/wp-content/themes/Newspaper-child/site-specific/suomikoris/images/ios_thumbs/152.png'
	},
	{
		long: 'Leijonat.com',
		favicon:
			'https://www.leijonat.com/wp-content/uploads/2016/04/cropped-Leijona-192x192.png'
	},
	{
		long: 'Jatkoaika',
		favicon:
			'https://www.jatkoaika.com/sites/all/themes/custom/jatkoaika/img/android-icon-192x192.png'
	},
	{
		long: 'FinnSnooker',
		favicon:
			'https://www.finnsnooker.com/wp-content/uploads/2020/01/finnsnooker_pwa_192px.jpg'
	}
];

module.exports = sources;
