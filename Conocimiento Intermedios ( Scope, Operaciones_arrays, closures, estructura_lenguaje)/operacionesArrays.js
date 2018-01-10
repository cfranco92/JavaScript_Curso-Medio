
function suma(...numeros) {
  // Método, por cada elemento del array  va ir guardandolo en un acumulador
  // Le pasamos el acumulador y el número
  return numeros.reduce(function (acum, numero) {
    acum += numero
    console.log(numero)
    return  acum
  }, 0) // Cero, inicio del array
}

// function dobles (...numeros) {
//   const resultado = []
//   for (let i = 0; i < numero.length; i++) {
//     resulto.push(numeros[i] * 2)
//   }
//   return resultado
// }

// Map recibe una función que se va a ejecutar por cada uno de los elementos
const dobles = (...numeros) => numeros.map( numero => numero * 2)

const pares = (...numeros) => numeros.filter( numero => numero % 2 == 0)

suma (4, 8, 12, 8954, 7, 9)
dobles(3, 5, 10)
