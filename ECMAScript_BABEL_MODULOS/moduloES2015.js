// square.js
import triangle from 'triangle'

export function area(x) {
  return x * x
}

export function perimeter(x) {
  return 4 * x
}

export function diagonal(x) {
  return triangle.hypotenuse(x, x)
}

// otrarchivo.js

import square from 'square'

const side = 7
console.log(`La diagonal de un cuadrado de ${side} x ${side} mide ${square.diagonal(side)}`)
