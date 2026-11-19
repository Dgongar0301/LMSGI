function numeroPromedio(numeros){
    let numero = numeros[0];
    let posicion = 0;
    let suma = 0;
    let promedio = 0;

    for (let i = 1; i < numeros.length; i++) {
        suma += numeros[i];
    }

    promedio = suma / numeros.length;

    return promedio;
}

console.log(numeroPromedio([4, 9, 2, 7]));