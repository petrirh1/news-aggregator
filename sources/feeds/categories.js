const tech = [
	'3g',
	'4g',
	'5g',
	'6g',
	'ajoneuvot',
	'akut',
	'appgallery',
	'apple',
	'auto',
	'autot',
	'autotestit',
	'digiuutiset',
	'uutinen',
	'julkistus',
	'testi',
	'huhut',
	'lifestyle',
	'autoyesterday',
	'päivän automainos',
	'henkilöautot',
	'autouutiset',
	'autoyesterday',
	'digitalous',
	'esports',
	'fossiiliset',
	'google',
	'htc',
	'haittaohjelmat',
	'huawei',
	'ios',
	'homepod',
	'ipad',
	'ipados',
	'iphone',
	'kamera',
	'kamerat',
	'kehittäjäversio',
	'kiintolevyt',
	'kuulokkeet',
	'langattomat kuulokkeet',
	'langattomat nappikuulokkeet',
	'aktiivisuusrannekkeet',
	'elektroniikka',
	'pelinäyttö',
	'kaareva pelinäyttö',
	'lga115x',
	'lga1200',
	'linux',
	'läppärit',
	'mac',
	'macos',
	'microsoft',
	'internet',
	'smartphone',
	'camera',
	'computing',
	'earbuds',
	'noise cancel',
	'earphones',
	'storage',
	'biz & it',
	'software update',
	'gear',
	'tekniikkakatsaus',
	'mobiili',
	'mobiilisovellukset',
	'mobiiliuutiset',
	'mobiilitestit',
	'testit',
	'digitoday',
	'4k',
	'8k',
	'16k',
	'motorola',
	'oheislaitteet',
	'ohjelmistot',
	'oneplus',
	'pikaviestimet',
	'polkupyörät',
	'puettavat',
	'puohjelmat',
	'pöytätietokoneet',
	'supertietokoneet',
	'samsung',
	'selaimet',
	'snapdragon',
	'sony',
	'sosiaalinen media',
	'sovellukset',
	'sovellukset ja palvelut',
	'sovelluskaupat',
	'auto',
	'sähköauto',
	'sähköautot',
	'sähkömoottori',
	'sähköpyörät',
	'tabletit',
	'teknologia',
	'tietokoneet',
	'muu tietotekniikka',
	'tietotekniikkauutiset',
	'arm',
	'pelihiiri',
	'pelinäppäimistö',
	'tietoturva',
	'varavirtalähteet',
	'verkkotekniikka',
	'viikon tekniikkauutiset',
	'watchos',
	'tvos',
	'windows',
	'android',
	'xiaomi',
	'yksityisyys',
	'tekoäly',
	'vpn',
	'älypuhelimet',
	'nettiyhteydet',
	'matkalla',
	'käyttöjärjestelmät',
	'yleinen',
	'vuoto',
	'vuotokuvat',
	'tabletti',
	'pelipuhelin',
	'uutuudet',
	'työasema',
	'kokeilussa',
	'toimituksen valinta',
	'audio & hifi',
	'highend audio',
	'aurinkoenergia',
	'youtube',
	'phone',
	'firmware',
	'galaxy',
	'a51',
	'oled',
	'long term reviews',
	'gear / products',
	'gear / reviews',
	'gear / products / outdoor',
	'hacking',
	'cybersecurity',
	'twitter',
	'breach',
	'hacker',
	'social media',
	'social',
	'automotive',
	'nasa',
	'watch',
	'best of android',
	'phone',
	'fitness trackers',
	'wearables',
	'compromise',
	'opinion',
	'general',
	'bitcoin',
	'hack',
	'artificial intelligence',
	'neural',
	'privacy',
	'tech',
	'news',
	'features',
	'tech news',
	'first drives',
	'car lists',
	'cars',
	'electric car',
	'alternative fuel',
	'charging network',
	'electric vehicle',
	'electric vehicles',
	'amazon',
	'smart home',
	'bugatti',
	'prices',
	'gm',
	'chevrolet',
	'suv',
	'mclaren',
	'mercedes',
	'amg',
	'maserati',
	'rivian',
	'fiat',
	'vw',
	'ford',
	'toyota',
	'bmw',
	'audi',
	'tesla',
	'scoops',
	'new cars',
	'patent',
	'qled tv',
	'chargers',
	'hybrids',
	'plugged',
	'security',
	'ev',
	'transportation',
	'autonomous vehicles',
	'spotify',
	'apple music',
	'tidal',
	'amazon music unlimited',
	'deezer',
	'youtube music',
	'reports',
	'galleries',
	'tiktok',
	'ban',
	'classic cars'
];

const entertainment = [
	'toimintapelit',
	'ajopelit',
	'cs:go',
	'csgo',
	'elokuva-arvostelut',
	'elokuvat',
	'elokuvauutiset',
	'ennakkokuuntelut',
	'folk',
	'hardcore',
	'hbo',
	'horoskooppi',
	'indie',
	'indiepelit',
	'kauhupelit',
	'metal',
	'musiikki',
	'musiikkivideo',
	'peli',
	'peli-viihde',
	'peliarvostelut',
	'pelikulttuuri',
	'pelimusiikki',
	'pelit',
	'pelitrailerit',
	'peliuutiset',
	'ninjas in pyjamas',
	'valorant',
	'podcast',
	'pop',
	'post-hardcore / metalcore',
	'punk',
	'rock',
	'sarjat',
	'seikkailu- ja roolipelit',
	'tasohyppelyt',
	'tv & elokuvat',
	'tv-ja-leffat',
	'uuden musiikin julkaisut',
	'julkaisu',
	'verkkopelit',
	'viihde',
	'viihdeuutiset',
	'yle areena'
];

const sport = [
	'aika-ajot',
	'amerikkalainen jalkapallo',
	'ammattilaiskoripallo',
	'ammattiurheilu',
	'ampumahiihto',
	'autourheilu',
	'bundesliiga',
	'englannin valioliiga',
	'eurocupit',
	'eurooppa-liiga',
	'eurosarjat',
	'f1',
	'fiba',
	'formula 1',
	'formula 1 -kuljettaja',
	'formula 1 -tallit',
	'golf',
	'jalkapallo',
	'jatkoaika (urheilu)',
	'joukkueurheilu',
	'jääkiekko',
	'jääkiekon miesten sm-liiga',
	'keihäänheitto',
	'khl',
	'koripallo',
	'la liga',
	'lentopallo',
	'liiga',
	'maailmancupit',
	'maajoukkueet',
	'maajoukkuekoripallo',
	'maaottelut',
	'major league soccer',
	'manchester united',
	'mestarien liiga',
	'miesten golf',
	'miesten jääkiekko',
	'miesten superpesis',
	'moottoripyöräily',
	'ratamoottoripyöräily',
	'motogp',
	'moottoripyöräurheilu',
	'motocross',
	'muut lajit',
	'muut sarjat',
	'naisurheilu',
	'urheilu',
	'nba',
	'nfl',
	'nhl',
	'nla',
	'olympialaiset',
	'pesäpallo',
	'pöytätennis',
	'ralli',
	'rata-autoilu',
	'ravivihjeet',
	'real madrid',
	'salibandy',
	'seitsenottelu',
	'serie a',
	'sm-liiga',
	'susijengi',
	'talviurheilu',
	'timanttiliiga',
	'uefa',
	'urheilu',
	'urheiluennätykset',
	'urheiluvalmennus',
	'valioliiga',
	'yleisurheilu'
];

module.exports = { tech, entertainment, sport };
