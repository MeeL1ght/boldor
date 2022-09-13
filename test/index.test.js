import Boldor from './../boldor.mjs'

console.clear()

// (!) Run with nodemon script
const boldor = new Boldor({
	precision: 3,
	currency: 12,
})

// Example
boldor.currency = 25     // => value of currency
boldor.precision = 0    //  => it will have no decimal values
boldor.separator = ' ' //   => whitespace
boldor.lang = 'none'  //    => no currency symbol

console.log(boldor.getProps())
