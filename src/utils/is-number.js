/**
 * Determines whether the value is a number
 * @param {string|number} x
 * @return {boolean}
 */
export function isNumber(x) {
	if (typeof x === 'string')
		if (x === '' || x.includes(' ')) return false

	return !isNaN(x)
}
