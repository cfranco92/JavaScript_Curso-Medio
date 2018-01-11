// Funciones que recuerdan el scope
// Devolvemos una función qué toma el scope de la función que la llama.
// Función interna y función externa

function saludarFamilia(apellido) {
  return function saludarMiembroDeFamilia(nombre) {
    console.log(`Hola ${nombre} ${apellido}`);
  }
}

// Lo que primero recibe la función
const saludarGomez = saludarFamilia("Gomez")
const saludarFranco = saludarFamilia("Franco")
const saludarGiraldo = saludarFamilia("Giraldo")

// Lo que recibe la segunda función
 saludarFranco("Cristian")
 saludarGomez("Catalina")
 saludarGiraldo("Julian")

function makePrefixer(prefijo) {
  return function join(palabra) {
    console.log(`${prefijo}${palabra}`);
  }
}

const prefijoRe = makePrefixer("re")
const prefijoIn = makePrefixer("in")

prefijoRe("bueno")
prefijoIn("finito")
