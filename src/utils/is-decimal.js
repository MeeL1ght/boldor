import { isNumber } from './is-number.js'

/**
 * Determines whether the value is a decimal number
 * @param {string|number} x
 * @return {boolean}
 */
export function isDecimal(x) {
	if (!isNumber(x)) return false
	if (typeof x === 'string') return +x % 1 !== 0

	return x % 1 !== 0
}
