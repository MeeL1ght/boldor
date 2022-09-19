import { isNumber } from './is-number.js'

/**
 * Convert to number
 * @param {number|string} x
 * @return {number}
 */
export const toNumber = x => (!isNumber(x) ? +x : x)
