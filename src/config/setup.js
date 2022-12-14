export const DEFAULT_CURRENCY = 0
export const DEFAULT_PRECISION = 'full'
export const DEFAULT_SEPARATOR = '.'
export const DEFAULT_LANG = 'en'
/** @const {Array<string>} */
export const ALLOWED_SEPARATOR_VALUES = [
  '.',
	',',
	'-',
	'_',
	' ',
	'',
	'none',
]
/** @const {Array<string>} */
export const ALLOWED_LANG_VALUES = [
	'en',
	'en-us',
	'english',
	'es',
	'spanish',
]
/** @const {Array<string>} */
export const ALLOWED_PROPS_NAMES = [
	'currency',
	'precision',
	'separators',
	'lang',
]
/** @constant {RegExp} */
export const PATTERN_SEPARATE_CURRENCY =
	/\B(?=(\d{3})+(?!\d))/g
