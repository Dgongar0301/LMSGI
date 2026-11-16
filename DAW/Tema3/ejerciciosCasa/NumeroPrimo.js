function numerosPrimos(numero) {
  let primos = 0

  for (let i = 2; i < numero - 1; i++) {
    if (numero % i === 0) {
      primos += 1
    }
  }

  return primos
}

console.log(numero(7))
if (numerosPrimos(numero)) {
  console.log(`${numero} es un número primo.`)
} else {
  console.log(`${numero} no es un número primo.`)
}