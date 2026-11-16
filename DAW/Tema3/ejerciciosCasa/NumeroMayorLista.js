function mayorYPosicion(numeros) {
    let mayor = numeros[0];
    let posicion = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
            posicion = i;
        }
    }

    return `El mayor es ${mayor} y está en la posición ${posicion}`;
}

console.log(mayorYPosicion([4, 9, 2, 7]));