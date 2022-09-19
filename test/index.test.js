import Boldor from './../boldor.mjs'

console.clear()

// (!) Run with nodemon script
const boldor = new Boldor({
	currency: 0.12,
	lang: 'en',
	precision: 4,
})

boldor.setup({
	precision: 3,
})

console.log(boldor.getProps())
