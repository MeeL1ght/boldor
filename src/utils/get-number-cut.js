/**
 * Get integer | decimal part
 * @param {{ value: number|string, position: number, cutType: string }}
 * @return {string}
 */
export function getNumberCut({ value, position, cutType }) {
	cutType = cutType.toLowerCase()

	if (['int', 'integer'].includes(cutType))
		return typeof value === 'string'
			? value.substring(0, position)
			: value.toString().substring(0, position)

	if (cutType === 'decimal')
		return typeof value === 'string'
			? value.substring(position + 1, value.length)
			: value.toString().substring(position + 1, value.length)

	return ''
}
