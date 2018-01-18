// triangle.js

module.exports = function area(base = 0, height = 0) {
  return base * height / 2
}

// otroarchivo.js

const triangle = require('./triangle.js')

const base = 5
const height = 7
console.log(`El área de un tríangulo de base ${base} y altura ${height} es: ${triangle(base, height)}`)
