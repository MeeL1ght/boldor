import {
	DEFAULT_CURRENCY,
	DEFAULT_DECIMALS,
	DEFAULT_SEPARATOR,
	DEFAULT_LANG,
	ALLOWED_PROPS_NAMES,
	DEFAULT_PROPS_INFO_MESSAGE,
	DEFAULT_ERROR_MESSAGE,
	ALLOWED_SEPARATOR_VALUES,
	ALLOWED_LANG_VALUES,
} from './schemas/setup.js'

import { arePropDataTypesCorrect } from './utils/are-prop-data-types-correct.js'
import { getDataTypes } from './utils/get-data-types.js'
import { getValuesWithDoubleQuotes } from './utils/get-values-with-double-quotes.js'
import { hasValue } from './utils/has-value.js'
import { isNotOnTheSecondList } from './utils/is-not-on-the-second-list.js'

/** The class represents a currency.
 * Currencies => (dollar | bolivar).
 * @class
 */
export default class Boldor {
	// Attributes
	#currency
	#decimals
	#separator
	#lang
	/**
	 * Create a price.
	 * @constructor
	 * @param {object} setup
	 * @param {number} setup.currency
	 * @param {number} setup.decimals
	 * @param {string} setup.separator
	 * @param {string} setup.lang
	 */
	constructor(
		setup = {
			currency: DEFAULT_CURRENCY,
			decimals: DEFAULT_DECIMALS,
			separator: DEFAULT_SEPARATOR,
			lang: DEFAULT_LANG,
		},
	) {
		// Checking the total number of arguments
		if (arguments.length > 1)
			throw new Error(DEFAULT_ERROR_MESSAGE, {
				cause:
					'There is more than one argument. [Allowed arguments]: 1',
			})

		const propNames = Object.keys(setup)
		const dataTypes = getDataTypes(setup)

		// Checking if the data types of the properties are valid
		if (
			!arePropDataTypesCorrect({
				propNames: propNames,
				dataTypes: dataTypes,
			})
		)
			throw new Error(DEFAULT_ERROR_MESSAGE, {
				cause:
					'The data type of a property is invalid. ' +
					`[Allowed data types]: ${DEFAULT_PROPS_INFO_MESSAGE}`,
			})
		// Checking if the object's properties are valid
		if (isNotOnTheSecondList(propNames, ALLOWED_PROPS_NAMES))
			throw new Error(DEFAULT_ERROR_MESSAGE, {
				cause:
					'An invalid property may exist. ' +
					`[Allowed properties]: ${getValuesWithDoubleQuotes(
						ALLOWED_PROPS_NAMES,
					)}`,
			})
		// decimals validation
		if (setup.decimals < 0 || setup.decimals > 12)
			throw new Error(DEFAULT_ERROR_MESSAGE, {
				cause:
					'Incorrect value. ' +
					'[Allowed values]: min => 0; max => 12',
			})
		// separator validation
		if (setup?.separator)
			if (!hasValue(ALLOWED_SEPARATOR_VALUES, setup.separator))
				throw new Error(DEFAULT_ERROR_MESSAGE, {
					cause:
						'Incorrect value. ' +
						`[Allowed values]: ${getValuesWithDoubleQuotes(
							ALLOWED_SEPARATOR_VALUES,
						)}`,
				})
		// lang validation
		if (setup?.lang)
			if (!hasValue(ALLOWED_LANG_VALUES, setup.lang))
				throw new Error(DEFAULT_ERROR_MESSAGE, {
					cause:
						'Incorrect value. ' +
						`[Allowed values]: ${getValuesWithDoubleQuotes(
							ALLOWED_LANG_VALUES,
						)}`,
				})

		try {
			this.#currency = setup?.currency ?? DEFAULT_CURRENCY
			this.#decimals = setup?.decimals ?? DEFAULT_DECIMALS
			this.#separator = setup?.separator ?? DEFAULT_SEPARATOR
			this.#lang = setup?.lang ?? DEFAULT_LANG

			return this
		} catch (error) {
			console.error(error)
		}
	}
	getProps() {
		return {
			currency: this.#currency,
			decimals: this.#decimals,
			separator: this.#separator,
			lang: this.#lang,
		}
	}
	/** @return {number} */
	getCurrency() {
		return this.#currency
	}
	/** @return {this} */
	setCurrency(currency) {
		this.#currency = currency
		return this
	}
	/** @return {number} */
	getDecimals() {
		return this.#decimals
	}
	/** @return {this} */
	setDecimals(decimals) {
		this.#decimals = decimals
		return this
	}
}
