import Boldor from './../boldor.mjs'

console.clear()

// (!) Run with nodemon script
const boldor = new Boldor({
	currency: 8,
})

console.log(boldor.divide(2).val()) // 4
