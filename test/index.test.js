import Boldor from './../boldor.mjs'

console.clear()

// (!) Run with nodemon script
const boldor = new Boldor({
	currency: 2,
})

const prices = [2, 2, 2, 2]

console.log(boldor.add(prices).val()) // 10
