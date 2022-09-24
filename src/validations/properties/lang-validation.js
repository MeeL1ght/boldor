import { BoldorError } from '../../schemas/error/boldor-error.js'
import { ALLOWED_LANG_VALUES } from '../../config/setup.js'
import { hasValue } from '../../utils/has-value.js'
import { isValidDataType } from '../../utils/is-valid-data-type.js'

/**
 * @param {string} value
 * @return {void}
 */
export function catchLangErrors(value) {
	if (!isValidDataType(value, 'string'))
		throw new BoldorError().invalid('data type')

	value = value.toLowerCase()

	if (!hasValue(ALLOWED_LANG_VALUES, value))
		throw new BoldorError.invalid('value')
}

/**
 * @param {string} value
 * @return {boolean}
 */
export function isValidLang(value) {
	if (!isValidDataType(value, 'string')) return false
	value = value.toLowerCase()

	return !hasValue(ALLOWED_LANG_VALUES, value)
}
