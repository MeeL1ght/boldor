/** The class represents a currency.
 * Currencies => (bolivar & dollar).
 */
export declare class Boldor {
	currency: number
	precision: number
	separator: string
	lang: string

	/**
	 * Create a price.
	 * @constructor
	 * @param {object} [setup={}]
	 * @param {number} [setup.currency=DEFAULT_CURRENCY]
	 * @param {number} [setup.precision=DEFAULT_PRECISION]
	 * @param {string} [setup.separator=DEFAULT_SEPARATOR]
	 * @param {string} [setup.lang=DEFAULT_LANG]
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
	 * @param {object} [props={}]
	 * @param {number} [props.currency=this.#currency]
	 * @param {number} [props.precision=#precision]
	 * @param {string} [props.separator=#separator]
	 * @param {string} [props.lang=this.#lang]
	 * @return {Boldor}
	 */
	setup(
		props: object = {
			currency: DEFAULT_CURRENCY,
			precision: DEFAULT_PRECISION,
			separator: DEFAULT_SEPARATOR,
			lang: DEFAULT_LANG,
		},
	): Boldor

	/** @return {number} */
	get currency(): number

	/** @param {number} currency */
	set currency(currency: number): void

	/** @return {number} */
	get precision(): number

	/** @param {number} precision */
	set precision(precision: number): void

	/** @return {string} */
	get separator(): string

	/** @param {string} separator */
	set separator(separator: string): void

	/** @return {string} */
	get lang(): string

	/** @param {string} lang */
	set lang(lang: string): void

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
	 * Convert and get number
	 * @return {number} */
	val(): number

	/** @return {{ currency: number, precision: number, separator: string, lang: string }} */
	getProps(): object
}

export default Boldor
