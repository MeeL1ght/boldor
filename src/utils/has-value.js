import ErrorHandler from '../schemas/error-handler.js'

/**
 * @param {Array<any>} list
 * @param {any} value
 * @return {boolean}
 */
export function hasValue(list, value) {
	if (!Array.isArray(list))
		throw ErrorHandler.invalid('data type', 'Array<any>')

	const ALLOWED_DATA_TYPES = ['string', 'number', 'boolean']

	if (['object', 'undefined'].includes(typeof value))
		throw ErrorHandler.invalid('data type', ALLOWED_DATA_TYPES)

	try {
		return list.includes(value)
	} catch (error) {
		console.error(error)
	}
}
