import ErrorHandler from '../schemas/error-handler.js'

/**
 * @param {string|Array<string>} list
 * @return {string}
 */
export const getValuesWithDoubleQuotes = list => {
	if (typeof list === 'string') return `"${list}"`

	if (!Array.isArray(list))
		throw ErrorHandler.invalid('value', ['Array<string>'])

	try {
		return list.map(value => `"${value}"`).join(', ')
	} catch (error) {
		console.error(error)
	}
}
