/*
 * boldor v0.1.4
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
import { getDataTypes } from './src/utils/get-data-types.js'

/** The class represents a currency.
 * Currencies => (bolivar & dollar).
 * @class
 */
class Boldor {
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
			throw ErrorHandler.totalInvalidArguments(0, 1)

		const propNames = Object.keys(setup)

		// Checking if the object's properties are valid
		if (isNotOnTheSecondList(propNames, ALLOWED_PROPS_NAMES))
			throw ErrorHandler.invalid(
				'property',
				ALLOWED_PROPS_NAMES,
			)

		// currency validation
		if (!isValidDataType(setup.currency, ['number'])) {
			throw ErrorHandler.invalid('data type', 'number')
		}
		// precision validation
		if (setup?.precision) {
			if (!isValidDataType(setup.precision, ['number'])) {
				throw ErrorHandler.invalid('data type', 'number')
			}

			if (setup.precision < 0 || setup.precision > 12)
				throw ErrorHandler.valueOutOfRange(1, 12)
		}
		// separator validation
		if (setup?.separator) {
			if (!isValidDataType(setup.separator, ['string'])) {
				throw ErrorHandler.invalid('data type', 'string')
			}

			if (!hasValue(ALLOWED_SEPARATOR_VALUES, setup.separator))
				throw ErrorHandler.invalid(
					'value',
					ALLOWED_SEPARATOR_VALUES,
				)
		}
		// lang validation
		if (setup?.lang) {
			if (!isValidDataType(setup.lang, ['string'])) {
				throw ErrorHandler.invalid('data type', 'string')
			}

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
	/** @return {number|string} */
	get currency() {
		if (arguments.length !== 0)
			throw ErrorHandler.totalInvalidArguments(0, 0)

		try {
			return this.#currency
		} catch (error) {
			console.error(error)
		}
	}
	// PENDIENTE, CAMBIAR MÉTODO DE HASVALUE POR IS_VALID_DATA_TYPE
	/** @param {number|string} currency */
	set currency(currency) {
		if (arguments.length !== 1)
			throw ErrorHandler.totalInvalidArguments(1, 1)

		const DATA_TYPE_OF_CURRENCY = 'number'

		if (!hasValue(DATA_TYPE_OF_CURRENCY, typeof currency))
			throw ErrorHandler.invalid(
				'data type',
				DATA_TYPE_OF_CURRENCY,
			)

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

		const DATA_TYPE_OF_PRECISION = 'number'

		if (typeof precision !== DATA_TYPE_OF_PRECISION)
			throw ErrorHandler.invalid(
				'data type',
				DATA_TYPE_OF_PRECISION,
			)

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

		const DATA_TYPE_OF_SEPARATOR = 'string'

		if (typeof separator !== DATA_TYPE_OF_SEPARATOR)
			throw ErrorHandler.invalid(
				'data type',
				DATA_TYPE_OF_SEPARATOR,
			)

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

		const DATA_TYPE_OF_LANG = 'string'

		if (typeof lang !== DATA_TYPE_OF_LANG)
			throw ErrorHandler.invalid(
				'data type',
				DATA_TYPE_OF_LANG,
			)

		if (!hasValue(ALLOWED_SEPARATOR_VALUES, lang))
			throw ErrorHandler.invalid(
				'value',
				ALLOWED_SEPARATOR_VALUES,
			)

		try {
			this.#lang = lang
		} catch (error) {
			console.error(error)
		}
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
	/**
	 * Add the numbers
	 * @param {Array<number>} [numbers=[]] numbers
	 * @returns {Boldor}
	 */
	add(numbers = []) {
		const TOTAL_ARGS = arguments.length

		if (TOTAL_ARGS > 1)
			throw ErrorHandler.totalInvalidArguments(0, 1)

		if (!Array.isArray(numbers)) {
			throw ErrorHandler.invalid('data type', 'object')
		} else {
			const ALLOWED_DATA_TYPE = 'number'
			const dataTypes = getDataTypes(numbers)

			for (let index = -1; ++index < dataTypes.length; )
				if (dataTypes[index] !== ALLOWED_DATA_TYPE)
					throw ErrorHandler.invalid(
						'data type',
						'Array<number>',
					)
		}

		try {
			if (TOTAL_ARGS === 0 || numbers.length === 0) return this

			let acc = this.#currency
			for (const number of numbers) acc += +new Decimal(number)
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
	format() {
		if (arguments.length !== 0)
			throw ErrorHandler.totalInvalidArguments(0, 0)

		try {
			return 0
		} catch (error) {
			console.error(error)
		}
	}
}

export default Boldor
