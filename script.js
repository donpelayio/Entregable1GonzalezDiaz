const peliculasTodas = ["Volver al futuro 1","Titanic","Rocky 1"];
const peliculasStock = ["Volver al futuro 1","Titanic"];
const peliculasArrendadas = ["Rocky 1"];
let opcion;
let pelicula;

function todasPeliculas() {
    if (peliculasTodas.length === 0) {
        alert("No tenemos películas");
    } else {
        alert("Películas en el catálogo:");
        alert(peliculasTodas.join("\n"));
    }
}

function stockPeliculas() {
    if (peliculasStock.length === 0) {
        alert("No nos quedan películas, vuelve pronto, o no tan pronto...");
    } else {
        alert("Películas disponibles:");
        alert(peliculasStock.join("\n"));
    }
}

function arrendarPelicula() {
    if (peliculasStock.length === 0) {
        alert("No nos quedan películas para arrendar, vuelve luego...o no vuelvas, somos pobres");
    } else {
        pelicula = prompt("Ingresa el nombre de la película que quisieras arrendar:");
        let peliculaEncontrada = false;
        for (let index = 0; index < peliculasStock.length; index++) {
            if (pelicula === peliculasStock[index]) {
                peliculasStock.splice(index, 1);
                peliculasArrendadas.push(pelicula);
                alert("Película arrendada con éxito...");
                peliculaEncontrada = true;
                break;
            }
        }
        if (!peliculaEncontrada) {
            alert("No la tenemos disponible, pregunta por otra");
        }
    }
}

do {
    opcion = parseInt(prompt("Bienvenido al Videoclub Pobre \n Elige tu opción en el menú: \n 1) Ver listado de todas las películas. \n 2) Ver el listado de películas disponibles: \n 3) Arrendar una película"));

    switch (opcion) {
        case 1:
            todasPeliculas();
            break;
        case 2:
            stockPeliculas();
            break;
        case 3:
            arrendarPelicula();
            break;
    }
} while (opcion !== 0);

