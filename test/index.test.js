import Boldor from './../boldor.mjs'
import { Separators } from './../src/schemas/separators.js'

console.clear()

// (!) Run with nodemon script
const boldor = new Boldor({
	separators: new Separators([',']),
	currency: 5000,
})

boldor.setup({
	lang: 'es',
})

console.log(boldor.getSetup())
console.log()
console.log(boldor.add(5000).format())
