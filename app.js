// Array para almacenar los nombres de los participantes
let participantes = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (participantes.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    participantes.push(nombre);
    input.value = ""; // Limpia el input
    actualizarLista();
}

// Función para actualizar la lista de participantes en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos la lista antes de actualizarla

    participantes.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un solo amigo secreto
function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Debe haber al menos 2 participantes para el sorteo.");
        return;
    }

    // Seleccionar un nombre aleatorio diferente al del usuario
    let indice = Math.floor(Math.random() * participantes.length);
    let amigoSecreto = participantes[indice];

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = 
        `<h2>Tu amigo secreto es: ${amigoSecreto}</h2>`;
}


// Función para mostrar los resultados en la interfaz
function mostrarResultados(asignaciones) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Resultados del Amigo Secreto:</h3>";

    Object.keys(asignaciones).forEach(nombre => {
        resultadoDiv.innerHTML += `<li>${nombre} → ${asignaciones[nombre]}</li>`;
    });
}


// Función para resetear la lista y los resultados
function resetearSorteo() {
    participantes = []; // Vaciar el array de participantes
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en la UI
    document.getElementById("resultado").innerHTML = ""; // Limpiar los resultados en la UI
}
