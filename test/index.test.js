import { intPart } from '../src/utils/int-part.js'
import { decimalPart } from '../src/utils/decimal-part.js'
import Boldor from './../boldor.mjs'
import { Separators } from './../src/schemas/separators.js'
import Decimal from 'decimal.js-light'
import { isDecimal } from '../src/utils/is-decimal.js'
import { PATTERN_SEPARATE_CURRENCY } from '../src/config/setup.js'

console.clear()

/**
 * Separate currency
 * @param {string} str
 * @param {string} separator
 * @return {string}
 */
const toSeparateCurrency = (str, separator = '.') =>
	str.replace(PATTERN_SEPARATE_CURRENCY, separator)

const options = {
	currency: 8512.432,
	precision: 2,
	separators: new Separators(['.', ',']), // ['.', ','],
	lang: 'en',
}

function addSeparators({ currency, precision, separators }) {
	// Variables que pueden cambiar según la condición
	const fullStr =
		typeof currency === 'number'
			? currency.toString()
			: currency

	let startStr = intPart(fullStr)
	let endStr = decimalPart(fullStr, { withPoint: true })

	// PASO 1 - Preguntar si separators es un array
	if (Array.isArray(separators)) {
		return 'es un array'
	}

	// PASO 2 - Preguntar si separators es una instancia de Separators
	if (separators instanceof Separators) {
		const [firstSp, secondSp] = separators.getBoth

		// PASO 2.1 - Preguntar si es decimal
		if (isDecimal(fullStr)) {
			console.log('el precio es decimal')

			startStr = toSeparateCurrency(startStr, firstSp)
			endStr = endStr.replace('.', secondSp)

			return `${startStr}${endStr}`
		}

		return {}
	}

	console.log(`start: ${startStr}`, `\nend: ${endStr}\n`)

	return fullStr
}

/**
 * Pasos:
 * 1.
 *
 */

Boldor.prototype.format = function () {
	return addSeparators({
		currency: options.currency,
		precision: options.precision,
		separators: options.separators,
	})
}

// (!) Run with nodemon script
const boldor = new Boldor(options)

// SOLUCIONAR PROBLEMA AL MOSTRAR LOS SEPARADORES
console.log(boldor.getProps())
console.log()
console.log(boldor.format())
