import { Separators } from './src/schemas/separators.js'

/** The class represents a currency.
 * Currencies => (bolivar & dollar).
 */
export declare class Boldor {
	/** @type {number} @private */
	#currency: number

	/** @type {number} @private */
	#precision: number

	/** @type {Separators|Array<string>} @private */
	#separators: string

	/** @type {string} @private */
	#lang: string

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
		setup: object = {
			currency: DEFAULT_CURRENCY,
			precision: DEFAULT_PRECISION,
			separators: [DEFAULT_SEPARATOR, DEFAULT_SEPARATOR],
			lang: DEFAULT_LANG,
		},
	)

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
		props: object = {
			currency: this.#currency,
			precision: this.#precision,
			separator: this.#separator,
			lang: this.#lang,
		},
	): Boldor

	/** @return {number} */
	get currency(): number

	/** @param {number} currency */
	setCurrency(currency: number): void

	/** @return {number} */
	get precision(): number

	/** @param {number} precision */
	setPrecision(precision: number): void

	/** @return {Array<string>|Separators} */
	get separators(): string

	/**
	 * @param {Array<string>|Separators} separators
	 * @return {Boldor}
	 * */
	setSeparator(separators: Array<string> | Separators): void

	/** @return {string} */
	get lang(): string

	/** @param {string} lang */
	setLang(lang: string): void

	/**
	 * Add number
	 * @param {number} [currency=0]
	 * @return {Boldor}
	 */
	add(currency: number = 0): Boldor

	/**
	 * Subtract number
	 * @param {number} [currency=0]
	 * @return {Boldor}
	 */
	subtract(currency: number = 0): Boldor

	/**
	 * Multiply number
	 * @param {number} [currency=1]
	 * @return {Boldor}
	 */
	multiply(currency: number = 1): Boldor

	/**
	 * Divide number
	 * @param {number} [currency=1]
	 * @return {Boldor}
	 */
	divide(currency: number = 1): Boldor

	/**
	 * Number Module
	 * @param {number} [currency=1]
	 * @return {Boldor}
	 */
	modulo(currency: number = 1): Boldor

	/**
	 * Determines whether the value is a decimal number
	 * @return {boolean}
	 */
	isDecimal(): boolean

	/**
	 * Convert and get number
	 * @return {number} */
	val(): number

	/**
	 * Determines whether the value is a number
	 * @param {string|number} value
	 * @return {boolean}
	 */
	static isNumber(value: string | number): boolean

	/**
	 * Determines whether the value is a decimal number
	 * @param {string|number} value
	 * @return {boolean}
	 */
	static isDecimal(value: string | number): boolean

	/** @return {{ currency: number, precision: number, separators: Array<string>|Separators, lang: string }} */
	getProps(): object
}

export default Boldor
