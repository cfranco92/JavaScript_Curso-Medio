function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`)
}

saludar("Cristian", "Franco")

const saludarCristians = saludar.bind(null, "Cristian") // Ell null, es porque no nos importa el contexto

saludarCristians("Alberto")
saludarCristians("Bedoya")
