import { BoldorError } from '../../schemas/error/boldor-error.js'
import { ALLOWED_PROPS_NAMES } from '../../config/setup.js'
import { isNotOnTheSecondList } from '../../utils/is-not-on-the-second-list.js'

/**
 * @param {Array<string>} propNames
 * @return {boolean}
 */
export function catchErrorsPropertyNames(propNames) {
	if (isNotOnTheSecondList(propNames, ALLOWED_PROPS_NAMES))
		throw new BoldorError().invalid('property name')
}

/**
 * @param {Array<string>} propNames
 * @return {boolean}
 */
export const areValidPropertyNames = propNames =>
	!isNotOnTheSecondList(propNames, ALLOWED_PROPS_NAMES)
// Inverse => res
