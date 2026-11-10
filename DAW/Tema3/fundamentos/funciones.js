// FUNCION 1
// Funcion declarativa
function sumar(a, b = 0) {
  return a + b
}
// llamada a la funcion
let suma = sumar(2, 3) // 5
console.log(suma)

// FUNCION 2
// Funcion expresiva de tipo flecha
const sumaFlecha = (a, b = 0) => a + b
// llamada a la funcion
console.log(sumaFlecha(2, 3))

// FUNCION 3
// Las funciones son valores: se pasan como argumento (callbacks)
function sumarTodos(limite, accion) {
  let resultado = 0
  for (let i = 0; i < limite; i++) {
    resultado += accion(i)
  }
  return resultado
}
let resultado = sumarTodos(3, (i) => {
  return i
})
console.log(resultado)
