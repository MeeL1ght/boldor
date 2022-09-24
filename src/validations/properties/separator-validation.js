import { Separators } from '../../schemas/separators.js'
import { SeparatorsError } from '../../schemas/error/separators-error.js'
import { ALLOWED_SEPARATOR_VALUES } from '../../config/setup.js'
import { hasValue } from '../../utils/has-value.js'
import { isValidDataType } from '../../utils/is-valid-data-type.js'

/**
 * @param {string} value
 * @return {void}
 */
export function catchSeparatorErrors(value) {
	if (!isValidDataType(value, 'string'))
		throw new SeparatorsError().invalid('data type')

	if (!hasValue(ALLOWED_SEPARATOR_VALUES, value))
		throw new SeparatorsError().invalid('value')
}

/**
 * The use of a list of separators is required.
 * @param {Separators|Array<string>} value
 * @return {void}
 */
export function catchSeparatorsErrors(value) {
	if (!Array.isArray(value) && !value instanceof Separators)
		throw new SeparatorsError().invalid('data type')

	if (Array.isArray(value)) {
		// Lenght of list
		if (value.length > 2)
			throw new SeparatorsError().totalInvalidArguments()
		// Data types of values
		const res = value.every(val =>
			hasValue(ALLOWED_SEPARATOR_VALUES, val),
		)

		if (!res) throw new SeparatorsError().invalid('value')
	}
}

/**
 * @param {string} value
 * @return {boolean}
 */
export function isValidSeparator(value) {
	return !isValidDataType(value, 'string') ||
		!hasValue(ALLOWED_SEPARATOR_VALUES, value)
		? false
		: true
}

/**
 * The use of a list of separators is required.
 * @param {Separators|Array<string>} value
 * @return {boolean}
 */
export function areValidSeparators(value) {
	if (!Array.isArray(value) && !value instanceof Separators)
		return false

	if (Array.isArray(value)) {
		return value.length > 2 ||
			!value.every(val =>
				hasValue(ALLOWED_SEPARATOR_VALUES, val),
			)
			? false
			: true
	}

	return true
}
