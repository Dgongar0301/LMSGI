/**
 * 1. Selecciona todos los productos y muestra cuántos hay.
 */
function seleccionarProductos() {
    let productos = document.querySelectorAll('.producto');
    console.log("Total de productos:", productos.length);
}

/**
 * 2. Muestra cuántos están comprados y cuántos faltan.
 * Para los que faltan puedes usar el selector
 * .producto:not(.comprado).
 */
function contarProductosComprados() {
    let comprados = document.querySelectorAll('.comprado');
    let pendientes = document.querySelectorAll('.producto:not(.comprado)');
    console.log("Comprados:", comprados.length);
    console.log("Pendientes:", pendientes.length);
}

/**
 * 3. Recorre los productos que faltan y muestra el nombre de cada
 * uno.
 */
function productosFaltantes() {
    let pendientes = document.querySelectorAll('.producto:not(.comprado)');
    pendientes.forEach(p => console.log("Falta:", p.textContent))
}

/**
 * 4. Calcula el precio total de la lista sumando el
 * data-precio de todos los productos
 * (lo puedes leer con getAttribute("data-precio")
 * o con dataset.precio). Muestra el total con dos
 * decimales usando toFixed(2).
 */
function calcularLista() {
    let productos = document.querySelectorAll('.producto');
    let total = 0
    productos.forEach(p => { total += Number(p.dataset.precio) })
    console.log("Total lista:", total.toFixed(2))
}

/**
 * 5.Recorre los productos y, cuando encuentres el aceite,
 * muestra si está comprado o no con classList.contains("comprado").
 */
function encontrarAceite() {
    let productos = document.querySelectorAll('.producto');
    productos.forEach(p => {
        if (p.textContent === "Aceite") {
            console.log("Aceite comprado:", p.classList.contains("comprado"))
        }
    })
}

/**
 * Llamada de las funciones
 */

seleccionarProductos();
contarProductosComprados();
productosFaltantes();
calcularLista();
encontrarAceite();