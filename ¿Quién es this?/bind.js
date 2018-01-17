
class Toggable {
  constructor(elemento) {
    //Inicializar el estado interno
    this.elemento = elemento
    this.elemento.innerHTML = "Off"
    this.activated = false
    this.onClick = this.onClick.bind(this)
    this.elemento.addEventListener('click', this.onClick)
    //this.elemento.addEventListener('click', this.onClick.bind(this))
  }

  onClick(ev) {
    console.log()
    this.activated = !this.activated // El contrario de lo que tenía
    this.toggleText()
  }

  toggleText() {
    // Cambiar el texto
    this.elemento.innerHTML= this.activated ? "On" : "Off"
  }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)
