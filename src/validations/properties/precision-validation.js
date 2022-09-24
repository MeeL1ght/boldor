import { BoldorError } from '../../schemas/error/boldor-error.js'
import { isDecimal } from '../../utils/is-decimal.js'
import { isValidDataType } from '../../utils/is-valid-data-type.js'

/**
 * @param {number} value
 * @return {void}
 */
export function catchPrecisionErrors(value) {
	if (!isValidDataType(value, 'number'))
		throw new BoldorError().invalid('data type')

	if (isDecimal(value))
		throw new BoldorError().throwMessage(
			'Cannot be a decimal value',
		)

	if (value < 0 || value > 12)
		throw new BoldorError().valueOutOfRange()
}

/**
 * @param {number} value
 * @return {boolean}
 */
export function isValidPrecision(value) {
	return !isValidDataType(value, 'number') ||
		isDecimal(value) ||
		value < 0 ||
		value > 12
		? false
		: true
}
