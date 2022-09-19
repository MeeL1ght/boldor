import ErrorHandler from '../schemas/error-handler.js'
import { isValidDataType } from './is-valid-data-type.js'

/**
 * Determines whether the value is a number
 * @param {string|number} value
 * @return {boolean}
 */
export function isNumber(value) {
	const dataType = typeof value
	const allowedDataTypes = ['number', 'string']

	if (!isValidDataType(dataType, allowedDataTypes))
		throw ErrorHandler.invalid('data type', allowedDataTypes)

	try {
		if (dataType === 'string')
			if (value === '' || value.includes(' ')) return false

		return !isNaN(value)
	} catch (error) {
		console.error(error)
	}
}
