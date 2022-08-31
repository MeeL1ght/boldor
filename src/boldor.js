import {
	DEFAULT_CURRENCY,
	DEFAULT_DECIMALS,
	DEFAULT_SEPARATOR,
	DEFAULT_LANG,
	ALLOWED_KEYS,
} from './setup.js'

import { hasErrorArray } from './utils/hasErrorArray.js'

export default class Boldor {
	constructor(
		setup = {
			currency: DEFAULT_CURRENCY,
			decimals: DEFAULT_DECIMALS,
			separator: DEFAULT_SEPARATOR,
			lang: DEFAULT_LANG,
		},
	) {
		try {
			const keys = Object.keys(setup)
			console.log(
				`Has error ? ${hasErrorArray(keys, ALLOWED_KEYS)}`,
			)

			this.currency = setup.currency ?? DEFAULT_CURRENCY
			this.decimals = setup.decimals ?? DEFAULT_DECIMALS
			this.separator = setup.separator ?? DEFAULT_SEPARATOR
			this.lang = setup.lang ?? DEFAULT_LANG
		} catch (error) {
			console.error(error)
		}
	}
}
