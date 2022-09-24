import { getPositionOfThePoint } from './get-position-of-point.js'
import { getNumberCut } from './get-number-cut.js'

/**
 * Get decimal part
 * @param {number|string} x
 * @return {number|string}
 */
export function decimalPart(x) {
	const positionOfThePoint = getPositionOfThePoint(x)

	return +getNumberCut({
		value: x,
		position: positionOfThePoint,
		cutType: 'decimal',
	})
}
