setTimeout(function callback() {
  console.log('A');
}, 0)

console.log('B')

// EJEMPLO CUELLO DE BOTELLA
setTimeout(function callback() {
  console.log('A');
}, 1000)

for (var i = 0; i < 99999999; i++)

console.log('B')
