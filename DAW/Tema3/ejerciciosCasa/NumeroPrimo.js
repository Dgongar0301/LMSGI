function numerosPrimos(numero) {
  let primos = 0

  for (let i = 2; i < numero - 1; i++) {
    if (numero % i === 0) {
      primos += 1
    }
  }

  return primos === 0
}

console.log(numerosPrimos(7)) // true
console.log(numerosPrimos(8)) // false
