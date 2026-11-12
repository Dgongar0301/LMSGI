// Dado un numero entero muestre los numeros impares existentes entre 1 y el numnero dado(sin contar numero dado).
function numerosImpares(numero) {
  let impares = 0

  for (let i = 1; i < numero - 1; i++) {
    if (i % 2 != 0) {
      impares += 1
    }
  }

  return impares
}

console.log(numerosImpares(5))
