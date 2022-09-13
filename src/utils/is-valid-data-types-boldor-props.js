import { hasValue } from './has-value.js'

/**
 * @param {Array<string>} propNames
 * @param {Array<string>} dataTypes
 * @return {boolean}
 */
export const isValidDataTypesBoldorProps = (
	propNames,
	dataTypes,
) => {
	for (const [index, propName] of propNames.entries()) {
		const dataType = dataTypes[index]
		const isCorrectCurrency = hasValue(
			['string', 'number'],
			dataType,
		)
		// currency
		if (propName === 'currency')
			if (!isCorrectCurrency) return false
		// precision
		if (propName === 'precision' && dataType !== 'number')
			return false
		// separator
		if (propName === 'separator' && dataType !== 'string')
			return false
		// lang
		if (propName === 'lang' && dataType !== 'string')
			return false
	}

	return true
}
