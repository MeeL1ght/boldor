import { BoldorError } from '../../schemas/error/boldor-error.js'

/**
 * @param {boolean} condition
 * @return {boolean}
 */
export function catchErrorsTotalInvalidArguments(condition) {
	if (!condition)
		throw new BoldorError().totalInvalidArguments()
}
