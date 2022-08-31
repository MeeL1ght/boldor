console.clear()

import Boldor from './src/boldor.js'

const boldor = new Boldor({
  currency: 12,
  decimals: 5,
  separator: ',',
  lang: 'en'
})

console.log(boldor)
