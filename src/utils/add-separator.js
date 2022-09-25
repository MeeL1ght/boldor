import Decimal from 'decimal.js-light'
import { Separators } from '../schemas/separators.js'
import { isDecimal } from './is-decimal.js'
import { PATTERN_SEPARATE_CURRENCY } from '../config/setup.js'
import { intPart } from './int-part.js'
import { decimalPart } from './decimal-part.js'

/**
 * Separate currency
 * @param {string} str
 * @param {string} separator
 * @return {string}
 */
export const addSeparator = (str, separator = '.') =>
	str.replace(PATTERN_SEPARATE_CURRENCY, separator)

/**
 * Separate currency
 * @param {object}
 * @return {string}
 */
export function separateCurrency({
	fullStr,
	precision,
	str,
	separator = '.',
}) {
	if (+fullStr > 999 && precision > 0)
		return addSeparator(str, separator)

	return str
}

/**
 * Get currency format
 * @param {object}
 * @return {string}
 */
export function getCurrencyFormat({
	fullStr,
	separators,
	precision,
	startStr,
	endStr,
	secondSp,
}) {
	if (
		Array.isArray(separators) ||
		separators instanceof Separators
	) {
		if (isDecimal(fullStr)) {
			if (precision > 0)
				return `${startStr}${endStr.replace('.', secondSp)}`

			return startStr
		}

		return startStr
	}
}

/**
 * Add separators
 * @param {object} setup
 * @param {number|string} setup.currency
 * @param {number} setup.precision
 * @param {Array<string>|Separators} setup.separators
 * @return {string}
 */
export function addSeparators(
	setup = {
		currency,
		precision,
		separators,
	},
) {
	let { currency, precision, separators } = setup

	let fullStr =
		typeof currency === 'number'
			? currency.toString()
			: currency

	if (precision > 0)
		fullStr = new Decimal(fullStr).toFixed(precision)

	let startStr = intPart(fullStr)
	let endStr = decimalPart(fullStr, { withPoint: true })

	const [firstSp, secondSp] =
		(Array.isArray(separators) && separators) ||
		(separators instanceof Separators && separators.getBoth)

	startStr = separateCurrency({
		fullStr: fullStr,
		precision: precision,
		str: startStr,
		separator: firstSp,
	})

	return getCurrencyFormat({
		fullStr: fullStr,
		separators: separators,
		precision: precision,
		startStr: startStr,
		endStr: endStr,
		secondSp: secondSp,
	})
}
