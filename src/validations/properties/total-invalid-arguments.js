import { BoldorError } from '../../schemas/error/boldor-error.js'

/** @return {BoldorError} */
export function catchErrorsTotalArguments() {
	throw new BoldorError().totalInvalidArguments()
}
