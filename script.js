// > <

// cartelera de cine 

const peliculasTodas = ["Volver al futuro 1","Titanic","Rocky 1"];
const peliculasStock = ["Volver al futuro 1","Titanic"];
const peliculasArrendadas = ["Rocky 1"];
let opcion;

function todasPeliculas() {
    if(peliculasTodas.length ===0){
        alert("No tenmos peliculas");
    } else {
        alert("Peliculas en el catalogo");
        alert(peliculasTodas.join("\n"));
    }
}

function stockPeliculas() {
    if(peliculasStock.length ===0){
        alert("No nos quedan peliculas, vuelve pronto, o no tan pronto...");
    } else {
        alert("Peliculas disponibles: ");
        alert(peliculasStock.join("\n"));
    }
}

do {

    opcion = parseInt(prompt("Bienvenido al Videoclub Pobre \n Elige tu opcion en el menu: \n 1) Ver listado de todas las peliculas. \n 2)Ver el listado de peliculas dispoibles: \n 3)Arrendar una pelicula"));

    switch (opcion) {
        case 1:
            todasPeliculas();
            break;
        case 2:
            stockPeliculas();
            break;
        case 3:
            alert("Arrendar una pelicula")
            break;
    };
} while (opcion !==0);
