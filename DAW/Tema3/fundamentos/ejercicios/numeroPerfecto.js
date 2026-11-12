// Dado un numero entero(parametro de entrrada) calcular si ese numero es perfecto(salida de la funcion).
// un numero es perfecto si la suma de sus divisores naturales(incluido el 1) da su propio numero(codigo de la funcion).

function esNumeroPerfecto(numero) {
  let sumaDivisores = 0

  for (let i = 1; i < numero - 1; i++) {
    if (numero % i === 0) {
      sumaDivisores += i
    }
  }

  return sumaDivisores === numero
}

// Ejemplo de uso:
const numero = 28
if (esNumeroPerfecto(numero)) {
  console.log(`${numero} es un número perfecto.`)
} else {
  console.log(`${numero} no es un número perfecto.`)
}
