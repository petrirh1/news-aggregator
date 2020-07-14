const sources = [
	{
		long: 'Iltalehti',
		url: 'https://www.iltalehti.fi/',
		favicon: 'https://assets.ilcdn.fi/apple-touch-icon.png'
	},
	{
		long: 'Ilta-Sanomat',
		url: 'https://www.is.fi/',
		favicon: 'https://www.is.fi/html-assets/icons/favicon-192x192.png'
	},
	{
		long: 'Karjalainen',
		url: 'https://www.karjalainen.fi/',
		favicon: '/assets/karjalainen-favicon-192x192.png'
	},
	{
		long: 'Aamuset',
		url: 'https://www.aamuset.fi/',
		favicon:
			'https://aamuset.fi/Content/app/img/icons/android-chrome-192x192.png'
	},
	{
		long: 'Uutisvuoksi',
		url: 'https://uutisvuoksi.fi/',
		favicon: '/assets/uutisvuoksi-favicon-192x192.png'
	},
	{
		long: 'Turun Sanomat',
		url: 'https://www.ts.fi/',
		favicon: 'https://www.ts.fi/Content/app/img/icons/favicon-192x192.png'
	},
	{
		long: 'Talouselämä',
		url: 'https://www.talouselama.fi/',
		favicon: '/assets/talouselama-favicon-192x192.png'
	},
	{
		long: 'Länsi-Savo',
		url: 'https://lansi-savo.fi/',
		favicon: '/assets/ls-favicon-192x192.png'
	},
	{
		long: 'Päivän Lehti',
		url: 'https://www.paivanlehti.fi/',
		favicon:
			'https://www.paivanlehti.fi/content/themes/propaganda/icons/apple-touch-icon-144x144.png'
	},
	{
		long: 'Suomenmaa',
		url: 'https://www.suomenmaa.fi/',
		favicon: '/assets/suomenmaa-favicon-192x192.png'
	},
	{
		long: 'Kauppalehti',
		url: 'https://www.kauppalehti.fi/',
		favicon:
			'https://assets.kauppalehti.fi/1.1.0/icons/favicon/favicon-196x196.png'
	},
	{
		long: 'Kaleva',
		url: 'https://www.kaleva.fi/',
		favicon: '/assets/kaleva-favicon-192x192.png'
	},
	{
		long: 'Tekniikan Maailma',
		url: 'https://tekniikanmaailma.fi/',
		favicon: 'https://tekniikanmaailma.fi/assets/logos/favicon.ico'
	},
	{
		long: 'Helsingin Sanomat',
		url: 'https://www.hs.fi/',
		favicon:
			'https://www.hs.fi/_next/static/images/favicon-240x240-83d3b2d2d176b643df720746e67f1b8f.png'
	},
	{
		long: 'Tekniikka&Talous',
		url: 'https://www.tekniikkatalous.fi/',
		favicon: '/assets/tekniikka&talous-favicon-192x192.png'
	},
	// {
	// 	long: 'AfterDawn',
	// 	url: 'https://fin.afterdawn.com/',
	// 	favicon: 'https://cdn.afterdawn.fi/v3/apple-touch-icon.png'
	// },
	// {
	// 	long: 'Hardware.fi',
	// 	url: 'https://www.hardware.fi/',
	// 	favicon: '/assets/hardware-favicon-192x192.png'
	// },
	{
		long: 'Mikrobitti',
		url: 'https://www.mikrobitti.fi/',
		favicon: '/assets/mikrobitti-favicon-192x192.png'
	},
	{
		long: 'Mobiili.fi',
		url: 'https://mobiili.fi/',
		favicon:
			'https://mobiili.fi/wp-content/uploads/2013/09/m+mobiili_2_q_square-apple.png'
	},
	{
		long: 'SuomiMobiili',
		url: 'https://suomimobiili.fi/',
		favicon:
			'https://uploads.suomimobiili.fi/2017/04/cropped-SuomiMobiili-sivuston-kuvake-192x192.png'
	},
	{
		long: 'AVPlus',
		url: 'https://avplus.fi/',
		favicon:
			'https://s3-eu-west-1.amazonaws.com/magnet-wp-avplus/app/uploads/2018/11/15212449/cropped-imageedit_5_4942586604-192x192.gif'
	},
	{
		long: 'Uusiteknologia',
		url: 'https://www.uusiteknologia.fi/',
		favicon:
			'https://www.uusiteknologia.fi/wp-content/uploads/2015/09/cropped-favicon-1-192x192.gif'
	},
	{
		long: 'Muropaketti',
		url: 'https://muropaketti.com/',
		favicon:
			'https://muropaketti.com/wp-content/themes/om-muropaketti-theme/assets/img/apple-icon-180.png'
	},
	{
		long: 'io-tech',
		url: 'https://www.io-tech.fi/',
		favicon:
			'https://www.io-tech.fi/wp-content/uploads/2016/11/cropped-favicon-192x192.png'
	},
	{
		long: 'Tivi',
		url: 'https://www.tivi.fi/',
		favicon: '/assets/tivi-favicon-192x192.png'
	},
	{
		long: 'The Verge',
		url: 'https://www.theverge.com/',
		favicon:
			'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7395351/android-chrome-192x192.0.png'
	},
	{
		long: 'Android Authority',
		url: 'https://www.androidauthority.com/',
		favicon:
			'https://www.androidauthority.com/wp-content/themes/aa/images/aa-mascot-192x192.png?v=1.0.1'
	},
	{
		long: 'SamMobile',
		url: 'https://www.sammobile.com/',
		favicon: 'https://www.sammobile.com/logo-highres.png'
	},
	{
		long: 'Digital Trends',
		url: 'https://www.digitaltrends.com/',
		favicon:
			'https://www.digitaltrends.com/wp-content/themes/digitaltrends-2018/assets/images/favicons/apple-touch-icon.png'
	},
	{
		long: 'Engadget',
		url: 'https://www.wired.com/',
		favicon:
			'https://s.blogsmithmedia.com/www.engadget.com/assets-hc2382a6dcaa087f1ba75e975c839c33c/images/favicon-160x160.png?h=1638b0a8bbe7effa8f85c3ecabb63620'
	},
	{
		long: '9To5Mac',
		url: 'https://9to5mac.com/',
		favicon:
			'https://9to5mac.com/wp-content/themes/9to5-2015/images/favicons/9to5mac/icon-192x192.png'
	},
	{
		long: '9To5Google',
		url: 'https://9to5google.com/',
		favicon:
			'https://9to5google.com/wp-content/themes/9to5-2015/images/favicons/9to5google/icon-192x192.png'
	},
	{
		long: 'Electrek',
		url: 'https://electrek.co/',
		favicon:
			'https://electrek.co/wp-content/themes/9to5-2015/images/favicons/electrek/icon-192x192.png'
	},
	{
		long: 'Appleinsider',
		url: 'https://appleinsider.com/',
		favicon:
			'https://photos5.appleinsider.com/v9/images/apple-touch-icon-144.png'
	},
	{
		long: 'iMore',
		url: 'https://www.imore.com/',
		favicon:
			'https://www.imore.com/sites/imore.com/files/images/icons/apple-touch-114x114.png'
	},
	{
		long: 'phoneArena',
		url: 'https://www.phonearena.com/',
		favicon: '/assets/phonearena-favicon-192x192.png'
	},
	{
		long: 'Motortrend',
		url: 'https://www.motortrendondemand.com/',
		favicon: '/assets/motortrend-favicon-192x192.png'
	},
	{
		long: 'Autocar',
		url: 'https://www.autocar.co.uk/',
		favicon:
			'https://www.autocar.co.uk/sites/autocar.co.uk/themes/custom/autocar/favicon.ico'
	},
	{
		long: 'Carscoops',
		url: 'https://www.carscoops.com/',
		favicon: '/assets/carscoops-favicon-192x192.png'
	},
	{
		long: 'Yle',
		url: 'https://yle.fi/',
		favicon: 'https://yle.fi/public/img/yle_logo_180px.png'
	},
	{
		long: 'ESS',
		url: 'https://www.ess.fi/',
		favicon: 'https://www.ess.fi/icon-256.png'
	},
	{
		long: 'Teknavi',
		url: 'https://teknavi.fi/',
		favicon:
			'https://flockler.com/thumbs/sites/630/teknavi_favicon_s192x192_noupscale.png'
	},
	{
		long: 'Pelaaja',
		url: 'https://pelaaja.fi/',
		favicon:
			'https://pelaaja.fi/sites/all/themes/pelaajaretro2016/img/favicon/android-chrome-192x192.png'
	},
	{
		long: 'Respawn',
		url: 'https://respawn.fi/',
		favicon: '/assets/respawn-favicon-192x192.png'
	},
	{
		long: 'Tilt',
		url: 'https://www.tilt.fi/',
		favicon: '/assets/tilt-favicon-192x192.png'
	},
	{
		long: 'Errori',
		url: 'https://errori.net/',
		favicon:
			'https://i0.wp.com/errori.net/wp-content/uploads/2019/03/android-chrome-256x256.png?fit=192%2C192&ssl=1'
	},
	{
		long: 'Eurheilu.org',
		url: 'https://eurheilu.org/',
		favicon: '/assets/eurheilu-favicon-192x192.png'
	},
	{
		long: 'Eurheilu.com',
		url: 'https://eurheilu.com/',
		favicon: 'https://eurheilu.com/wp-content/themes/eurheilu/img/icon.png'
	},
	{
		long: 'Maaseudun Tulevaisuus',
		url: 'https://www.maaseuduntulevaisuus.fi/',
		favicon: '/assets/mt-favicon-192x192.png'
	},
	{
		long: 'Autotoday',
		url: 'https://autotoday.fi/',
		favicon: '/assets/autotoday-favicon-192x192.png'
	},
	{
		long: 'Autobild',
		url: 'https://autobild.fi/',
		favicon: 'https://autobild.fi/neo/16/icon180x180.png'
	},
	{
		long: 'Motouutiset',
		url: 'https://www.motouutiset.fi/',
		favicon:
			'https://www.motouutiset.fi/themes/publication_3/theme_3/img/touch/favicon-128.png'
	},
	{
		long: 'Moottori',
		url: 'https://moottori.fi/',
		favicon:
			'https://moottori.fi/wp-content/themes/moottori/assets/icons/apple-touch-icon-144x144.png'
	},
	{
		long: 'Kuluttaja',
		url: 'https://kuluttaja.fi/',
		favicon:
			'https://kuluttaja.fi/wp-content/uploads/2020/05/cropped-favicon-512x512-192x192.png'
	},
	{
		long: 'Uusi Suomi',
		url: 'https://www.uusisuomi.fi/',
		favicon: '/assets/uusisuomi-favicon-192x192.png'
	},
	{
		long: 'Hämeen Sanomat',
		url: 'https://www.hameensanomat.fi/',
		favicon:
			'https://www.hameensanomat.fi/wp-content/uploads/2018/08/cropped-HaSA_512x512-300x300.png'
	},
	{
		long: 'Verkkouutiset',
		url: 'https://www.verkkouutiset.fi/',
		favicon: '/assets/verkkouutiset-favicon-192x192.png'
	},
	{
		long: 'MTV Uutiset',
		url: 'https://www.mtvuutiset.fi/',
		favicon: '/assets/mtvuutiset-favicon-192x192.png'
	},
	{
		long: 'Ilkka-Pohjalainen',
		url: 'https://ilkkapohjalainen.fi/',
		favicon:
			'https://ilkkapohjalainen.fi/img/imediat-img/icons/ilkkapohjalainen/android-icon-192x192.png'
	},
	{
		long: 'Kansan Uutiset',
		url: 'https://www.kansanuutiset.fi/',
		favicon:
			'https://www.kansanuutiset.fi/images/cropped-ku_favicon-192x192.png'
	},
	{
		long: 'Keskipohjanmaa',
		url: 'https://www.keskipohjanmaa.fi/',
		favicon: 'https://data.kosila.fi/kp24/images/keskipohjanmaa/192x192.png'
	},
	{
		long: 'Lapin Kansa',
		url: 'https://www.lapinkansa.fi/',
		favicon: '/assets/lapinkansa-favicon-192x192.png'
	},
	{
		long: 'Kaaoszine',
		url: 'https://kaaoszine.fi/',
		favicon: '/assets/kaaoszine-favicon-192x192.png'
	},
	{
		long: 'KD-Lehti',
		url: 'https://www.kdlehti.fi/',
		favicon: '/assets/kdlehti-favicon-192x192.png'
	},
	{
		long: 'Demokraatti',
		url: 'http://demokraatti.fi/',
		favicon: '/assets/demokraatti-favicon-192x192.png'
	},
	{
		long: 'Feat',
		url: 'https://feat.fi/',
		favicon:
			'https://feat.fi/wp-content/uploads/2018/07/cropped-favicon-1-1-192x192.png'
	},
	{
		long: 'NHLSuomi',
		url: 'https://www.nhlsuomi.com/',
		favicon: '/assets/nhlsuomi-favicon-192x192.png'
	},

	{
		long: 'Valioliiga',
		url: 'https://www.valioliiga.com/',
		favicon: '/assets/valioliiga-favicon-192x192.png'
	},
	{
		long: 'LaLiiga',
		url: 'https://www.laliiga.com/',
		favicon:
			'https://www.laliiga.com/wp-content/uploads/2016/06/cropped-laliiga_fav-192x192.png'
	},
	{
		long: 'SuomiF1',
		url: 'https://www.suomif1.com/',
		favicon: '/assets/suomif1-favicon-192x192.png'
	},
	{
		long: 'SuomiKiekko',
		url: 'https://www.suomikiekko.com/',
		favicon: '/assets/suomikiekko-favicon-192x192.png'
	},
	{
		long: 'SuomiFutis',
		url: 'https://www.suomifutis.com/',
		favicon: '/assets/suomifutis-favicon-192x192.png'
	},
	{
		long: 'SuomiKoris',
		url: 'https://www.suomikoris.com/',
		favicon: '/assets/suomikoris-favicon-192x192.png'
	},
	{
		long: 'SuomiUrheilu',
		url: 'https://www.suomiurheilu.com/',
		favicon: '/assets/suomiurheilu-favicon-192x192.png'
	},
	{
		long: 'Leijonat.com',
		url: 'https://www.leijonat.com/',
		favicon:
			'https://www.leijonat.com/wp-content/uploads/2016/04/cropped-Leijona-192x192.png'
	},
	{
		long: 'Jatkoaika',
		url: 'https://www.jatkoaika.com/',
		favicon:
			'https://www.jatkoaika.com/sites/all/themes/custom/jatkoaika/img/android-icon-192x192.png'
	},
	{
		long: 'FinnSnooker',
		url: 'https://www.finnsnooker.com/',
		favicon:
			'https://www.finnsnooker.com/wp-content/uploads/2020/01/finnsnooker_pwa_192px.jpg'
	}
];

module.exports = sources;
