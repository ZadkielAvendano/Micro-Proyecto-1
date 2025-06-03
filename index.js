import { getRandomQuestions, questions } from "./questions.js";


// -- Valores iniciales de la web --


const clave_datos = "tabla_puntuaciones";
let tabla_puntuaciones = [];

const preguntas_maximas = 10;
let contador_pregunta = 0;
let preguntas = []
let respuestas = []
let tiempoTotal = 300 //5 minutos (300 segundos)
let temporizador; //Para guardar el tiempo actual.
let nombre = "";
let puntuacion = 0;

// Actualiza la tabla de puntuaciones
load_data()


// -- Referencias al HTML --


// Vistas
const menu_inicio = document.getElementById("menu_inicio");
const menu_quiz = document.getElementById("menu_quiz");
const menu_resultados = document.getElementById("menu_resultados");

// Textos
const numero_pregunta_text = document.getElementById("numero_pregunta");
const puntuacion_text = document.getElementById("puntuacion");
const resultados_text = document.getElementById("resultados");
const nombre_text = document.getElementById("nombre");
const temporizador_text = document.getElementById("temporizador");
const pregunta_text = document.getElementById("pregunta");

// Contenedores
const detalle_resultados_container = document.getElementById("detalle_resultados_container");

// Botones
const iniciar_button = document.getElementById("iniciar_button");
const salir_button = document.getElementById("salir_button");
const continuar_button = document.getElementById("continuar_button");

const respuesta_1_button = document.getElementById("respuesta_1_button");
const respuesta_2_button = document.getElementById("respuesta_2_button");
const respuesta_3_button = document.getElementById("respuesta_3_button");
const respuesta_4_button = document.getElementById("respuesta_4_button");


// -- Event Listener --


// Detecta el click del boton para iniciar el quiz
iniciar_button.addEventListener("click", function(event){
    // Verifica si el usuario ingreso su nombre
    nombre = nombre_text.value;
    if (nombre == ""){
        alert("Por favor, ingresa un nombre de usuario para comenzar el QUIZ!");
        return;
    }
    console.log("Nombre:", nombre);
    iniciar_quiz()
});

// Detecta el click del boton para salir del quiz
salir_button.addEventListener("click", function(event){
    
    if(temporizador){
        clearInterval(temporizador);
    }

    // Resetea el input del menu de inicio
    nombre_text.value = "";

    // Cambia la vista de la web
    salir_quiz();
});

// Detecta el click del boton para salir del quiz
continuar_button.addEventListener("click", function(event){
    salir_quiz();
});

// Evento de escucha para todos los botones de respuesta
document.querySelectorAll("#botones_respuesta button").forEach(button => {
    button.addEventListener("click", () => responder(button));
});


// -- Funciones de las vistas --


// Inicia el Quiz
function iniciar_quiz(){
    // Obtiene las preguntas
    preguntas = getRandomQuestions(questions, preguntas_maximas)

    // Reinicia los valores del QUIZ
    contador_pregunta = 1;
    puntuacion = 0;
    respuestas = []
    tiempoTotal = 300;
    numero_pregunta.innerText = "Pregunta " + contador_pregunta + "/10";

    temporizador = setInterval(actualizarTemporizador,1000);
    actualizarTemporizador();

    // Cambia la vista de la web
    numero_pregunta_text.innerText = "Pregunta " + contador_pregunta + "/10";
    realizar_pregunta()

    // Cambia la vista de la web ( QUIZ )
    menu_inicio.style.display = "none";
    menu_quiz.style.display = "block";
    menu_resultados.style.display = "none";
}

// Muestra la ventana de resultados
function mostrar_resultados(){
    // Finaliza el temporizador
    clearInterval(temporizador);

    // Calcula la puntuacion del QUIZ y los resultados
    let detalleHtml = "";

    for (let index = 0; index < preguntas.length; index++) {
        const preguntaActual = preguntas[index];
        const respuestaUsuario = respuestas[index];

        let esCorrectaEstaPregunta = false;
        if (respuestaUsuario !== undefined && preguntaActual.answer === respuestaUsuario) {
            puntuacion += 1; // 1 punto por respuesta correcta
            esCorrectaEstaPregunta = true;
        }

        detalleHtml += `<div class="resultado-pregunta">`;
        detalleHtml += `<p class="pregunta-texto"><strong>Pregunta ${index + 1}:</strong> ${preguntaActual.question}</p>`;

        if (respuestaUsuario !== undefined) {
            detalleHtml += `<p><strong>Tu respuesta:</strong> <span class="respuesta-usuario ${esCorrectaEstaPregunta ? 'correcta' : 'incorrecta'}">${respuestaUsuario}</span></p>`;
            if (!esCorrectaEstaPregunta) {
                detalleHtml += `<p class="respuesta-correcta-texto"><strong>Respuesta correcta:</strong> ${preguntaActual.answer}</p>`;
            }
        } else {
            detalleHtml += `<p><strong>Tu respuesta:</strong> <span class="respuesta-usuario incorrecta">No respondida</span></p>`;
            detalleHtml += `<p class="respuesta-correcta-texto"><strong>Respuesta correcta:</strong> ${preguntaActual.answer}</p>`;
        }
        detalleHtml += `<p class="respuesta-correcta-texto"><strong>Explicacion:</strong> ${preguntaActual.explanation}</p>`
        detalleHtml += `</div>`;
    }

    // Actualiza el contenedor de resultados
    detalle_resultados_container.innerHTML = detalleHtml;

    // Muestra el porcentaje de acierto y preguntas acertadas
    puntuacion_text.innerText = "Puntuación: " + puntuacion;
    const porcentaje = Math.round((puntuacion/preguntas_maximas)*100);
    resultados_text.innerText = `Respondiste ${puntuacion} de ${preguntas_maximas} correctamente.
    Porcentaje de acierto: ${porcentaje}%`;

    // Cambia la vista de la web ( RESULTADOS )
    menu_inicio.style.display = "none";
    menu_quiz.style.display = "none";
    menu_resultados.style.display = "block";

    // Guardar resultados
    save_data()
}

// Vuelve al menu principal y finaliza el QUIZ
function salir_quiz(){
    // Resetea el input del menu de inicio
    nombre_text.value = "";

    // Finaliza el temporizador
    clearInterval(temporizador);

    // Cambia la vista de la web ( INICIO )
    menu_inicio.style.display = "block";
    menu_quiz.style.display = "none";
    menu_resultados.style.display = "none";
}


// -- Logica de la WEB --


// Coloca las opciones de respuesta a los botones
function realizar_pregunta(){
    // Obtiene los datos de la pregunta
    const pregunta = preguntas[contador_pregunta - 1].question;
    const opciones = preguntas[contador_pregunta - 1].options;

    // Actualiza la pregunta en la interfaz
    numero_pregunta_text.innerText = "Pregunta " + contador_pregunta + "/" + preguntas_maximas;
    pregunta_text.innerText = pregunta
    
    // Actualiza los botones con las opciones
    respuesta_1_button.innerText = opciones[0]
    respuesta_2_button.innerText = opciones[1]
    respuesta_3_button.innerText = opciones[2]
    respuesta_4_button.innerText = opciones[3]

    // Quitar clases de colores antes de la siguiente pregunta
    const botones = document.querySelectorAll("#botones_respuesta button");
    botones.forEach(btn => {
        btn.classList.remove("correct-answer", "incorrect-answer", "remaining-answer");
    });
}

// Funcion que se llama con los botones de las respuestas
function responder(button){
    if (contador_pregunta <= preguntas_maximas){
        // Obtener la respuesta correcta
        const respuestaCorrecta = preguntas[contador_pregunta - 1].answer;
        const respuestaSeleccionada = button.innerText;
        
        // Verificar si la respuesta es correcta
        const esCorrecta = respuestaSeleccionada === respuestaCorrecta;
        
        // Aplicar clase según si es correcta o no
        if (!esCorrecta) {
            button.classList.add("incorrect-answer");
        }
            
        // También resaltar la respuesta correcta en verde y desactiva los botones
        const botones = document.querySelectorAll("#botones_respuesta button");
        botones.forEach(btn => {
            if (btn.innerText === respuestaCorrecta) {
                btn.classList.add("correct-answer");
            } else {
                btn.classList.add("remaining-answer");
            }
        });
        
        // Esperar un momento antes de continuar para que el usuario vea los colores
        setTimeout(() => {
            // Actualizar los datos
            contador_pregunta += 1;
            respuestas.push(respuestaSeleccionada);
            
            if (contador_pregunta > preguntas_maximas) {
                mostrar_resultados();
            } else {
                // Actualiza la interfaz
                realizar_pregunta();
            }
        }, 1000); // 1 segundo de delay
    }
}

// Actualiza el temporizador del QUIZ
function actualizarTemporizador(){
    const minutos = Math.floor(tiempoTotal / 60);
    const segundos = tiempoTotal % 60;

    const tiempoFormateado = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    temporizador_text.innerText = tiempoFormateado;

    if(tiempoTotal == 0){
        mostrar_resultados();
    }else if(tiempoTotal <= 30){
        temporizador_text.style.color = "#f54230";
        tiempoTotal--;
    }else{
        tiempoTotal--;
    }
}


// -- Local Storage --

function load_data(){
    // Actualiza la lista de puntuaciones totales
    let datos_guardados = localStorage.getItem(clave_datos);
    tabla_puntuaciones = datos_guardados ? JSON.parse(datos_guardados) : [];
    console.log(`Puntuaciones cargadas: ${JSON.stringify(tabla_puntuaciones, null, 2)}`);

    // Actualiza la tabla de puntuaciones con las 5 mas altas
    const tbody = document.querySelector(".ranking_table tbody");
    if(tbody){
        tbody.innerHTML = "";
        // Ordenar puntuaciones de mayor a menor
        const puntuacionesOrdenadas = [...tabla_puntuaciones].sort((a,b) => b.puntaje - a.puntaje);
    
        // Mostrar solo las 5 mejores
        const mejoresPuntuaciones = puntuacionesOrdenadas.slice(0, 5);
        
        mejoresPuntuaciones.forEach(puntuacion => {
            const tr = document.createElement("tr");

            // Nombre
            const tdNombre = document.createElement('td');
            tdNombre.textContent = puntuacion.nombre;
            tr.appendChild(tdNombre);
            
            // Puntaje
            const tdPuntaje = document.createElement("td");
            tdPuntaje.textContent = puntuacion.puntaje;
            tr.appendChild(tdPuntaje);
            
            // Porcentaje
            const tdPorcentaje = document.createElement("td");
            const porcentaje = Math.round((puntuacion.puntaje/preguntas_maximas)*100);
            tdPorcentaje.textContent = `${porcentaje}%`;
            tr.appendChild(tdPorcentaje);

            // Fecha
            const tdFecha = document.createElement("td");
            tdFecha.textContent = puntuacion.fecha;
            tr.appendChild(tdFecha);

            tbody.appendChild(tr);
        });
    }else{
        console.error("No se encontró el tbody de la tabla");
    }
}

function save_data(){
    // Crea el objeto con los datos de la partida ( Nombre - Puntuacion - Fecha )
    let partida = {"nombre": nombre, "puntaje": puntuacion, "fecha": new Date().toLocaleDateString("es-ES")};
    tabla_puntuaciones.push(partida);
    localStorage.setItem(clave_datos, JSON.stringify(tabla_puntuaciones));
    load_data() // Actualiza la interfaz con la nueva tabla de clasificacion
}