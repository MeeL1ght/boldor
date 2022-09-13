import Boldor from './../boldor.mjs'
// import { isNumber } from './../src/utils/is-number.js'

// (!) Run with nodemon script
const boldor = new Boldor({
	precision: 3,
  currency: 12
})

console.clear() // Don't remove me please hhhhh
// Output: { currency... }
console.log(boldor.getProps())
