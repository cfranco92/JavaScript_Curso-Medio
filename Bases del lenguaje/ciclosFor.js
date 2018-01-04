const nombre = "Cristian";
const dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo"
];

function correr() {
    const min = 5;
    const max = 15;
    //Valor random entre 5 y 15
    return Math.round(Math.random() * (max - min) + min);
}

let totalKms = 0;
const length = dias.length;
for (let i = 0; i < length; i++) {
  conts kms = correr();
  totalKms += kms;
  console.log(`El día ${dias[i]}, ${nombre} corrió ${kms} kms`);
}

const promedioKms = totalKms / length;
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)} kms`)
