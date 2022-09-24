import { intPart } from '../src/utils/int-part.js'
import { decimalPart } from '../src/utils/decimal-part.js'
import Boldor from './../boldor.mjs'

console.clear()

// (!) Run with nodemon script
const boldor = new Boldor({
	currency: 120.8881887,
	lang: 'en',
	precision: 2,
	separators: ['.', ','],
})

// SOLUCIONAR PROBLEMA AL MOSTRAR LOS SEPARADORES
console.log(boldor.getProps())
console.log()
console.log(intPart(boldor.currency))
console.log(decimalPart(boldor.currency))
// console.log(boldor.format())