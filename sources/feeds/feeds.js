const technology = [
	'https://www.io-tech.fi/feed/',
	'https://www.iltalehti.fi/rss/digi.xml',
	'https://www.iltalehti.fi/rss/autot.xml',
	'https://www.is.fi/rss/autot.xml',
	'https://www.is.fi/rss/digitoday.xml',
	'https://www.is.fi/rss/digitoday/esports.xml',
	'https://www.hs.fi/rss/autotiede.xml',
	'https://feeds.kauppalehti.fi/rss/topic/auto',
	'https://feeds.kauppalehti.fi/rss/topic/elektroniikka',
	'https://vanha.tekniikanmaailma.fi/feed/',
	'https://www.mikrobitti.fi/api/feed/v2/rss/mb',
	'https://mobiili.fi/feed/',
	'https://www.uusiteknologia.fi/feed/',
	'https://suomimobiili.fi/feed/',
	'https://teknavi.fi/rss',
	'https://muropaketti.com/kategoria/tietotekniikka/tietotekniikkauutiset/feed/',
	'https://muropaketti.com/kategoria/mobiili/mobiiliuutiset/feed/',
	'https://autotoday.fi/feed/',
	'https://www.motouutiset.fi/fi/static/rss/',
	'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/lifestyle_tekniikka',
	'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/lifestyle_digi',
	'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/lifestyle_autot',
	'https://moottori.fi/feed/',
	'http://rss.hardware.fi/uutiset',
	'https://autobild.fi/rss',
	'https://eurheilu.com/feed/'
];

const recent = [
	'https://www.iltalehti.fi/rss/uutiset.xml',
	'https://muropaketti.com/feed/',
	'https://www.io-tech.fi/feed/',
	'https://www.is.fi/rss/tuoreimmat.xml',
	'https://feeds.kauppalehti.fi/rss/main',
	'https://vanha.tekniikanmaailma.fi/feed/',
	'https://www.tivi.fi/api/feed/v2/rss/tv',
	'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET',
	'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/viihde_uusimmat',
	'https://www.hs.fi/rss/tuoreimmat.xml',
	'https://www.uusisuomi.fi/api/feed/v2/rss/us',
	'https://www.mtvuutiset.fi/api/feed/rss/uutiset',
	'https://wp.demokraatti.fi/feed/',
	'https://www.kaleva.fi/feedit/rss/managed-listing/rss-uusimmat/',
	'https://www.paivanlehti.fi/etusivu/feed/',
	'https://www.suomenmaa.fi/feed/',
	'https://www.ts.fi/rss.xml',
	'https://uutisvuoksi.fi/api/articles.rss',
	'https://aamuset.fi/rss.xml',
	'https://www.karjalainen.fi/component/obrss/karjalainen-uutiskirje',
	'https://moottori.fi/feed/',
	'https://ilkkapohjalainen.fi/cmlink/ilkka-pohjalainen-paikalliset-1.5242274',
	'https://www.talouselama.fi/api/feed/v2/rss/te',
	'https://www.mediuutiset.fi/api/feed/v2/rss/mu',
	'https://www.hameensanomat.fi/rss',
	'https://kuluttaja.fi/feed/',
	'https://www.ess.fi/feed/rss'
];

const home = [
	'https://www.is.fi/rss/kotimaa.xml',
	'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-34837',
	'https://www.hs.fi/rss/kotimaa.xml',
	'https://www.mtvuutiset.fi/api/feed/rss/uutiset_kotimaa',
	'https://www.kaleva.fi/feedit/rss/managed-listing/kotimaa',
	'https://www.maaseuduntulevaisuus.fi/feed/kotimaa-rss-feed-7.140403',
	'https://www.lapinkansa.fi/feedit/rss/newest-free/',
	'https://ilkkapohjalainen.fi/cmlink/ilkka-pohjalainen-paikalliset-1.5242274'
];

const abroad = [
	'https://www.is.fi/rss/ulkomaat.xml',
	'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-34953',
	'https://feeds.kauppalehti.fi/rss/topic/eu',
	'https://feeds.kauppalehti.fi/rss/topic/usa',
	'https://feeds.kauppalehti.fi/rss/topic/venaja',
	'https://www.hs.fi/rss/ulkomaat.xml',
	'https://www.mtvuutiset.fi/api/feed/rss/uutiset_ulkomaat',
	'https://www.kaleva.fi/feedit/rss/managed-listing/ulkomaat',
	'https://www.maaseuduntulevaisuus.fi/feed/ulkomaat-rss-feed-7.140404'
];

const political = [
	'https://www.verkkouutiset.fi/feed/',
	'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-38033',
	'https://feeds.kauppalehti.fi/rss/topic/politiikka',
	'https://www.hs.fi/rss/politiikka.xml',
	'https://www.kansanuutiset.fi/feed',
	'https://www.maaseuduntulevaisuus.fi/feed/politiikka-rss-feed-7.138718',
	'https://www.kdlehti.fi/feed/'
];

const entertainment = [
	'https://www.is.fi/rss/viihde.xml',
	'https://www.is.fi/rss/elokuvat.xml',
	'https://www.is.fi/rss/musiikki.xml',
	'https://www.iltalehti.fi/rss/viihde.xml',
	'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-36066',
	'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/viihde_uusimmat',
	'https://respawn.fi/feed/',
	'https://www.tilt.fi/feed/',
	'https://pelaaja.fi/rss.xml',
	'https://muropaketti.com/kategoria/pelit/peliuutiset/feed/',
	'https://muropaketti.com/kategoria/elokuvat/elokuvauutiset/feed/'
];

const sports = [
	'https://www.is.fi/rss/urheilu.xml',
	'https://www.hs.fi/rss/urheilu.xml',
	'https://www.nhlsuomi.com/feed/',
	'https://www.valioliiga.com/feed/',
	'https://www.laliiga.com/feed/',
	'https://www.suomikiekko.com/feed/',
	'https://www.leijonat.com/feed/',
	'https://www.suomifutis.com/feed/',
	'https://www.jatkoaika.com/rss/index.rss',
	'https://www.kaleva.fi/feedit/rss/managed-listing/urheilu/',
	'https://www.suomikoris.com/feed/',
	'https://www.finnsnooker.com/feed/',
	'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/urheilu',
	'https://www.lapinkansa.fi/feedit/rss/managed-listing/urheilu/',
	'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_URHEILU'
];

module.exports = {
	technology,
	recent,
	home,
	abroad,
	political,
	entertainment,
	sports
};
