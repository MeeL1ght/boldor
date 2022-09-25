import Boldor from './../boldor.mjs'
import { Separators } from './../src/schemas/separators.js'

console.clear()

// (!) Run with nodemon script
const boldor = new Boldor({
	currency: 120000.25,
  precision: 'full',
  separators: new Separators(['.', ',']),
  lang: 'en',
})

console.log(boldor.getProps())
console.log()
console.log(boldor.format())

