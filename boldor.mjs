// Code => For Browser

import {
	DEFAULT_CURRENCY,
	DEFAULT_PRECISION,
	DEFAULT_SEPARATOR,
	DEFAULT_LANG,
	ALLOWED_PROPS_NAMES,
	ALLOWED_SEPARATOR_VALUES,
	ALLOWED_LANG_VALUES,
} from './src/schemas/setup.js'

import ErrorHandler from './src/schemas/error-handler.js'
import { arePropDataTypesCorrect } from './src/utils/are-prop-data-types-correct.js'
import { getDataTypes } from './src/utils/get-data-types.js'
// Eliminar :v
import { getValuesWithDoubleQuotes } from './src/utils/get-values-with-double-quotes.js'

import { hasValue } from './src/utils/has-value.js'
import { isNotOnTheSecondList } from './src/utils/is-not-on-the-second-list.js'

/** The class represents a currency.
 * Currencies => (dollar | bolivar).
 * @class
 */
export default class Boldor {
	// Attributes
	#currency
	#precision
	#separator
	#lang
	/**
	 * Create a price.
	 * @constructor
	 * @param {object} setup
	 * @param {number} setup.currency
	 * @param {number} setup.precision
	 * @param {string} setup.separator
	 * @param {string} setup.lang
	 */
	constructor(
		setup = {
			currency: DEFAULT_CURRENCY,
			precision: DEFAULT_PRECISION,
			separator: DEFAULT_SEPARATOR,
			lang: DEFAULT_LANG,
		},
	) {
		// Checking the total number of arguments
		if (arguments.length > 1)
			throw ErrorHandler.totalInvalidArguments({
				minArguments: 0,
				maxArguments: 1,
			})

		const propNames = Object.keys(setup)
		const dataTypes = getDataTypes(setup)

		// Checking if the data types of the properties are valid
		if (
			!arePropDataTypesCorrect({
				propNames: propNames,
				dataTypes: dataTypes,
			})
		) {
			throw ErrorHandler.dataTypeInvalidProperty()
		}
		// Checking if the object's properties are valid
		if (isNotOnTheSecondList(propNames, ALLOWED_PROPS_NAMES))
			throw ErrorHandler.invalidProperty(ALLOWED_PROPS_NAMES)

		// EMPEZAR A REALIZAR MÉTODOS DE LOS MENSAJES DE
		// ERROR Y LLAMARLOS ACÁ EN LA CLASE :v

		// precision validation
		if (setup.precision < 0 || setup.precision > 12)
			throw Error(DEFAULT_ERROR_MESSAGE, {
				cause:
					'Incorrect value. ' +
					'[Allowed values]: min => 0; max => 12',
			})
		// separator validation
		if (setup?.separator)
			if (!hasValue(ALLOWED_SEPARATOR_VALUES, setup.separator))
				throw Error('', {
					cause:
						'Incorrect value. ' +
						`[Allowed values]: ${getValuesWithDoubleQuotes(
							ALLOWED_SEPARATOR_VALUES,
						)}`,
				})
		// lang validation
		if (setup?.lang)
			if (!hasValue(ALLOWED_LANG_VALUES, setup.lang))
				throw Error('', {
					cause:
						'Incorrect value. ' +
						`[Allowed values]: ${getValuesWithDoubleQuotes(
							ALLOWED_LANG_VALUES,
						)}`,
				})

		try {
			this.#currency = setup?.currency ?? DEFAULT_CURRENCY
			this.#precision = setup?.precision ?? DEFAULT_PRECISION
			this.#separator = setup?.separator ?? DEFAULT_SEPARATOR
			this.#lang = setup?.lang ?? DEFAULT_LANG
		} catch (error) {
			console.error(error)
		}

		return this
	}
	/** @return {{ currency: number|string, precision: number, separator: string, lang: string }} */
	getProps() {
		return {
			currency: this.#currency,
			precision: this.#precision,
			separator: this.#separator,
			lang: this.#lang,
		}
	}
	/** @return {number} */
	getCurrency() {
		// Checking the total number of arguments
		if (arguments.length > 0)
			throw Error('', {
				cause:
					'There may be an argument. [Allowed arguments]: 0',
			})

		return this.#currency
	}
	/** @return {this} */
	setCurrency(currency) {
		this.#currency = currency
		return this
	}
	/** @return {number} */
	getPrecision() {
		// Checking the total number of arguments
		if (arguments.length > 0)
			throw Error('', {
				cause:
					'There may be an argument. [Allowed arguments]: 0',
			})

		return this.#precision
	}
	/** @return {this} */
	setPrecision(precision) {
		this.#precision = precision
		return this
	}
	/** @return {string} */
	getSeparator() {
		// Checking the total number of arguments
		if (arguments.length > 0)
			throw Error('', {
				cause:
					'There may be an argument. [Allowed arguments]: 0',
			})

		return this.#separator
	}
	/** @return {string} */
	getLang() {
		// Checking the total number of arguments
		if (arguments.length > 0)
			throw Error('', {
				cause:
					'There may be an argument. [Allowed arguments]: 0',
			})

		return this.#lang
	}
}
