function numeroCapicua(numero) {
  let original = numero
  let reverso = 0

  while (numero > 0) {
    let ultimaCifra = numero % 10

    reverso = reverso * 10 + ultimaCifra

    numero = (numero - ultimaCifra) / 10
  }

  return original === reverso
}

console.log(numeroCapicua(1221)) // true
console.log(numeroCapicua(1234)) // false