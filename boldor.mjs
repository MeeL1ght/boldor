/*
 * boldor v0.1.6
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
import { hasProp } from './src/utils/has-prop.js'
import { isNumber } from './src/utils/is-number.js'
import { isDecimal } from './src/utils/is-decimal.js'
import { toNumber } from './src/utils/to-number.js'

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
	 * @param {object} [setup={}]
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
				'property name',
				ALLOWED_PROPS_NAMES,
			)

		// currency validation
		if (hasProp(setup, 'currency'))
			if (!isValidDataType(setup.currency, ['number']))
				throw ErrorHandler.invalid('data type', 'number')
		// precision validation
		if (hasProp(setup, 'precision')) {
			if (!isValidDataType(setup.precision, ['number']))
				throw ErrorHandler.invalid('data type', 'number')

			if (isDecimal(setup.precision))
				throw ErrorHandler.errorMessage(
					'Cannot be a decimal value',
				)

			if (setup.precision < 0 || setup.precision > 12)
				throw ErrorHandler.valueOutOfRange(1, 12)
		}
		// separator validation
		if (hasProp(setup, 'separator')) {
			if (!isValidDataType(setup.separator, ['string']))
				throw ErrorHandler.invalid('data type', 'string')

			if (!hasValue(ALLOWED_SEPARATOR_VALUES, setup.separator))
				throw ErrorHandler.invalid(
					'value',
					ALLOWED_SEPARATOR_VALUES,
				)
		}
		// lang validation
		if (hasProp(setup, 'lang')) {
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
			this.#currency = +new Decimal(
				setup.currency ?? DEFAULT_CURRENCY,
			)
			this.#precision = setup?.precision ?? DEFAULT_PRECISION
			this.#separator = setup?.separator ?? DEFAULT_SEPARATOR
			this.#lang = setup?.lang ?? DEFAULT_LANG

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Configure property settings
	 * @param {object} [props={}]
	 * @param {number} [props.currency=this.#currency]
	 * @param {number} [props.precision=this.#precision]
	 * @param {string} [props.separator=this.#separator]
	 * @param {string} [props.lang=this.#lang]
	 * @return {Boldor}
	 */
	setup(
		props = {
			currency: this.#currency,
			precision: this.#precision,
			separator: this.#separator,
			lang: this.#lang,
		},
	) {
		// Checking the total number of arguments
		if (arguments.length > 1)
			throw ErrorHandler.totalInvalidArguments(0, 1)

		const propNames = Object.keys(props)

		// Checking if the object's properties are valid
		if (isNotOnTheSecondList(propNames, ALLOWED_PROPS_NAMES))
			throw ErrorHandler.invalid(
				'property name',
				ALLOWED_PROPS_NAMES,
			)

		// currency validation
		if (hasProp(props, 'currency'))
			if (!isValidDataType(props.currency, ['number']))
				throw ErrorHandler.invalid('data type', 'number')
		// precision validation
		if (hasProp(props, 'precision')) {
			if (!isValidDataType(props.precision, ['number']))
				throw ErrorHandler.invalid('data type', 'number')

			if (isDecimal(props.precision))
				throw ErrorHandler.errorMessage(
					'Cannot be a decimal value',
				)

			if (props.precision < 0 || props.precision > 12)
				throw ErrorHandler.valueOutOfRange(1, 12)
		}

		// separator validation
		if (hasProp(props, 'separator')) {
			if (!isValidDataType(props.separator, ['string']))
				throw ErrorHandler.invalid('data type', 'string')

			if (!hasValue(ALLOWED_SEPARATOR_VALUES, props.separator))
				throw ErrorHandler.invalid(
					'value',
					ALLOWED_SEPARATOR_VALUES,
				)
		}
		// lang validation
		if (hasProp(props, 'lang')) {
			if (!isValidDataType(props.lang, ['string']))
				throw ErrorHandler.invalid('data type', 'string')

			props.lang = props.lang.toLowerCase()

			if (!hasValue(ALLOWED_LANG_VALUES, props.lang))
				throw ErrorHandler.invalid(
					'value',
					ALLOWED_LANG_VALUES,
				)
		}

		try {
			this.#currency = +new Decimal(
				props.currency ?? this.#currency,
			)
			this.#precision = props.precision ??= this.#precision
			this.#separator = props.separator ??= this.#separator
			this.#lang = props.lang ??= this.#lang

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
	/**
	 * Add number
	 * @param {number} [currency=0]
	 * @return {Boldor}
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
			acc += toNumber(new Decimal(currency))
			this.#currency = acc

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Subtract number
	 * @param {number} [currency=0]
	 * @return {Boldor}
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
			acc -= toNumber(new Decimal(currency))
			this.#currency = acc

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Multiply number
	 * @param {number} [currency=1]
	 * @return {Boldor}
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
			acc *= toNumber(new Decimal(currency))
			this.#currency = acc

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Divide number
	 * @param {number} [currency=1]
	 * @return {Boldor}
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
			acc /= toNumber(new Decimal(currency))
			this.#currency = acc

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Determines whether the value is a decimal number
	 * @return {boolean}
	 */
	isDecimal() {
		if (arguments.length !== 0)
			throw ErrorHandler.totalInvalidArguments(0, 0)

		try {
			return isDecimal(this.#currency)
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
	 * Convert and get number
	 * @return {number} */
	val() {
		if (arguments.length !== 0)
			throw ErrorHandler.totalInvalidArguments(0, 0)

		try {
			return toNumber(this.#currency)
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Determines whether the value is a number
	 * @param {string|number} value
	 * @return {boolean}
	 */
	static isNumber(value) {
		if (arguments.length !== 1)
			throw ErrorHandler.totalInvalidArguments(1, 1)

		try {
			return isNumber(value)
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Determines whether the value is a decimal number
	 * @param {string|number} value
	 * @return {boolean}
	 */
	static isDecimal(value) {
		if (arguments.length !== 1)
			throw ErrorHandler.totalInvalidArguments(1, 1)

		try {
			return isDecimal(value)
		} catch (error) {
			console.error(error)
		}
	}
}
