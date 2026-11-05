// ===== Paso 1: primera instrucción =====
// Muestra en consola el mensaje "¡Hola! Este es mi primer programa en JavaScript"
console.log("¡Hola! Este es mi primer programa en JavaScript");

// ===== Paso 2: variables =====
let alumno = "Lucía"; // Inicializacion de variable
let edad = 18; // inicializacion de variable
// let nombre; // Declaracion e variable sin inicializacion
console.log(alumno, edad); // Muestra en consola el valor de variables
edad = 19; // asignacion de un nuevo valor en la variable edad
console.log("Nueva edad:", edad);
// Se utiliza el operador typeof para conocer el tipo de dato  de las 
// variables 
console.log(typeof alumno, typeof edad);

// ===== Paso 3: constantes =====
const PRECIO_BOCADILLO = 3.5;
const PRECIO_ZUMO = 1.5;
console.log("Bocadillo:", PRECIO_BOCADILLO, "Zumo:", PRECIO_ZUMO);

// ===== Paso 4: tipos de datos =====
const CURSO = "1.º ASIR";
const MATRICULADO = true;
let tutor;
const AULA = null;
console.log(typeof CURSO, typeof edad, typeof MATRICULADO, typeof tutor, typeof AULA);
console.log(typeof 18, typeof "18");

// ===== Paso 5: operadores aritméticos =====
let bocadillos = 2;
let zumos = 1;
const subtotal = bocadillos * PRECIO_BOCADILLO + zumos * PRECIO_ZUMO;
console.log("Subtotal:", subtotal);
console.log(10 + 4 * 2, (10 + 4) * 2);
console.log("Resto de 17 / 5:", 17 % 5, "| 2 elevado a 3:", 2 ** 3);
bocadillos++;
zumos += 2;
console.log("Bocadillos:", bocadillos, "Zumos:", zumos);

// ===== Paso 6: textos y conversiones =====
const SALUDO = "Hola, " + alumno;
console.log(SALUDO);
console.log(`${alumno} tiene ${edad} años y estudia ${CURSO}`);
console.log("5" + 2, "5" * 2, Number("5") + 2);

// ===== Paso 7: comparaciones y operadores lógicos =====
const DINERO = 15;
console.log(DINERO >= subtotal, DINERO < 5);
console.log("5" == 5, "5" === 5, 7 !== 7);
const ES_MAYOR = edad >= 18;
const TIENE_DINERO = DINERO  >= subtotal;
console.log(ES_MAYOR && TIENE_DINERO, ES_MAYOR || false, !MATRICULADO);

// ===== Comprobación final: el ticket de la cafetería =====
const IVA = 0.1;
const TOTAL = subtotal + subtotal * IVA;
const CAMBIO = DINERO - TOTAL;
const ALCANZA = DINERO >= TOTAL;
console.log(`Ticket de ${alumno}: subtotal ${subtotal} €, total con IVA ${TOTAL} €`);
console.log(`¿Le alcanza con ${DINERO} €? ${ALCANZA}. Cambio: ${CAMBIO} €`);