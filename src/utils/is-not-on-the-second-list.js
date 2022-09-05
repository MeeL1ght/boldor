/**
 * @param {Array<string>} list
 * @param {Array<string>} secondList
 * @return {boolean}
 */
export const isNotOnTheSecondList = (list, secondList) =>
	list.some(value =>
		secondList.includes(value) ? false : true,
	)
