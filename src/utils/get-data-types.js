/**
 * @param {object|Array<any>} data
 * @return {Array<string>}
 */
export function getDataTypes(data) {
	if (arguments.length === 0) return []
	if (typeof data === 'object')
		return Object.values(data).map(value => typeof value)

	return data.map(value => typeof value)
}
