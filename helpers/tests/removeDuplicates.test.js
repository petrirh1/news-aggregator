const removeDuplicates = require('../removeDuplicates');

describe('remove duplicates by prop', () => {
	test('should return unique objects', () => {
		const arrOfObjs1 = [
			{
				title: 'Lorem ipsum dolor sit amet',
				guid: '1234567890'
			},
			{
				title: 'Lorem ipsum dolor sit amet',
				guid: '0987654321'
			}
		];

		const arrOfObjsAfter1 = [
			{
				title: 'Lorem ipsum dolor sit amet',
				guid: '1234567890'
			}
		];

		expect(removeDuplicates(arrOfObjs1, 'title')).toEqual(arrOfObjsAfter1);

		const arrOfObjs2 = [
			{
				title: 'Lorem ipsum dolor sit amet',
				guid: '1'
			},
			{
				title: 'Lorem ipsum dolor sit amet',
				guid: '1'
			}
		];

		const arrOfObjsAfter2 = [
			{
				title: 'Lorem ipsum dolor sit amet',
				guid: '1'
			}
		];

		expect(removeDuplicates(arrOfObjs2, 'guid')).toEqual(arrOfObjsAfter2);

		const arrOfObjs3 = [
			{
				title: '',
				guid: '1'
			},
			{
				title: '',
				guid: '1'
			}
		];

		const arrOfObjsAfter3 = [
			{
				title: '',
				guid: '1'
			}
		];

		expect(removeDuplicates(arrOfObjs3, 'title')).toEqual(arrOfObjsAfter3);
	});

	test('should return null', () => {
		const arr = [];
		const arrOfObj = [{}];
		const obj = {};

		expect(removeDuplicates(arr, 'title')).toBeNull();
		expect(removeDuplicates(obj, 'title')).toBeNull();
		expect(removeDuplicates(arrOfObj, 'title')).toBeNull();
	});
});
