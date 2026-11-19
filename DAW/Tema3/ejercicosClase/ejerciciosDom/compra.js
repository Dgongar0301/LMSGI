/**
 * 1. Selecciona todos los productos y muestra cuántos hay.
 */
function seleccionarProductos(){
    const productos = document.querySelectorAll('.producto');
    console.log(`Número de productos: ${productos.length}`);
}

/**
 * 2. Muestra cuántos están comprados y cuántos faltan.
 * Para los que faltan puedes usar el selector
 * .producto:not(.comprado).
 */
function contarProductosComprados(){
    const productosComprados = document.querySelectorAll('.producto.comprado');
    const productosFaltantes = document.querySelectorAll('.producto:not(.comprado)');
    console.log(`Productos comprados: ${productosComprados.length}`);
    console.log(`Productos faltantes: ${productosFaltantes.length}`);
}

/**
 * 3. Recorre los productos que faltan y muestra el nombre de cada
 * uno.
 */
function productosFaltantes(){
    const productosFaltantes = document.querySelectorAll('.producto:not(.comprado)');
    productosFaltantes.forEach(producto => {
        console.log(`Producto faltante: ${producto.textContent}`);
    });
}

/**
 * 4. Calcula el precio total de la lista sumando el
 * data-precio de todos los productos
 * (lo puedes leer con getAttribute("data-precio")
 * o con dataset.precio). Muestra el total con dos
 * decimales usando toFixed(2).
 */
function calcularLista(){
    const productos = document.querySelectorAll('.producto');
    let total = 0;
    productos.forEach(producto => {
        const precio = parseFloat(producto.getAttribute('data-precio'));
        total += precio;
    });
    console.log(`Precio total de la lista: ${total.toFixed(2)}`);
}

/**
 * 5.Recorre los productos y, cuando encuentres el aceite,
 * muestra si está comprado o no con classList.contains("comprado").
 */
function encontrarAceite(){
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        if (producto.textContent.toLowerCase().includes('aceite')) {
            const estaComprado = producto.classList.contains('comprado');
            console.log(`El producto "aceite" ${estaComprado ? 'esta comprado' : 'no esta comprado'}.`);
        }
    });
}



/**
 * Llamada de las funciones
 */

seleccionarProductos();
contarProductosComprados();
productosFaltantes();
calcularLista();
encontrarAceite();