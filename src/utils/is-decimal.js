import ErrorHandler from '../schemas/error-handler.js'
import { isValidDataType } from './is-valid-data-type.js'

/**
 * @param {number|string} value
 * @return {boolean}
 */
export function isDecimal(value) {
	if (!isValidDataType(value, ['number', 'string']))
		throw ErrorHandler.invalid('data type', [
			'number',
			'string',
		])

	try {
		if (typeof value === 'number') {
			const number = value.toString()

			return number.includes('.')
		}

		return number.includes('.')
	} catch (error) {
		console.error(error)
	}
}
