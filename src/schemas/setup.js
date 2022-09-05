export const DEFAULT_CURRENCY = 0
export const DEFAULT_DECIMALS = 2
export const DEFAULT_SEPARATOR = '.'
export const DEFAULT_LANG = 'en'
/** @const {Array<string>} SEPARATOR_VALUES */
export const ALLOWED_SEPARATOR_VALUES = [
	'',
	' ',
	'.',
	',',
	'-',
	'_',
	'none',
]
/** @const {Array<string>} LANG_VALUES */
export const ALLOWED_LANG_VALUES = [
	'en',
	'english',
	'es',
	'spanish',
]
/** @const {Array<string>} DEFAULT_DATA_TYPES_ALLOWED */
export const DEFAULT_DATA_TYPES_ALLOWED = [
	'number|string',
	'number',
	'string',
	'string',
]
/** @const {Array<string>} ALLOWED_PROPS_NAMES */
export const ALLOWED_PROPS_NAMES = [
	'currency',
	'decimals',
	'separator',
	'lang',
]
export const DEFAULT_PROPS_INFO_MESSAGE =
	`currency => '${DEFAULT_DATA_TYPES_ALLOWED.at(0)}', ` +
	`decimals => '${DEFAULT_DATA_TYPES_ALLOWED.at(1)}', ` +
	`separator => '${DEFAULT_DATA_TYPES_ALLOWED.at(2)}', ` +
	`lang => '${DEFAULT_DATA_TYPES_ALLOWED.at(-1)}'`
export const DEFAULT_ERROR_MESSAGE =
	'Oops, something went wrong!'
