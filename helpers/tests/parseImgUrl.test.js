const parseImgUrl = require('../parseImgUrl');

describe('parse image url from string', () => {
	test('should return image url', () => {
		expect(
			parseImgUrl({
				url: 'https://aamuset.fi/static/content/pic_6_5007147_k5460856_1200.jpg'
			})
		).toBe('https://aamuset.fi/static/content/pic_6_5007147_k5460856_1200.jpg');
		expect(
			parseImgUrl(
				'<div class="feat-image"><img src="http://9to5mac.com/wp-content/uploads/sites/6/2020/07/Some-Fujifilm-cameras-can-be-used-as-a-Mac-webcam.jpg?quality=82&#038;strip=all&#038;w=1500" /></div>'
			)
		).toBe(
			'https://9to5mac.com/wp-content/uploads/sites/6/2020/07/Some-Fujifilm-cameras-can-be-used-as-a-Mac-webcam.jpg'
		);

		expect(
			parseImgUrl({
				url:
					'http://images.cdn.yle.fi/image/upload//w_205,h_115,q_70/39-6994095f0eda1879a84.jpg'
			})
		).toBe(
			'https://images.cdn.yle.fi/image/upload//w_600,h_337,q_70/39-6994095f0eda1879a84.jpg'
		);

		expect(
			parseImgUrl({
				url:
					'https://images.cdn.yle.fi/image/upload//w_205,h_115,q_70/39-6994095f0eda1879a84.jpg',
				type: 'image/jpeg',
				length: '0'
			})
		).toBe(
			'https://images.cdn.yle.fi/image/upload//w_600,h_337,q_70/39-6994095f0eda1879a84.jpg'
		);
	});

	test('should return an empty string', () => {
		expect(
			parseImgUrl({
				url:
					'https://images.cdn.yle.fi/image/upload//w_205,h_115,q_70/39-6994095f0eda1879a84.jpg',
				type: 'video/mp4',
				length: '0'
			})
		).toBe('');

		expect(parseImgUrl('<p>https://www.is.fi/image/upload/hello.mp4</p>')).toBe(
			''
		);

		expect(parseImgUrl('')).toBe('');
		expect(parseImgUrl(null)).toBe('');
		expect(parseImgUrl(undefined)).toBe('');
	});
});
