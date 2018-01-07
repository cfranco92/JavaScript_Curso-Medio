var nombre = "Cristian"

function saludar(nombre) {
  var nombre = "Alberto"
  for (var i = 0; i < 10; i++) {
    // i es definida globalmente
  }

  for(let j = 0; j < 10; j++){
    // j es definida localmente
  }
  console.log(`Hola ${nombre}`);
}

saludar()  // Toma la variable global
saludar("Eric") // Toma la variable pasada por parametros
console.log(`Hola ${nombre}`); // Toma la variable global
