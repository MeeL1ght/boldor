import { getValuesWithDoubleQuotes } from '../utils/get-values-with-double-quotes.js'

const BOLDOR_ERROR = '[BoldorError]'
const DEFAULT_ERROR_MESSAGE = 'There was a problem.'

/** Error Handler */
export default class ErrorHandler {
	// Attributes
	#message
	#boldorError
	/**
	 * @param {object} setup
	 * @param {string} [setup.message=DEFAULT_ERROR_MESSAGE]
	 * @param {boolean} [setup.isChaining=false]
	 */
	constructor(
		setup = {
			message: DEFAULT_ERROR_MESSAGE,
			isChaining: false,
		},
	) {
		if (!setup?.message) {
			setup.message = `${BOLDOR_ERROR} ${DEFAULT_ERROR_MESSAGE}.`
			this.#message = setup.message
		}

		const chaining = setup?.isChaining ?? false
		this.#boldorError = BOLDOR_ERROR
		this.#message = setup.message ?? this.#message

		return chaining ? this : Error(this.#message)
	}
	/**
	 * @param {string} message
	 * @return {Error}
	 */
	throwErrorMessage(message) {
		this.#message =
			`${this.#boldorError} ${message}.` ?? this.#message

		return Error(this.#message)
	}
	/**
	 * @param {string} message
	 * @return {Error}
	 */
	static errorMessage(message) {
		const finalMessage = `${BOLDOR_ERROR} ${(message ??=
			DEFAULT_ERROR_MESSAGE)}.`

		return Error(finalMessage)
	}
	/**
	 * @param {number} min
	 * @param {number} max
	 * @return {Error}
	 */
	totalInvalidArguments(min, max) {
		let tempMessage = ''
		let argumentsMessage = ''

		if (min === 0 && max === 0) {
			argumentsMessage = 'No argument expected'
			tempMessage = ''
		} else {
			if (
				(min === 0 && max !== 0) ||
				(min !== 0 && max !== 0)
			) {
				argumentsMessage = `Expected: ${tempMessage}`
				tempMessage = `[min: ${min}] & [max: ${max}]`
			} else {
				argumentsMessage = `Expected: ${tempMessage}`
				tempMessage = `[max: ${max}]`
			}
		}

		this.#message = `${
			this.#boldorError
		} Total invalid arguments. ${argumentsMessage}${tempMessage}.`

		return Error(this.#message)
	}
	/**
	 * @param {number} min
	 * @param {number} max
	 * @return {Error}
	 */
	static totalInvalidArguments(min, max) {
		let tempMessage = ''
		let argumentsMessage = ''

		if (min === 0 && max === 0) {
			argumentsMessage = 'No argument expected'
			tempMessage = ''
		} else {
			if (
				(min === 0 && max !== 0) ||
				(min !== 0 && max !== 0)
			) {
				argumentsMessage = `Expected: ${tempMessage}`
				tempMessage = `[min: ${min}] & [max: ${max}]`
			} else {
				argumentsMessage = `Expected: ${tempMessage}`
				tempMessage = `[max: ${max}]`
			}
		}

		const message = `${BOLDOR_ERROR} Total invalid arguments. ${argumentsMessage}${tempMessage}.`

		return Error(message)
	}
	/**
	 * @param {string} refName
	 * @param {Array<string>} list
	 * @return {Error}
	 */
	invalid(refName, list) {
		this.#message =
			`${this.#boldorError} The ${refName} is invalid. ` +
			`[Allowed]: ${getValuesWithDoubleQuotes(list)}.`

		return Error(this.#message)
	}
	/**
	 * @param {string} refName
	 * @param {string|Array<string>} list
	 * @return {Error}
	 */
	static invalid(refName, list) {
		const message =
			`${BOLDOR_ERROR} The ${refName} is invalid. ` +
			`[Allowed]: ${getValuesWithDoubleQuotes(list)}.`

		return Error(message)
	}
	/**
	 * @param {number} min
	 * @param {number} max
	 * @return {Error}
	 */
	valueOutOfRange(min, max) {
		this.#message =
			`${this.#boldorError} The value is out of range. ` +
			`[Allowed] => [min: ${min}] & [max: ${max}].`

		return Error(this.#message)
	}
	/**
	 * @param {number} min
	 * @param {number} max
	 * @return {Error}
	 */
	static valueOutOfRange(min, max) {
		const message =
			`${BOLDOR_ERROR} The value is out of range. ` +
			`[Allowed] => [min: ${min}] & [max: ${max}].`

		return Error(message)
	}
	/** @return {Error} */
	divisionByZero() {
		this.#message =
			`${this.#boldorError} Cannot be divided by zero. ` +
			`[Tip] => The divisor must be a nonzero number.`

		return Error(this.#message)
	}
	/** @return {Error} */
	static divisionByZero() {
		const message =
			`${BOLDOR_ERROR} Cannot be divided by zero. ` +
			`[Tip] => The divisor must be a nonzero number.`

		return Error(message)
	}
}
