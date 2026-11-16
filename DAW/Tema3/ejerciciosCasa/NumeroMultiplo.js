function contarMultiplos(inicio, fin, divisor) {
  let contador = 0

  for (let i = inicio; i <= fin; i++) {
    if (i % divisor === 0) {
      contador += 1
    }
  }

  return `Entre ${inicio} y ${fin} hay ${contador} múltiplos de ${divisor}`
}

console.log(contarMultiplos(1, 20, 3))
