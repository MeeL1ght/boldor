import { Separators } from './src/schemas/separators.js'

/** The class represents a currency.
 * Currencies => (bolivar & dollar).
 */
export declare class Boldor {
	/** @type {number} @private */
	#currency: number

	/** @type {number|string} @private */
	#precision: number

	/** @type {Separators|Array<string>} @private */
	#separators: string

	/** @type {string} @private */
	#lang: string

	/**
	 * Create a price.
	 * @constructor
	 * @param {{ currency: number, precision: number|string, separators: Array<string>|Separators, lang: string }} setup
	 */
	constructor(setup: {
		currency: number
		precision: number | string
		separators: Array<string> | Separators
		lang: string
	})

	/**
	 * Configure property settings
	 * @param {{ currency: number, precision: number|string, separators: Array<string>|Separators, lang: string }} props
	 * @return {Boldor}
	 */
	setup(props: {
		currency: number
		precision: number | string
		separators: Array<string> | Separators
		lang: string
	}): Boldor

	/** @return {number} */
	get currency(): number

	/** @param {number} currency */
	setCurrency(currency: number): void

	/** @return {number} */
	get precision(): number

	/** @param {number|string} precision */
	setPrecision(precision: number | string): void

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
	 * Get the currency format
	 * @return {string}
	 */
	format(): string

	/**
	 * Get setup of currency
	 * @return {object} */
	getSetup(): object

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
}

// Optional to configure separator settings
export { Separators }

export default Boldor
