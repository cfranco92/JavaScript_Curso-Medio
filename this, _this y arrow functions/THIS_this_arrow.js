class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }

  listarAmigos() {
    const _this = this
    this.amigos.forEach(function (amigo) {
      console.log(`Hola mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
      // console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
    })
  }

  // BIND pasamos el this de la función externa
  listarAmigosBind() {
    this.amigos.forEach(function (amigo) {
      console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
    }.bind(this))
  }

  // ARROW FUNCTION
  listarAmigosArrow() {
    this.amigos.forEach( (amigo) => {
      console.log(`Hola, mi nombres es ${this.nombre} y soy amigo de ${amigo}`)
    })
  }

}
 const cristian = new Persona("Cristian", [ "Jose", "Santiago", "Ramón"])
