import { getPositionOfThePoint } from './get-position-of-point.js'
import { getNumberCut } from './get-number-cut.js'

/**
 * Get integer part
 * @param {number|string} x
 * @return {string}
 */
export function intPart(x) {
	const positionOfThePoint = getPositionOfThePoint(x)

	return getNumberCut({
		value: x,
		position: positionOfThePoint,
		cutType: 'int',
	})
}
