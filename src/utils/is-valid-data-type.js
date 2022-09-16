/**
 * @param {any} value
 * @param {Array<string>} allowedsDataTypes
 * @return {boolean}
 */
export const isValidDataType = (value, allowedsDataTypes) => {
	if (allowedsDataTypes.length === 1)
		return allowedsDataTypes[0] === typeof value

	return allowedsDataTypes.includes(typeof value)
}
