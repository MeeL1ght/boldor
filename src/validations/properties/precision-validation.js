import { BoldorError } from '../../schemas/error/boldor-error.js'
import { isDecimal } from '../../utils/is-decimal.js'
import { isValidDataType } from '../../utils/is-valid-data-type.js'

/**
 * @param {number|string} value
 * @return {void}
 */
export function catchPrecisionErrors(value) {
	if (!isValidDataType(value, ['number', 'string']))
		throw new BoldorError().invalid('data type')

	if (isValidDataType(value, 'number')) {
		if (isDecimal(value))
			throw new BoldorError().throwMessage(
				'Cannot be a decimal value',
			)

		if (value < 0 || value > 12)
			throw new BoldorError().valueOutOfRange()
	}

	if (value.toLowerCase() !== 'full')
		throw new BoldorError().invalid('value')
}

/**
 * @param {number|string} value
 * @return {boolean}
 */
export function isValidPrecision(value) {
	if (!isValidDataType(value, ['number', 'string']))
		return false

	if (isValidDataType(value, 'number')) {
		if (isDecimal(value)) return false
		if (value < 0 || value > 12) return false
	}

	value = value + ''.toLowerCase()

	return value !== 'full'
}
