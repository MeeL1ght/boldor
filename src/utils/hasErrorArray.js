/**
 * @param {Array<string>} list
 * @param {Array<string>} allowedKeys
 * @return {boolean}
 */
export const hasErrorArray = (list, allowedKeys) =>
	list.some(value =>
		allowedKeys.includes(value) ? false : true,
	)
