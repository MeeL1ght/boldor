import ErrorHandler from '../schemas/error-handler.js'
import { isNumber } from './is-number.js'
import { isValidDataType } from './is-valid-data-type.js'
import { toNumber } from './to-number.js'

/**
 * Determines whether the value is a decimal number
 * @param {string|number} value
 * @return {boolean}
 */
export function isDecimal(value) {
	if (!isNumber(value))
		throw ErrorHandler.errorMessage(
			'The value to be received is neither a number nor a string',
		)

	const dataType = typeof value
	const allowedDataTypes = ['number', 'string']

	if (!isValidDataType(dataType, allowedDataTypes))
		throw ErrorHandler.invalid('data type', allowedDataTypes)

	try {
		if (typeof value === 'string')
			return toNumber(value) % 1 !== 0

		return value % 1 !== 0
	} catch (error) {
		console.error(error)
	}
}
