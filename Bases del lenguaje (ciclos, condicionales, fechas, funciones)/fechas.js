const nacimiento = new Date(1992, 7, 26)

const hoy = new Date() // Sino le pasamos parametros, javascript lo toma como el día de hoy

const tiempo = hoy - nacimiento // el valor es en mili segundos

const tiempoSegundos = tiempo / 1000

const tiempoMin = tiempoSegundos / 60

const tiempoHora = tiempoMin / 60

const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())

const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
]

console.log(diasSemana[proximo.getDay()])
