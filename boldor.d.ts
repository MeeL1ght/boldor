/** The class represents a currency.
 * Currencies => (bolivar & dollar).
 */
export declare class Boldor {
	#currency: number
	#precision: number
	#separator: string
	#lang: string

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
		setup: object = {
			currency: DEFAULT_CURRENCY,
			precision: DEFAULT_PRECISION,
			separator: DEFAULT_SEPARATOR,
			lang: DEFAULT_LANG,
		},
	)

	/**
	 * Configure property settings
	 * @param {object} props
	 * @param {number} props.currency
	 * @param {number} props.precision
	 * @param {string} props.separator
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

	/** @return {string} */
	get separator(): string

	/** @param {string} separator */
	setSeparator(separator: string): void

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

	/** @return {{ currency: number, precision: number, separator: string, lang: string }} */
	getProps(): object
}

export default Boldor
