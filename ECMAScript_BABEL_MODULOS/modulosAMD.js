// triangle.js
define('triangle', function () {
  return function triangle(base = 0, height = 0) {
    return base * height / 2
  }
})

// otroarchivo.js
require('./triangle.js', function (triangle) {
  const base = 5
  const heght = 7
  console.log(`Él área de un tríangulo de base ${base} y altura ${altura} es: ${triangle(base, height)}`)
})
