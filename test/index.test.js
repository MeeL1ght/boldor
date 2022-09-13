import Boldor from './../boldor.mjs'

// (!) Run with nodemon script
const boldor = new Boldor({
	precision: 3,
  currency: 12
})

console.clear()

console.log(boldor.getProps())
