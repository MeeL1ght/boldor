/*
 * boldor v1.1.0
 * Work with the bolivar and dollar as currencies in your projects.
 * https://github.com/MeeL1ght/boldor
 * Copyright (c) 2022 Moises Reyes <meelight12@gmail.com>
 * MIT Licence
 */

// Base
import Decimal from 'decimal.js-light'

// Schemas
import {
	DEFAULT_CURRENCY,
	DEFAULT_PRECISION,
	DEFAULT_SEPARATOR,
	DEFAULT_LANG,
} from './src/config/setup.js'

import { Separators } from './src/schemas/separators.js'
import { BoldorError } from './src/schemas/error/boldor-error.js'

// Utils
import { utils } from './src/utils/index.js'

// Validations
import { verify } from './src/validations/index.js'

export { Separators }

/** The class represents a currency.
 * Currencies => (bolivar & dollar).
 */
export default class Boldor {
	/** @type {number} @private */
	#currency

	/** @type {number} @private */
	#precision

	/** @type {Separators|Array<string>} @private */
	#separators

	/** @type {string} @private */
	#lang

	/**
	 * Create a price.
	 * @constructor
	 * @param {object} setup
	 * @param {number} setup.currency
	 * @param {number} setup.precision
	 * @param {Array<string>|Separators} setup.separators
	 * @param {string} setup.lang
	 */
	constructor(
		setup = {
			currency: DEFAULT_CURRENCY,
			precision: DEFAULT_PRECISION,
			separators: [DEFAULT_SEPARATOR, DEFAULT_SEPARATOR],
			lang: DEFAULT_LANG,
		},
	) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1) verify.catchErrorsTotalArguments()

		const propNames = Object.keys(setup)
		const { currency, precision, separators, lang } = setup

		// [*] Validations
		if (!verify.areValidPropertyNames(propNames))
			verify.catchErrorsPropertyNames(propNames)

		if (utils.hasProp(setup, 'currency'))
			if (!verify.isValidCurrency(currency))
				verify.catchCurrencyErrors(currency)

		if (utils.hasProp(setup, 'precision'))
			if (!verify.isValidPrecision(precision))
				verify.catchPrecisionErrors(precision)

		if (utils.hasProp(setup, 'separators'))
			if (!verify.areValidSeparators(separators))
				verify.catchSeparatorsErrors(separators)

		if (utils.hasProp(setup, 'lang'))
			if (!verify.isValidLang(lang))
				verify.catchLangErrors(lang)

		try {
			this.#currency = +new Decimal(
				currency ?? DEFAULT_CURRENCY,
			)

			this.#precision = precision ?? DEFAULT_PRECISION

			if (Array.isArray(separators))
				this.#separators = separators ?? [
					DEFAULT_SEPARATOR,
					DEFAULT_SEPARATOR,
				]

			if (separators instanceof Separators)
				this.#separators = new Separators([
					separators.first,
					separators.second,
				])

			this.#lang = lang ?? DEFAULT_LANG

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Configure property settings
	 * @param {object} props
	 * @param {number} props.currency
	 * @param {number} props.precision
	 * @param {Array<string>|Separators} props.separators
	 * @param {string} props.lang
	 * @return {Boldor}
	 */
	setup(
		props = {
			currency: this.#currency,
			precision: this.#precision,
			separators: this.#separators,
			lang: this.#lang,
		},
	) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1) verify.catchErrorsTotalArguments()

		const propNames = Object.keys(props)
		let { currency, precision, separators, lang } = props

		// [*] Validations
		if (!verify.areValidPropertyNames(propNames))
			verify.catchErrorsPropertyNames(propNames)

		if (utils.hasProp(props, 'currency'))
			if (!verify.isValidCurrency(currency))
				verify.catchCurrencyErrors(currency)

		if (utils.hasProp(props, 'precision'))
			if (!verify.isValidPrecision(precision))
				verify.catchPrecisionErrors(precision)

		if (utils.hasProp(props, 'separators'))
			if (!verify.areValidSeparators(separators))
				verify.catchSeparatorsErrors(separators)

		if (utils.hasProp(props, 'lang'))
			if (!verify.isValidLang(lang))
				verify.catchLangErrors(lang)

		try {
			this.#currency = +new Decimal(currency ?? this.#currency)
			this.#precision = precision ??= this.#precision

			if (Array.isArray(separators))
				this.#separators = separators ?? this.#separators

			if (separators instanceof Separators)
				this.#separators =
					new Separators([
						separators.first,
						separators.second,
					]) ?? this.#separators

			this.#lang = lang ??= this.#lang

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/** @return {number} */
	get currency() {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS !== 0) verify.catchErrorsTotalArguments()

		try {
			return this.#currency
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * @param {number} currency
	 * @return {Boldor}
	 */
	setCurrency(currency = this.#currency) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1) verify.catchErrorsTotalArguments()

		if (!verify.isValidCurrency(currency))
			verify.catchCurrencyErrors(currency)

		try {
			this.#currency = +new Decimal(currency ?? this.#currency)

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/** @return {number} */
	get precision() {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS !== 0) verify.catchErrorsTotalArguments()

		try {
			return this.#precision
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * @param {number} precision
	 * @return {Boldor}
	 */
	setPrecision(precision = this.#precision) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1) verify.catchErrorsTotalArguments()

		if (!verify.isValidPrecision(precision))
			verify.catchPrecisionErrors(precision)

		try {
			this.#precision = precision ?? this.#precision

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/** @return {Array<string>|Separators} */
	get separators() {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS !== 0) verify.catchErrorsTotalArguments()

		try {
			return this.#separators
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * @param {Array<string>|Separators} separators
	 * @return {Boldor}
	 * */
	setSeparators(separators = this.#separators) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1) verify.catchErrorsTotalArguments()

		if (!verify.isValidSeparator(separators))
			verify.catchSeparatorErrors(separators)

		try {
			if (Array.isArray(separators))
				this.#separators =
					[separators[0], separators[1]] ?? this.#separators

			if (separators instanceof Separators)
				this.#separators =
					new Separators(separators) ?? this.#separators

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/** @return {string} */
	get lang() {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS !== 0) verify.catchErrorsTotalArguments()

		try {
			return this.#lang
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * @param {string} lang
	 * @return {Boldor}
	 */
	setLang(lang = this.#lang) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1) verify.catchErrorsTotalArguments()

		if (!verify.isValidLang(separators))
			verify.catchLangErrors(separators)

		try {
			this.#lang = lang ?? this.#lang

			return this
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

		if (TOTAL_ARGS > 1) verify.catchErrorsTotalArguments()

		if (!verify.isValidCurrency(currency))
			verify.catchCurrencyErrors(currency)

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
	 * @return {Boldor}
	 */
	subtract(currency = 0) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1) verify.catchErrorsTotalArguments()

		if (!verify.isValidCurrency(currency))
			verify.catchCurrencyErrors(currency)

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
	 * @return {Boldor}
	 */
	multiply(currency = 1) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1) verify.catchErrorsTotalArguments()

		if (!verify.isValidCurrency(currency))
			verify.catchCurrencyErrors(currency)

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
	 * @return {Boldor}
	 */
	divide(currency = 1) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1) verify.catchErrorsTotalArguments()

		if (!verify.isValidCurrency(currency))
			verify.catchCurrencyErrors(currency)

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
	 * Number module
	 * @param {number} [currency=1]
	 * @return {Boldor}
	 */
	modulo(currency = 1) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1) verify.catchErrorsTotalArguments()

		if (!verify.isValidCurrency(currency))
			verify.catchCurrencyErrors(currency)

		if (currency === 0) throw ErrorHandler.divisionByZero()

		try {
			if (
				TOTAL_ARGS === 0 ||
				(TOTAL_ARGS === 1 && currency === 1)
			) {
				return this
			}

			let acc = this.#currency
			acc %= +new Decimal(currency)
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
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS !== 0)
			throw new BoldorError().totalInvalidArguments()

		try {
			return isDecimal(this.#currency)
		} catch (error) {
			console.error(error)
		}
	}
	getProps() {
		return {
			currency: this.#currency,
			precision: this.#precision,
			separators: this.#separators,
			lang: this.#lang,
		}
	}
	/**
	 * Convert and get number
	 * @return {number} */
	val() {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS !== 0) verify.catchErrorsTotalArguments()

		try {
			return +this.#currency
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * @param {string} [type='string']
	 * @return {string}
	 */
	/* format(type = 'string') {
		if (arguments.length > 1)
			throw new BoldorError().totalInvalidArguments()

		if (!utils.isValidDataType(type, 'string'))
			throw ErrorHandler.invalid('data type', 'string')

		const allowedValues = ['number', 'string', 'str']
		type = type.toLowerCase()

		if (!utils.hasValue(allowedValues, type))
			throw ErrorHandler.invalid('value', allowedValues)

		try {
			//const getFormat = new Decimal(this.#currency).toFixed(
			//this.#precision,
			//)

			// PENDIENTE, HACER EL REEMPLAZO DEL SEPARADOR
			const currencyStr = utils.addSeparators({
				currency: this.#currency,
				precision: this.#precision,
				separators: this.#separators,
			})

			const [, ...allowedStringValues] = allowedValues

			if (utils.hasValue(allowedStringValues, type))
				return currencyStr

			return currencyStr
		} catch (error) {
			console.error(error)
		}
	} */
	/**
	 * Determines whether the value is a number
	 * @param {string|number} value
	 * @return {boolean}
	 */
	static isNumber(value) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS !== 1) verify.catchErrorsTotalArguments()

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
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS !== 1) verify.catchErrorsTotalArguments()

		try {
			return isDecimal(value)
		} catch (error) {
			console.error(error)
		}
	}
}
