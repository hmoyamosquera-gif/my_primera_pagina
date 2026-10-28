const entradaNivel = document.getElementById("numero");
const salidaNivel= document.getElementById("respuesta");


entradaNivel.addEventListener("input", function () {
let numero = Number(entradaNivel.value);


if (numero >=23) {

salidaNivel.textContent = "mas abajo";
} else if (numero <=21) {

salidaNivel.textContent = "mas arriba";
} else if (numero =22){

salidaNivel.textContent = "adivinaste";
}

});


const selectPaciones = document.getElementById("paciones");
const salidaOpciones = document.getElementById("opciones");
const imagenPacion = document.getElementById("imagen");

selectPaciones.addEventListener("change", function () {
    let opcion = selectPaciones.value;

    if (opcion === "jugar") {
       salidaOpciones.textContent = "Me encanta pasar el tiempo jugando.";
       imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQf3O1ZX_qb6SSShne5oSghISJkfzp97CXISg5eVeVSw&s";
    }
    else if (opcion === "ver futbol") {
       salidaOpciones.textContent = "Me encanta pasar el tiempo jugando.";
       imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDeclGdGWpbnU3FTvBEH2wRB_6ct-AnyuYnKwv1Nsg2w&s=10";
    }
    else if (opcion === "ver series") {
       salidaOpciones.textContent = "Me encanta ver el mentalista.";
       imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDePleX2nkII96siA46XrXu8W6EiIXdNkWYCU_SoTcg&s=10";
    }
    
    
    
});

const botonMostrar = document.getElementById("mostrar");
const mensajeProfesor = document.getElementById("buen-profesor");

botonMostrar.addEventListener("click", function() {
    mensajeProfesor.style.display = "block";
});

