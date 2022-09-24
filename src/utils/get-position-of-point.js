/**
 * _Get position of the point_
 * This function works hand in hand with
 * the integer or `decimal` cut
 * @param {number|string} x
 * @return {number}
 */
export const getPositionOfThePoint = x =>
	typeof x === 'string'
		? x.indexOf('.')
		: x.toString().indexOf('.')
