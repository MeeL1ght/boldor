/**
 * Determines whether a property of an object exists
 * @param {object} instance
 * @param {string} [propName='']
 * @return {boolean}
 */
export const hasProp = (instance, propName = '') =>
	Object.hasOwn(instance, propName)
