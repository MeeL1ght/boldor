import { getPositionOfThePoint } from './get-position-of-point.js'
import { getNumberCut } from './get-number-cut.js'

/**
 * Get decimal part
 * @param {number|string} x
 * @param {object} option
 * @param {boolean} [option.withPoint=false]
 * @return {string}
 */
export function decimalPart(x, option = { withPoint: false }) {
	const positionOfThePoint = option.withPoint
		? getPositionOfThePoint(x) - 1
		: getPositionOfThePoint(x)

	return getNumberCut({
		value: x,
		position: positionOfThePoint,
		cutType: 'decimal',
	})
}
