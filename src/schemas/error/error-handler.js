const DEFAULT_ERROR_MESSAGE = 'Oops! A problem has occurred.'

export class ErrorHandler extends Error {
	message

	constructor(message = DEFAULT_ERROR_MESSAGE) {
		super(message)
		this.message = message

		return this
	}
	/**
	 * @param {string} message
	 * @return {this}
	 */
	throwMessage(message = this.message) {
		return new this.constructor(message)
	}
	/**
	 * @param {string} refName
	 * @return {this}
	 */
	invalid(refName = 'empty') {
		return new this.constructor(`The ${refName} is invalid.`)
	}
	/** @return {this} */
	valueOutOfRange() {
		return new this.constructor('The value is out of range.')
	}
	/** @return {this} */
	divisionByZero() {
		return new this.constructor('Cannot be divided by zero.')
	}
	/** @return {this} */
	totalInvalidArguments() {
		return new this.constructor(
			'The total of the arguments is not valid.',
		)
	}
}
