/**
 * @param {string} value
 * @return {boolean}
 */
export function isNumber(value) {
	if (arguments.length === 0)
		throw Error('Expected an argument')

	if (typeof value === 'string')
		if (value === '' || value.includes(' ')) return false

	return !isNaN(value)
}
