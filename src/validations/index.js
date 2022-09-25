import {
	catchCurrencyErrors,
	isValidCurrency,
} from './properties/currency-validation.js'

import {
	catchPrecisionErrors,
	isValidPrecision,
} from './properties/precision-validation.js'

import {
	catchSeparatorErrors,
	isValidSeparator,
	areValidSeparators,
	catchSeparatorsErrors,
} from './properties/separator-validation.js'

import {
	catchLangErrors,
	isValidLang,
} from './properties/lang-validation.js'

import {
	areValidPropertyNames,
	catchErrorsPropertyNames,
} from './properties/are-valid-property-names.js'

import { catchErrorsTotalArguments } from './properties/total-invalid-arguments.js'

/** @const {object} */
export const verify = {
	isValidCurrency,
	isValidLang,
	isValidPrecision,
	isValidSeparator,
	areValidSeparators, // Array<string>
	catchSeparatorsErrors, // Array<string>
	areValidPropertyNames,
	catchCurrencyErrors,
	catchPrecisionErrors,
	catchSeparatorErrors,
	catchLangErrors,
	catchErrorsPropertyNames,
	catchErrorsTotalArguments,
}
