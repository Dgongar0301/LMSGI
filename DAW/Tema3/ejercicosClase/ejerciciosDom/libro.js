function mostrarTitulo(){
    let titulo = document.getElementById('titulo');
    console.log(titulo.textContent);
}

function seleccionarAutor(){
    let autor = document.querySelector('.autor');
    console.log(autor.textContent);
}

function leerPrecio(){
    let precioText = document.getElementById('precio');
    let precio = Number(precioText.textContent);

    console.log(precio * 1.04);
}

function verImagen(){
    let imagen = document.getElementById('portada');
    console.log(imagen.getAttribute('src'));
    console.log(imagen.getAttribute('alt'));
    
    let enlace = document.getElementById('enlace');
    console.log(enlace.getAttribute('href'));
}

function seleccionarCapitulos(){
    let capitulos = document.querySelectorAll('#capitulos li');
    console.log(capitulos.length)

    capitulos.forEach((capitulo, index) => {
        console.log(index+1 + ' ' + capitulo.textContent);
    });
}

function seleccionarPrimerYUltimoCapitulo(){
    let primercapitulo = document.querySelector('#capitulos li');
    console.log(primercapitulo.textContent);

    let ultimoCapitulo = document.querySelector('li:last-child');
    console.log(ultimoCapitulo.textContent);
}

// Ejecucion de las funciones
mostrarTitulo();
seleccionarAutor();
leerPrecio();
verImagen();
seleccionarCapitulos();
seleccionarPrimerYUltimoCapitulo();