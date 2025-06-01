const preguntas_maximas = 10;
let contador_pregunta = 0;
let respuestas = []

// -- Referencias al HTML --
// Vistas
let menu_inicio = document.getElementById("menu_inicio");
let menu_quiz = document.getElementById("menu_quiz");

// Textos
let numero_pregunta = document.getElementById("numero_pregunta");

// Detecta el click del boton para inicar el quiz
document.getElementById("iniciar_button").addEventListener("click", function(event){
    // Verifica si el usuario ingreso su nombre
    let nombre = document.getElementById("nombre").value;
    if (nombre == ""){
        alert("Por favor, ingresa un nombre de usuario para comenzar el QUIZ!");
        return;
    }
    console.log("Nombre:", nombre);
    iniciar_quiz(nombre)
});

// Detecta el click del boton para salir del quiz
document.getElementById("salir_button").addEventListener("click", function(event){
    // Resetea el input del menu de inicio
    document.getElementById("nombre").value = "";

    // Cambia la vista de la web
    menu_inicio.style.display = "block";
    menu_quiz.style.display = "none";
});

function iniciar_quiz(nombre){
    // Reinicia el contador de preguntas
    contador_pregunta = 1;
    respuestas = []
    numero_pregunta.innerText = "Pregunta " + contador_pregunta + "/10";

    // Cambia la vista de la web
    menu_inicio.style.display = "none";
    menu_quiz.style.display = "block";
}

function responder(button){
    if (contador_pregunta <= preguntas_maximas){
        // Actualiza los datos
        contador_pregunta += 1;
        respuestas.push(button.innerText);

        // Actualiza la interfaz
        numero_pregunta.innerText = "Pregunta " + contador_pregunta + "/" + preguntas_maximas;

        // Debug
        console.log(respuestas);
        console.log(contador_pregunta);

        if (contador_pregunta == preguntas_maximas) {
            // Finaliza el Quiz
        }
    }
}