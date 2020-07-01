const technology = [
	'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/lifestyle_autot',
	'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/lifestyle_digi',
	'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/lifestyle_tekniikka',
	'https://autobild.fi/rss',
	'https://autotoday.fi/feed/',
	'https://feeds.kauppalehti.fi/rss/topic/auto',
	'https://feeds.kauppalehti.fi/rss/topic/elektroniikka',
	'https://mobiili.fi/feed/',
	'https://moottori.fi/feed/',
	'https://muropaketti.com/kategoria/mobiili/mobiiliuutiset/feed/',
	'https://muropaketti.com/kategoria/tietotekniikka/tietotekniikkauutiset/feed/',
	'https://suomimobiili.fi/feed/',
	'https://teknavi.fi/rss',
	'https://vanha.tekniikanmaailma.fi/feed/',
	'https://www.hs.fi/rss/autotiede.xml',
	'https://www.iltalehti.fi/rss/autot.xml',
	'https://www.iltalehti.fi/rss/digi.xml',
	'https://www.io-tech.fi/feed/',
	'https://www.is.fi/rss/autot.xml',
	'https://www.is.fi/rss/digitoday.xml',
	'https://www.mikrobitti.fi/api/feed/v2/rss/mb',
	'https://www.motouutiset.fi/fi/static/rss/',
	'https://www.uusiteknologia.fi/feed/',
	'https://avplus.fi/feed/'
];

const recent = [
	'https://aamuset.fi/rss.xml',
	'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/viihde_uusimmat',
	'https://feeds.kauppalehti.fi/rss/main',
	'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET',
	'https://ilkkapohjalainen.fi/cmlink/ilkka-pohjalainen-paikalliset-1.5242274',
	'https://kuluttaja.fi/feed/',
	'https://lansi-savo.fi/api/articles.rss',
	'https://moottori.fi/feed/',
	'https://muropaketti.com/feed/',
	'https://uutisvuoksi.fi/api/articles.rss',
	'https://vanha.tekniikanmaailma.fi/feed/',
	'https://wp.demokraatti.fi/feed/',
	'https://www.ess.fi/feed/rss',
	'https://www.hameensanomat.fi/rss',
	'https://www.hs.fi/rss/tuoreimmat.xml',
	'https://www.iltalehti.fi/rss/uutiset.xml',
	'https://www.io-tech.fi/feed/',
	'https://www.is.fi/rss/tuoreimmat.xml',
	'https://www.kaleva.fi/feedit/rss/managed-listing/rss-uusimmat/',
	'https://www.karjalainen.fi/component/obrss/karjalainen-uutiskirje',
	'https://www.keskipohjanmaa.fi/feed?name=keskipohjanmaa',
	'https://www.mtvuutiset.fi/api/feed/rss/uutiset',
	'https://www.paivanlehti.fi/etusivu/feed/',
	'https://www.suomenmaa.fi/feed/',
	'https://www.talouselama.fi/api/feed/v2/rss/te',
	'https://www.tivi.fi/api/feed/v2/rss/tv',
	'https://www.ts.fi/rss.xml',
	'https://www.uusisuomi.fi/api/feed/v2/rss/us'
];

const home = [
	'https://ilkkapohjalainen.fi/cmlink/ilkka-pohjalainen-paikalliset-1.5242274',
	'https://www.hs.fi/rss/kotimaa.xml',
	'https://www.is.fi/rss/kotimaa.xml',
	'https://www.kaleva.fi/feedit/rss/managed-listing/kotimaa',
	'https://www.lapinkansa.fi/feedit/rss/newest-free/',
	'https://www.maaseuduntulevaisuus.fi/feed/kotimaa-rss-feed-7.140403',
	'https://www.mtvuutiset.fi/api/feed/rss/uutiset_kotimaa',
	'https://www.keskipohjanmaa.fi/uutiset/aihetunnisteet/Kotimaa/feed'
];

const abroad = [
	'https://feeds.kauppalehti.fi/rss/topic/eu',
	'https://feeds.kauppalehti.fi/rss/topic/usa',
	'https://feeds.kauppalehti.fi/rss/topic/venaja',
	'https://www.hs.fi/rss/ulkomaat.xml',
	'https://www.is.fi/rss/ulkomaat.xml',
	'https://www.kaleva.fi/feedit/rss/managed-listing/ulkomaat',
	'https://www.maaseuduntulevaisuus.fi/feed/ulkomaat-rss-feed-7.140404',
	'https://www.mtvuutiset.fi/api/feed/rss/uutiset_ulkomaat',
	'https://www.keskipohjanmaa.fi/uutiset/aihetunnisteet/Ulkomaat/feed'
];

const political = [
	'https://www.is.fi/rss/politiikka.xml',
	'https://feeds.kauppalehti.fi/rss/topic/politiikka',
	'https://www.hs.fi/rss/politiikka.xml',
	'https://www.kansanuutiset.fi/feed',
	'https://www.maaseuduntulevaisuus.fi/feed/politiikka-rss-feed-7.138718',
	'https://www.kdlehti.fi/feed/',
	'https://www.keskipohjanmaa.fi/uutiset/aihetunnisteet/Talous/feed'
];

const entertainment = [
	'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/viihde_uusimmat',
	'https://errori.net/feed/',
	'https://eurheilu.com/feed/',
	'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-36066',
	'https://kaaoszine.fi/feed/',
	'https://muropaketti.com/kategoria/elokuvat/elokuvauutiset/feed/',
	'https://muropaketti.com/kategoria/pelit/peliuutiset/feed/',
	'https://pelaaja.fi/rss.xml',
	'https://respawn.fi/feed/',
	'https://www.iltalehti.fi/rss/viihde.xml',
	'https://www.is.fi/rss/digitoday/esports.xml',
	'https://www.is.fi/rss/elokuvat.xml',
	'https://www.is.fi/rss/musiikki.xml',
	'https://www.is.fi/rss/viihde.xml',
	'https://www.tilt.fi/feed/'
];

const sports = [
	'https://api.mtvuutiset.fi/mtvuutiset/api/feed/rss/urheilu',
	'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_URHEILU',
	'https://www.finnsnooker.com/feed/',
	'https://www.hs.fi/rss/urheilu.xml',
	'https://www.is.fi/rss/urheilu.xml',
	'https://www.jatkoaika.com/rss/index.rss',
	'https://www.kaleva.fi/feedit/rss/managed-listing/urheilu/',
	'https://www.laliiga.com/feed/',
	'https://www.lapinkansa.fi/feedit/rss/managed-listing/urheilu/',
	'https://www.leijonat.com/feed/',
	'https://www.nhlsuomi.com/feed/',
	'https://www.suomif1.com/feed/',
	'https://www.suomifutis.com/feed/',
	'https://www.suomikiekko.com/feed/',
	'https://www.suomikoris.com/feed/',
	'https://www.valioliiga.com/feed/',
	'https://www.keskipohjanmaa.fi/uutiset/aihetunnisteet/Urheilu/feed',
	'https://www.paivanlehti.fi/arkisto/urheilu/feed/'
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
