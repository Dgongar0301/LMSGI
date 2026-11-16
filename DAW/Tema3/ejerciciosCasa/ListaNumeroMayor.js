function numeroCapicua(numero) {
  let original = numero
  let reverso = 0

  while (numero > 0) {
    let ultimaCifra = numero % 10

    reverso = reverso * 10 + ultimaCifra

    numero = (numero - ultimaCifra) / 10
  }

  return ultimaCifra
}

console.log(numeroCapicua(1221))
if (numeroCapicua(original === numero)) {
  console.log(`${numero} es un número capicúa.`)
} else {
  console.log(`${numero} no es un número capicúa.`)
}