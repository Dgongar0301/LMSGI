

function calcularArea(radio){
    const PI = Math.PI; 

    let area;

    area = (PI * radio ** 2);

    return area;
}

console.log(calcularArea(2));
console.log(calcularArea(5));
console.log(calcularArea(8));

function calcularPerimetro(radio){
    const PI = Math.PI; 

    let perimetro;

    perimetro = (2 * PI * radio);

    return perimetro;
}

console.log(calcularPerimetro(2));
console.log(calcularPerimetro(5));
console.log(calcularPerimetro(8));