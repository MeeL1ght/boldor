import Decimal from 'decimal.js-light'
import { Separators } from '../schemas/separators.js'
import { hasValue } from './has-value.js'
import { isDecimal } from './is-decimal.js'

import {
	ALLOWED_SEPARATOR_VALUES,
	PATTERN_SEPARATE_CURRENCY,
} from '../config/setup.js'

/**
 * Separate currency
 * @param {string} str
 * @param {string} separator
 * @return {string}
 */
const toSeparateCurrency = (str, separator = '.') =>
	str.replace(PATTERN_SEPARATE_CURRENCY, separator)

const toFixed = (currency, precision) =>
	new Decimal(currency + '').toFixed(precision)

/**
 * Add separator to currency
 * @param {object} setup
 * @param {number} setup.currency
 * @param {number} setup.precision
 * @param {Array<string>|Separators} setup.separators
 * @return {string}
 */
export function addSeparators(
	setup = {
		currency,
		precision,
		separators,
	},
) {
	const { currency, precision, separators } = setup
	let fullStr = toFixed(currency, precision)

	const [, , , , , ...emptyValues] = ALLOWED_SEPARATOR_VALUES
	// Cut
	let startStr = cutIntegerPart(fullStr) // Default: '.'
	let endStr = cutDecimalPart(fullStr) // Default: '.'

	const [firstSp, secondSp] = separators

	if (Array.isArray(separators)) {
		// Cuando no es decimal y la precision es cero
		if (!isDecimal(currency) && precision === 0) return fullStr

		startStr = toSeparateCurrency(startStr, firstSp)

		// Cuando es decimal y la precision es cero
		if (isDecimal(currency) && precision === 0) return startStr
	}

	// if (separators instanceof Separators) {

	// CASO 1: CUANDO ES DECIMAL
	// ACÁ SE DEBE COMPROBAR CUANDO LOS
	// DECIMALES SON DE TIPO 'Separatos' | 'Array<string>'
	// Y DE ACUERDO AL TIPO, REALIZAR LOS PROCESOS

	// Is decimal ?
	/*if (isDecimal(currency)) {
		/* if (separators instanceof Separators) {
			const sp = separators.getBoth

			startStr = toSeparateCurrency(startStr, separators.first)
			endStr = endStr.replace('.', separators.second)

			if (hasValue(emptyValues, sp))
				return toSeparateCurrency(fullStr, separators)
		}

		// Is Array

		if (precision === 0) return fullStr

		if (
			hasValue(emptyValues, firstSp) &&
			hasValue(emptyValues, secondSp)
		)
			return fullStr

		if (
			!hasValue(emptyValues, firstSp) &&
			hasValue(emptyValues, secondSp)
		)
			startStr = toSeparateCurrency(startStr, firstSp)

		if (
			hasValue(emptyValues, firstSp) &&
			!hasValue(emptyValues, secondSp)
		)
			endStr = toSeparateCurrency(endStr, secondSp)

		/* if (hasValue(emptyValues, separator)) return 'is empty'


		
		// PENDIENTE DEL DIA 21/09
		// CONTINUAR REALIZANDO EL ALGORITMO
		// DEL MÉTODO addSeparators()

		// Adaptarlo para los tipos: Separators y Array
		// EMPECÉ A ADAPTARLO CON EL TIPO Array.
		// PERO DEBO SEGUIR PENDIENTE EN LAS VALIDACIONES
		// LOS if




		// startStr = toSeparateCurrency(startStr, separators)
		// REEMPLAZO DEL ÚLTIMO SEPARADOR
    //if ()
		endStr = endStr.replace('.', finalSeparator)
		// endStr = toSeparateCurrency(endStr, separator)

		console.log(endStr, '\n')

		return `${startStr}${endStr}` */

	/* if (separators instanceof Separators) {
		const sp = separators.getBoth

		startStr = toSeparateCurrency(startStr, separators.first)
		endStr = endStr.replace('.', separators.second)

		if (hasValue(emptyValues, sp))
			return toSeparateCurrency(fullStr, separators)
	} */

	// CASO 2: CUANDO ES ENTERO
	// ACÁ SE DEBE COMPROBAR CUANDO LOS
	// DECIMALES SON DE TIPO 'Separatos' | 'Array<string>'
	// Y DE ACUERDO AL TIPO, REALIZAR LOS PROCESOS

	// Is Array
	console.log('\nIs a integer\n')

	/*if (
		precision === 0 ||
		(hasValue(emptyValues, firstSp) &&
			hasValue(emptyValues, secondSp)) ||
		(hasValue(emptyValues, firstSp) &&
			!hasValue(emptyValues, secondSp))
	)
		return fullStr

	// When the first argument does not have an empty value
	if (
		!hasValue(emptyValues, firstSp) &&
		hasValue(emptyValues, secondSp)
	) {
		startStr = toSeparateCurrency(startStr, firstSp)
		return startStr
	}

	return toSeparateCurrency(fullStr, separators)
}

/*
 * Add separators to the currency
 * @param {{currency: number, precision: number, currentSeparator: string, newSeparator: string }}
 * @return {string}
 */
/*export function addSeparatorsAAA({
	currency,
	precision,
	//currentSeparator,
	//newSeparator,
}) {
	const currencyStr = currency.toString()
	const pattern = /\B(?=(\d{3})+(?!\d))/g

	if (hasValue(['.'], currencyStr)) {
		let startStr = currencyStr.substring(
			0,
			currencyStr.indexOf(currencyStr), // '.'
		)

		let endStr = currencyStr.substring(
			currencyStr.indexOf(currentSeparator), // '.'
			currencyStr.length,
		)

		startStr = hasValue(['none', ' ', ''], currentSeparator)
			? startStr
			: startStr.replace(pattern, newSeparator)

		endStr = new Decimal(endStr).toFixed(precision)
		endStr = hasValue(['none', ' ', ''], currentSeparator)
			? endStr
			: endStr.replace(currentSeparator, newSeparator)

		endStr = endStr.substring(1, endStr.length)

		return `${startStr}${endStr}`
	} */

  

	return fullStr//currencyStr.replace(pattern, newSeparator)
}
