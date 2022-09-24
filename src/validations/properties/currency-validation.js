import { BoldorError } from '../../schemas/error/boldor-error.js'
import { isValidDataType } from '../../utils/is-valid-data-type.js'

/**
 * @param {number} value
 * @return {void}
 */
export function catchCurrencyErrors(value) {
	if (!isValidDataType(value, 'number'))
		throw new BoldorError().invalid('data type')
}

/**
 * @param {number} value
 * @return {boolean}
 */
export const isValidCurrency = value =>
	!isValidDataType(value, 'number')
