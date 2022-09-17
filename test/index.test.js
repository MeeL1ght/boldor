import Boldor from './../boldor.mjs'

console.clear()

// (!) Run with nodemon script
const boldor = new Boldor({
	currency: 10.123456789,
	lang: 'en',
	precision: 2,
})

boldor.setup({ lang: 'en-us' })

console.log(boldor.getProps())
