/**
 * @param {string|Array<string>} list
 * @return {string}
 */
export function getValuesWithDoubleQuotes(list) {
	if (typeof list === 'string') return `"${list}"`

	return list.map(value => `"${value}"`).join(', ')
}
