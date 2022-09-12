import { getValuesWithDoubleQuotes } from '../utils/get-values-with-double-quotes.js'
import { DEFAULT_DATA_TYPES_ALLOWED } from './setup.js'

const BOLDOR_ERROR = '[BoldorError]'
const DEFAULT_ERROR_MESSAGE = 'There was a problem.'
const DEFAULT_DATA_TYPES_PROPS_MESSAGE =
	`currency => '${DEFAULT_DATA_TYPES_ALLOWED.at(0)}', ` +
	`precision => '${DEFAULT_DATA_TYPES_ALLOWED.at(1)}', ` +
	`separator => '${DEFAULT_DATA_TYPES_ALLOWED.at(2)}', ` +
	`lang => '${DEFAULT_DATA_TYPES_ALLOWED.at(-1)}'`

/**
 * @class
 */
export default class ErrorHandler {
	#message
	#boldorError
	/**
	 * @param {object} setup
	 * @param {string} setup.message
	 * @param {boolean} setup.isChaining
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
	 * @param {{ minArguments: number|null, maxArguments: number|null }}
	 * @return {Error}
	 */
	totalInvalidArguments({ minArguments, maxArguments }) {
		let tempMessage = ''

		if (typeof minArguments !== 'number') minArguments = null
		if (typeof maxArguments !== 'number') maxArguments = null

		if (minArguments === 0 && maxArguments === 0) {
			minArguments = null
			maxArguments = null
		}

		if (
			(minArguments === 0 && maxArguments !== 0) ||
			(minArguments !== 0 && maxArguments !== 0)
		) {
			tempMessage = `[min: ${minArguments}] & [max: ${maxArguments}]`
		} else tempMessage = `[max: ${maxArguments}]`

		const expectedArgumentsMessage = `Expected: ${tempMessage}`

		this.#message = `${
			this.#boldorError
		} Total invalid arguments. ${expectedArgumentsMessage}.`

		return Error(this.#message)
	}
	/**
	 * @param {{ minArguments: number|null, maxArguments: number|null }}
	 * @return {Error}
	 */
	static totalInvalidArguments({
		minArguments,
		maxArguments,
	}) {
		let tempMessage = ''

		if (typeof minArguments !== 'number') minArguments = null
		if (typeof maxArguments !== 'number') maxArguments = null

		if (minArguments === 0 && maxArguments === 0) {
			minArguments = null
			maxArguments = null
		}

		if (
			(minArguments === 0 && maxArguments !== 0) ||
			(minArguments !== 0 && maxArguments !== 0)
		) {
			tempMessage = `[min: ${minArguments}] & [max: ${maxArguments}]`
		} else tempMessage = `[max: ${maxArguments}]`

		const expectedArgumentsMessage = `Expected: ${tempMessage}`
		const message = `${BOLDOR_ERROR} Total invalid arguments. ${expectedArgumentsMessage}.`

		return Error(message)
	}
	/**
	 * @param {Array<string>} propNamesList
	 * @return {Error}
	 */
	invalidProperty(propNamesList) {
		this.#message =
			`${this.#boldorError} There is an invalid property. ` +
			`[Allowed properties]: ${getValuesWithDoubleQuotes(
				propNamesList,
			)}.`

		return Error(this.#message)
	}
	/**
	 * @param {Array<string>} propNamesList
	 * @return {Error}
	 */
	static invalidProperty(propNamesList) {
		const message =
			`${BOLDOR_ERROR} There is an invalid property. ` +
			`[Allowed properties]: ${getValuesWithDoubleQuotes(
				propNamesList,
			)}.`

		return Error(message)
	}
	dataTypeInvalidProperty() {}
	static dataTypeInvalidProperty(propNamesList = []) {
		const finalPropNamesList =
			propNamesList.length === 0
				? DEFAULT_DATA_TYPES_PROPS_MESSAGE
				: getValuesWithDoubleQuotes(propNamesList)

		const message =
			`${BOLDOR_ERROR} The data type of a property is invalid. ` +
			`[Allowed data types]: ${finalPropNamesList}.`

		return Error(message)
	}
}
