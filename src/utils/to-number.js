import { isNumber } from './is-number.js'

/**
 * Convert to number
 * @param {number|string} value
 * @return {number}
 */
export function toNumber(value) {
	return !isNumber(value) ? +value : value
}
