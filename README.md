# 🧠💪🏻 Quiz de Programación

---

## Descripción General

Este proyecto es un **Quiz interactivo de programación** diseñado para poner a prueba tus conocimientos en el campo de la informática. Desarrollado con **HTML**, **CSS** y **JavaScript**, ofrece una experiencia de usuario dinámica y responsiva.

El quiz incluye las siguientes funcionalidades principales:

* **Registro de Usuario**: Permite a los usuarios ingresar su nombre antes de comenzar el quiz.
* **Ranking de Puntuaciones**: Muestra una tabla con las 5 mejores puntuaciones guardadas localmente, incluyendo el nombre, puntaje, porcentaje de acierto y fecha.
* **Quiz Interactivo**: Presenta 10 preguntas aleatorias de programación, con un temporizador de 5 minutos para responder. Cada pregunta ofrece cuatro opciones de respuesta.
* **Resultados Detallados**: Al finalizar el quiz (ya sea por tiempo o al responder todas las preguntas), se muestra la puntuación obtenida, el porcentaje de acierto y un desglose de cada pregunta con la respuesta del usuario, la respuesta correcta y una explicación.
* **Persistencia de Datos**: Utiliza `localStorage` para guardar las puntuaciones de los usuarios, permitiendo que el ranking persista entre sesiones.
* **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla, ofreciendo una experiencia consistente en dispositivos móviles y de escritorio.

---

## Estructura del Proyecto

El proyecto se organiza en los siguientes archivos:

* `index.html`: Contiene la estructura principal del quiz, incluyendo las vistas de inicio, quiz y resultados.
* `styles.css`: Define los estilos visuales de la aplicación, garantizando un diseño moderno y atractivo.
* `index.js`: Contiene la lógica principal del quiz, manejando la interacción del usuario, el temporizador, el cálculo de puntuaciones y la gestión del `localStorage`.
* `questions.js`: Exporta un array con todas las preguntas disponibles para el quiz, incluyendo opciones y explicaciones.

---

## Cómo Ejecutar el Proyecto

Para ejecutar este proyecto, solo necesitas un navegador web moderno:

1.  Clona o descarga este repositorio.
2.  Abre el archivo `index.html` en tu navegador.

¡Y listo! Ya puedes empezar a poner a prueba tus conocimientos de programación.

---