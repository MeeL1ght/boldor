import ErrorHandler from '../schemas/error-handler.js'
import { isValidDataType } from './is-valid-data-type.js'

/**
 * Determines whether a property of an object exists
 * @param {object} instance
 * @param {string} [propName='']
 * @return {boolean}
 */
export function hasProp(instance, propName = '') {
	if (!isValidDataType(instance, ['object']))
		throw ErrorHandler.invalid('data type', 'object')

	if (!isValidDataType(propName, ['string']))
		throw ErrorHandler.invalid('data type', 'string')

	try {
		return Object.hasOwn(instance, propName)
	} catch (error) {
		console.error(error)
	}
}
