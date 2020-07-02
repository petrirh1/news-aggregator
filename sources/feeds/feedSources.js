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
		long: 'Länsi-Savo',
		favicon: '/assets/ls-favicon-192x192.png'
	},
	{
		long: 'Päivän Lehti',
		favicon:
			'https://www.paivanlehti.fi/content/themes/propaganda/icons/apple-touch-icon-144x144.png'
	},
	{
		long: 'Suomenmaa',
		favicon: '/assets/suomenmaa-favicon-192x192.png'
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
		favicon: '/assets/mikrobitti-favicon-192x192.png'
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
		long: 'AVPlus',
		favicon:
			'https://s3-eu-west-1.amazonaws.com/magnet-wp-avplus/app/uploads/2018/11/15212449/cropped-imageedit_5_4942586604-192x192.gif'
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
		long: 'The Verge',
		favicon:
			'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7395351/android-chrome-192x192.0.png'
	},
	{
		long: 'Android Authority',
		favicon:
			'https://www.androidauthority.com/wp-content/themes/aa/images/aa-mascot-192x192.png?v=1.0.1'
	},
	{
		long: 'SamMobile',
		favicon: 'https://www.sammobile.com/logo-highres.png'
	},
	{
		long: '9To5Mac',
		favicon:
			'https://9to5mac.com/wp-content/themes/9to5-2015/images/favicons/9to5mac/icon-192x192.png'
	},
	{
		long: '9To5Google',
		favicon:
			'https://9to5google.com/wp-content/themes/9to5-2015/images/favicons/9to5google/icon-192x192.png'
	},
	{
		long: '9To5Toys',
		favicon:
			'https://9to5toys.com/wp-content/themes/9to5-2015/images/favicons/9to5toys/icon-192x192.png'
	},
	{
		long: 'Electrek',
		favicon:
			'https://electrek.co/wp-content/themes/9to5-2015/images/favicons/electrek/icon-192x192.png'
	},
	{
		long: 'Appleinsider',
		favicon:
			'https://photos5.appleinsider.com/v9/images/apple-touch-icon-144.png'
	},
	{
		long: 'iMore',
		favicon:
			'https://www.imore.com/sites/imore.com/files/images/icons/apple-touch-114x114.png'
	},
	{
		long: 'phoneArena',
		favicon: '/assets/phonearena-favicon-192x192.png'
	},
	{
		long: 'Motortrend',
		favicon: '/assets/motortrend-favicon-192x192.png'
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
		favicon: '/assets/tilt-favicon-192x192.png'
	},
	{
		long: 'Errori',
		favicon:
			'https://i0.wp.com/errori.net/wp-content/uploads/2019/03/android-chrome-256x256.png?fit=192%2C192&ssl=1'
	},
	{
		long: 'Eurheilu.org',
		favicon: '/assets/eurheilu-favicon-192x192.png'
	},
	{
		long: 'Uutisvuoksi',
		favicon: '/assets/uutisvuoksi-favicon-192x192.png'
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
		long: 'Keskipohjanmaa',
		favicon: 'https://data.kosila.fi/kp24/images/keskipohjanmaa/192x192.png'
	},
	{
		long: 'Lapin Kansa',
		favicon: '/assets/lapinkansa-favicon-192x192.png'
	},
	{
		long: 'Kaaoszine',
		favicon: '/assets/kaaoszine-favicon-192x192.png'
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
		long: 'NHLSuomi',
		favicon: '/assets/nhlsuomi-favicon-192x192.png'
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
		long: 'SuomiF1',
		favicon: '/assets/suomif1-favicon-192x192.png'
	},
	{
		long: 'SuomiKiekko',
		favicon: '/assets/suomikiekko-favicon-192x192.png'
	},
	{
		long: 'SuomiFutis',
		favicon: '/assets/suomifutis-favicon-192x192.png'
	},
	{
		long: 'SuomiKoris',
		favicon: '/assets/suomikoris-favicon-192x192.png'
	},
	{
		long: 'SuomiUrheilu',
		favicon: '/assets/suomiurheilu-favicon-192x192.png'
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
