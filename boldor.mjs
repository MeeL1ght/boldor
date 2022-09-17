/*
 * boldor v0.1.5
 * Work with the bolivar and dollar as currencies in your projects.
 * https://github.com/MeeL1ght/boldor
 * Copyright (c) 2022 Moises Reyes <meelight12@gmail.com>
 * MIT Licence
 */

// Base
import Decimal from 'decimal.js-light'

// Setup
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

// Utils
import { isValidDataType } from './src/utils/is-valid-data-type.js'
import { hasValue } from './src/utils/has-value.js'
import { isNotOnTheSecondList } from './src/utils/is-not-on-the-second-list.js'

/** The class represents a currency.
 * Currencies => (bolivar & dollar).
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
	 * @param {number} [setup.currency=DEFAULT_CURRENCY]
	 * @param {number} [setup.precision=DEFAULT_PRECISION]
	 * @param {string} [setup.separator=DEFAULT_SEPARATOR]
	 * @param {string} [setup.lang=DEFAULT_LANG]
	 * @return {Boldor}
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
			throw ErrorHandler.totalInvalidArguments(0, 1)

		const propNames = Object.keys(setup)

		// Checking if the object's properties are valid
		if (isNotOnTheSecondList(propNames, ALLOWED_PROPS_NAMES))
			throw ErrorHandler.invalid(
				'property',
				ALLOWED_PROPS_NAMES,
			)

		// currency validation
		if (!isValidDataType(setup.currency, ['number']))
			throw ErrorHandler.invalid('data type', 'number')
		// precision validation
		if (setup?.precision) {
			if (!isValidDataType(setup.precision, ['number']))
				throw ErrorHandler.invalid('data type', 'number')

			if (setup.precision < 0 || setup.precision > 12)
				throw ErrorHandler.valueOutOfRange(1, 12)
		}
		// separator validation
		if (setup?.separator) {
			if (!isValidDataType(setup.separator, ['string']))
				throw ErrorHandler.invalid('data type', 'string')

			if (!hasValue(ALLOWED_SEPARATOR_VALUES, setup.separator))
				throw ErrorHandler.invalid(
					'value',
					ALLOWED_SEPARATOR_VALUES,
				)
		}
		// lang validation
		if (setup?.lang) {
			if (!isValidDataType(setup.lang, ['string']))
				throw ErrorHandler.invalid('data type', 'string')

			setup.lang = setup.lang.toLowerCase()

			if (!hasValue(ALLOWED_LANG_VALUES, setup.lang))
				throw ErrorHandler.invalid(
					'value',
					ALLOWED_LANG_VALUES,
				)
		}

		try {
			this.#currency =
				+new Decimal(setup?.currency) ?? DEFAULT_CURRENCY
			this.#precision = setup?.precision ?? DEFAULT_PRECISION
			this.#separator = setup?.separator ?? DEFAULT_SEPARATOR
			this.#lang = setup?.lang ?? DEFAULT_LANG

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/** @return {number} */
	get currency() {
		if (arguments.length !== 0)
			throw ErrorHandler.totalInvalidArguments(0, 0)

		try {
			return this.#currency
		} catch (error) {
			console.error(error)
		}
	}
	/** @param {number} currency */
	set currency(currency) {
		if (arguments.length !== 1)
			throw ErrorHandler.totalInvalidArguments(1, 1)

		if (!isValidDataType(currency, ['number']))
			throw ErrorHandler.invalid('data type', 'number')

		try {
			this.#currency = +new Decimal(currency)
		} catch (error) {
			console.error(error)
		}
	}
	/** @return {number} */
	get precision() {
		if (arguments.length !== 0)
			throw ErrorHandler.totalInvalidArguments(0, 0)

		try {
			return this.#precision
		} catch (error) {
			console.error(error)
		}
	}
	/** @param {number} precision */
	set precision(precision) {
		if (arguments.length !== 1)
			throw ErrorHandler.totalInvalidArguments(1, 1)

		if (!isValidDataType(precision, ['number']))
			throw ErrorHandler.invalid('data type', 'number')

		if (precision < 0 || precision > 12)
			throw ErrorHandler.valueOutOfRange(1, 12)

		try {
			this.#precision = precision
		} catch (error) {
			console.error(error)
		}
	}
	/** @return {string} */
	get separator() {
		if (arguments.length !== 0)
			throw ErrorHandler.totalInvalidArguments(0, 0)

		try {
			return this.#separator
		} catch (error) {
			console.error(error)
		}
	}
	/** @param {string} separator */
	set separator(separator) {
		if (arguments.length !== 1)
			throw ErrorHandler.totalInvalidArguments(1, 1)

		if (!isValidDataType(separator, ['string']))
			throw ErrorHandler.invalid('data type', 'string')

		if (!hasValue(ALLOWED_SEPARATOR_VALUES, separator))
			throw ErrorHandler.invalid(
				'value',
				ALLOWED_SEPARATOR_VALUES,
			)

		try {
			this.#separator = separator
		} catch (error) {
			console.error(error)
		}
	}
	/** @return {string} */
	get lang() {
		if (arguments.length !== 0)
			throw ErrorHandler.totalInvalidArguments(0, 0)

		try {
			return this.#lang
		} catch (error) {
			console.error(error)
		}
	}
	/** @param {string} lang */
	set lang(lang) {
		if (arguments.length !== 1)
			throw ErrorHandler.totalInvalidArguments(1, 1)

		if (!isValidDataType(lang, ['string']))
			throw ErrorHandler.invalid('data type', 'string')

		lang = lang.toLowerCase()

		if (!hasValue(ALLOWED_LANG_VALUES, lang.toLowerCase()))
			throw ErrorHandler.invalid('value', ALLOWED_LANG_VALUES)

		try {
			this.#lang = lang
		} catch (error) {
			console.error(error)
		}
	}
	/** @return {{ currency: number, precision: number, separator: string, lang: string }} */
	getProps() {
		return {
			currency: this.#currency,
			precision: this.#precision,
			separator: this.#separator,
			lang: this.#lang,
		}
	}
	/**
	 * Add number
	 * @param {number} [currency=0]
	 * @returns {Boldor}
	 */
	add(currency = 0) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1)
			throw ErrorHandler.totalInvalidArguments(0, 1)

		if (!isValidDataType(currency, ['number']))
			throw ErrorHandler.invalid('data type', 'number')

		try {
			if (TOTAL_ARGS === 0) return this

			let acc = this.#currency
			acc += +new Decimal(currency)
			this.#currency = acc

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Subtract number
	 * @param {number} [currency=0]
	 * @returns {Boldor}
	 */
	subtract(currency = 0) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1)
			throw ErrorHandler.totalInvalidArguments(0, 1)

		if (!isValidDataType(currency, ['number']))
			throw ErrorHandler.invalid('data type', 'number')

		try {
			if (TOTAL_ARGS === 0) return this

			let acc = this.#currency
			acc -= +new Decimal(currency)
			this.#currency = acc

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Multiply number
	 * @param {number} [currency=1]
	 * @returns {Boldor}
	 */
	multiply(currency = 1) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1)
			throw ErrorHandler.totalInvalidArguments(0, 1)

		if (!isValidDataType(currency, ['number']))
			throw ErrorHandler.invalid('data type', 'number')

		try {
			if (TOTAL_ARGS === 0) return this

			let acc = this.#currency
			acc *= +new Decimal(currency)
			this.#currency = acc

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Divide number
	 * @param {number} [currency=1]
	 * @returns {Boldor}
	 */
	divide(currency = 1) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1)
			throw ErrorHandler.totalInvalidArguments(0, 1)

		if (!isValidDataType(currency, ['number']))
			throw ErrorHandler.invalid('data type', 'number')

		if (currency === 0) throw ErrorHandler.divisionByZero()

		try {
			if (
				TOTAL_ARGS === 0 ||
				(TOTAL_ARGS === 1 && currency === 1)
			) {
				return this
			}

			let acc = this.#currency
			acc /= +new Decimal(currency)
			this.#currency = acc

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Convert and get number
	 * @return {number} */
	val() {
		if (arguments.length !== 0)
			throw ErrorHandler.totalInvalidArguments(0, 0)

		try {
			return +this.#currency
		} catch (error) {
			console.error(error)
		}
	}
}
