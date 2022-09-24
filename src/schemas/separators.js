import { SeparatorsError } from './error/separators-error.js'

import {
	isValidSeparator,
	catchSeparatorErrors,
	areValidSeparators,
	catchSeparatorsErrors,
} from '../validations/properties/separator-validation.js'

/**
 * The class represents the separators
 * that are used when displaying a price.
 * @class
 */
export class Separators {
	/** @type {string} @public */
	first

	/** @type {string} @public */
	second

	/**
	 * Create the separators.
	 * @param {Array<string>} separators
	 * @constructor
	 */
	constructor(separators = ['.', '.']) {
		if (arguments.length > 1)
			throw new SeparatorsError().totalInvalidArguments()

		if (!areValidSeparators(separators))
			catchSeparatorsErrors(separators)

		try {
			const [firstSeparator, secondSeparator] = separators

			this.first = firstSeparator ?? '.'
			this.second = secondSeparator ?? '.'

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * Set the separators.
	 * @param {string} separators
	 * @return {Separators}
	 */
	setup(separators = [this.first, this.second]) {
		if (arguments.length > 1)
			throw new SeparatorsError().totalInvalidArguments()

		if (!areValidSeparators(separators))
			catchSeparatorsErrors(separators)

		try {
			const [firstSeparator, secondSeparator] = separators

			this.first = firstSeparator
			this.second = secondSeparator

			return this
		} catch (error) {
			console.error(error)
		}
	}
	/** @return {string} */
	get first() {
		if (arguments.length !== 0)
			throw new SeparatorsError().totalInvalidArguments()

		try {
			return this.first
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * @param {string} firstSeparator
	 * @return {Separators}
	 */
	set first(firstSeparator = this.first) {
		if (arguments.length > 1)
			throw new SeparatorsError().totalInvalidArguments()

		if (!isValidSeparator(firstSeparator))
			catchSeparatorErrors(firstSeparator)

		try {
			this.first = firstSeparator
			return this
		} catch (error) {
			console.error(error)
		}
	}
	/** @return {string} */
	get second() {
		if (arguments.length !== 0)
			throw new SeparatorsError().totalInvalidArguments()

		try {
			return this.second
		} catch (error) {
			console.error(error)
		}
	}
	/**
	 * @param {string} secondSeparator
	 * @return {Separators}
	 */
	set second(secondSeparator = this.second) {
		if (arguments.length > 1)
			throw new SeparatorsError().totalInvalidArguments()

		if (!isValidSeparator(secondSeparator))
			catchSeparatorErrors(secondSeparator)

		try {
			this.second = secondSeparator
			return this
		} catch (error) {
			console.error(error)
		}
	}
	/** @return {Array<string>} */
	get getBoth() {
		if (arguments.length !== 0)
			throw new SeparatorsError().totalInvalidArguments()

		try {
			return [this.first, this.second]
		} catch (error) {
			console.error(error)
		}
	}
}
