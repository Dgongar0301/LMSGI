function precioEntradas(numEntradas, precioUnitario, esEstudiante) {
    let total = numEntradas * precioUnitario;

    if (esEstudiante) {
        total = total - (total * 20 / 100);
    }

    if (numEntradas >= 10) {
        total = total - (total * 10 / 100);
    }

    return `Total a pagar por ${numEntradas} entradas: ${total} €`;
}

console.log(precioEntradas(2, 8, false));