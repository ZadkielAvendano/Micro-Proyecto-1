import { getRandomQuestions, questions } from "./questions.js";

const preguntas_maximas = 10;
let contador_pregunta = 0;
let preguntas = []
let respuestas = []

// -- Referencias al HTML --
// Vistas
let menu_inicio = document.getElementById("menu_inicio");
let menu_quiz = document.getElementById("menu_quiz");
let menu_resultados = document.getElementById("menu_resultados");

// Textos
let numero_pregunta_text = document.getElementById("numero_pregunta");
let puntuacion_text = document.getElementById("puntuacion");
let resultados_text = document.getElementById("resultados");

// Botones
let respuesta_1_button = document.getElementById("respuesta_1_button");
let respuesta_2_button = document.getElementById("respuesta_2_button");
let respuesta_3_button = document.getElementById("respuesta_3_button");
let respuesta_4_button = document.getElementById("respuesta_4_button");

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
    salir_quiz();
});

// Detecta el click del boton para salir del quiz
document.getElementById("continuar_button").addEventListener("click", function(event){
    salir_quiz();
});

// Inicia el Quiz
function iniciar_quiz(nombre){
    // Obtiene las preguntas
    preguntas = getRandomQuestions(questions, preguntas_maximas)

    // Reinicia el contador de preguntas
    contador_pregunta = 1;
    respuestas = []
    numero_pregunta_text.innerText = "Pregunta " + contador_pregunta + "/10";
    realizar_pregunta()

    // Cambia la vista de la web ( QUIZ )
    menu_inicio.style.display = "none";
    menu_quiz.style.display = "block";
    menu_resultados.style.display = "none";
}

// Coloca las opciones de respuesta a los botones
function realizar_pregunta(){
    // Obtiene los datos de la pregunta
    let pregunta = preguntas[contador_pregunta - 1].question;
    let opciones = preguntas[contador_pregunta - 1].options;

    // Actualiza la pregunta en la interfaz
    numero_pregunta_text.innerText = "Pregunta " + contador_pregunta + "/" + preguntas_maximas;
    document.getElementById("pregunta").innerText = pregunta
    
    // Actualiza los botones con las opciones
    respuesta_1_button.innerText = opciones[0]
    respuesta_2_button.innerText = opciones[1]
    respuesta_3_button.innerText = opciones[2]
    respuesta_4_button.innerText = opciones[3]
}

// Evento de escucha para todos los botones de respuesta
document.querySelectorAll("#botones_respuesta button").forEach(button => {
    button.addEventListener("click", () => responder(button));
});

// Funcion que se llama con los botones de las respuestas
function responder(button){
    if (contador_pregunta <= preguntas_maximas){
        // Actualiza los datos
        contador_pregunta += 1;
        respuestas.push(button.innerText);
        
        if (contador_pregunta > preguntas_maximas) {
            // Finaliza el Quiz
            let puntuacion = 0
            for (let index = 0; index < preguntas_maximas; index++) {
                if (preguntas[index].answer == respuestas[index]) {
                    console.log("verdadero");
                    puntuacion += 1;
                }
            }
            // Cambia la vista de la web ( RESULTADOS )
            menu_inicio.style.display = "none";
            menu_quiz.style.display = "none";
            menu_resultados.style.display = "block";
            puntuacion_text.innerText = "Puntuacion: " + puntuacion;
            resultados_text.innerText = preguntas;
        } else {
            // Actualiza la interfaz
            realizar_pregunta()
        }
    }
}

function salir_quiz(){
    // Resetea el input del menu de inicio
    document.getElementById("nombre").value = "";

    // Cambia la vista de la web ( INICIO )
    menu_inicio.style.display = "block";
    menu_quiz.style.display = "none";
    menu_resultados.style.display = "none";
}