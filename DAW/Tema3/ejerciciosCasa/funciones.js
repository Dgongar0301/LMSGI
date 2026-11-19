export function esPrimo(numero) {
  let primos = 0

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      primos += 1
    }
  }

  if(primos === 0) {
    return "El número " + numero + " es primo"
  } else {
    return "El número " + numero + " no es primo"
  }
}

export function esCapicua(numero) {
  let original = numero
  let reverso = 0

  while (numero > 0) {
    let ultimaCifra = numero % 10

    reverso = reverso * 10 + ultimaCifra

    numero = (numero - ultimaCifra) / 10
  }

  if (original === reverso) {
    return "El número " + original + " es capicúa"
  } else {
    return "El número " + original + " no es capicúa"
  }
}

export function contarMultiplos(inicio, fin, divisor) {
  let contador = 0

  for (let i = inicio; i <= fin; i++) {
    if (i % divisor === 0) {
      contador += 1
    }
  }

  return "Entre " + inicio + " y " + fin + " hay " + contador + " múltiplos de " + divisor
}

export function mayorYPosicion(numeros) {
    let mayor = numeros[0];
    let posicion = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
            posicion = i;
        }
    }

    return "El mayor es " + mayor + " y está en la posición " + posicion;
}

export function precioEntradas(numEntradas, precioUnitario, esEstudiante) {
    let total = numEntradas * precioUnitario;

    if (esEstudiante) {
        total = total - (total * 20 / 100);
    }

    if (numEntradas >= 10) {
        total = total - (total * 10 / 100);
    }

    return "Total a pagar por " + numEntradas + " entradas: " + total + " €";
}


// Pruebas