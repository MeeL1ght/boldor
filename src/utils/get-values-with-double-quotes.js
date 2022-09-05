/**
 * @param {Array<string>} list
 * @return {string}
 */
export const getValuesWithDoubleQuotes = list =>
	list.map(value => `"${value}"`).join(', ')
