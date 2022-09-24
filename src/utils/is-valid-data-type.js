/**
 * @param {any} value
 * @param {string|Array<string>} allowedsDataTypes
 * @return {boolean}
 */
export function isValidDataType(value, allowedsDataTypes) {
	if (typeof allowedsDataTypes === 'string')
		return allowedsDataTypes === typeof value

	if (allowedsDataTypes.length === 1)
		return allowedsDataTypes[0] === typeof value

	return allowedsDataTypes.includes(typeof value)
}
