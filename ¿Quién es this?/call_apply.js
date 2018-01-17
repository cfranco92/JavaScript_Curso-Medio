const cristian = {
  nombre: "Cristian",
  apellido: "Franco"
}

function saludar(veces, uppercase) {
  for (let i = 0; i < veces; i++){
    console.log(`Hola ${this.nombre} ${this.apellido}`) // SINO específiciamos quien es this en la función asigna el objeto global, puede ser window
  }
}

saludar.bind(cristian, 3) // --> Esto me retorna una función

// Llamamos la función call para poder utilizar con el contexto enviado
saludar.call(cristian, 3, true)

// Llamamos la función apply, la diferencia es que pasamos los parametros en un arreglo
saludar.apply(cristian, [3, true])

const params = [4, false]
saludar.call(santiago, ...params)
