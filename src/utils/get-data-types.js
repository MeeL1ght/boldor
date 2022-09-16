/**
 * @param {object|Array<any>} list
 * @return {Array<string>}
 */
export function getDataTypes(list) {
	if (arguments.length === 0) return []
	if (typeof list === 'object')
		return Object.values(list).map(value => typeof value)

	return list.map(value => typeof value)
}
