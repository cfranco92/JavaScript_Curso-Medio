// Function scope

var miModulo = (function miModulo() {
  var nombre = "Cristian"

  function setNombre(otroNombre) {
    nombre = otroNombre
  }

  function getNombre() {
    return nombre
  }

  return {
    setNombre,
    getNombre
  }
}) ()

miModulo.setNombre("Eric")
console.log(miModulo.getNombre())
