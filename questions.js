export const questions = [
  {
    id: 1,
    question: "¿Qué lenguaje se ejecuta directamente en el navegador?",
    options: ["Java", "Python", "JavaScript", "C#"],
    answer: "JavaScript",
    explanation: "JavaScript es el único lenguaje diseñado para ejecutarse en navegadores web."
  },
  {
    id: 2,
    question: "¿Qué significa CSS?",
    options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets",
    explanation: "CSS controla el diseño y estilo visual de las páginas web."
  },
  {
    id: 3,
    question: "¿Qué método convierte un JSON string a un objeto JavaScript?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
    answer: "JSON.parse()",
    explanation: "JSON.parse() transforma una cadena JSON en un objeto manipulable."
  },
  {
    id: 4,
    question: "¿Qué etiqueta HTML crea un enlace?",
    options: ["< link >", "< a >", "< href >", "< url >"],
    answer: "< a >",
    explanation: "La etiqueta < a > con el atributo 'href' define hipervínculos."
  },
  {
    id: 5,
    question: "¿Qué operador devuelve el resto de una división?",
    options: ["%", "/", "*", "//"],
    answer: "%",
    explanation: "El operador módulo (%) devuelve el resto de una división."
  },
  {
    id: 6,
    question: "¿Qué estructura repite un bloque de código mientras se cumpla una condición?",
    options: ["if", "for", "while", "switch"],
    answer: "while",
    explanation: "El bucle 'while' ejecuta código mientras la condición sea verdadera."
  },
  {
    id: 7,
    question: "¿Qué tipo de dato NO existe en JavaScript?",
    options: ["string", "boolean", "integer", "object"],
    answer: "integer",
    explanation: "JavaScript usa 'number' para todos los valores numéricos."
  },
  {
    id: 8,
    question: "¿Qué palabra clave declara una variable en ES6?",
    options: ["var", "let", "const", "Todas las anteriores"],
    answer: "Todas las anteriores",
    explanation: "ES6 introdujo 'let' y 'const', pero 'var' sigue siendo válido."
  },
  {
    id: 9,
    question: "¿Qué función detiene la ejecución de un bucle?",
    options: ["exit()", "break", "stop()", "return"],
    answer: "break",
    explanation: "'break' termina inmediatamente el bucle actual."
  },
  {
    id: 10,
    question: "¿Qué método añade un elemento al final de un array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
    explanation: "push() agrega elementos al final del array."
  },
  {
    id: 11,
    question: "¿Qué selector CSS apunta a un elemento con id='header'?",
    options: [".header", "#header", "header", "*header"],
    answer: "#header",
    explanation: "El símbolo # selecciona elementos por su ID."
  },
  {
    id: 12,
    question: "¿Qué evento se dispara al hacer clic en un elemento?",
    options: ["onhover", "onclick", "onload", "onchange"],
    answer: "onclick",
    explanation: "onclick detecta clicks del mouse."
  },
  {
    id: 13,
    question: "¿Qué propiedad devuelve la longitud de un string?",
    options: [".size", ".length", ".count", ".index"],
    answer: ".length",
    explanation: "La propiedad .length existe en strings y arrays."
  },
  {
    id: 14,
    question: "¿Qué paradigma usa clases y herencia?",
    options: ["Funcional", "OOP", "Procedural", "Declarativo"],
    answer: "OOP",
    explanation: "La Programación Orientada a Objetos (OOP) usa estos conceptos."
  },
  {
    id: 15,
    question: "¿Qué método transforma un array en un string?",
    options: ["toString()", "join()", "split()", "parse()"],
    answer: "join()",
    explanation: "join() une elementos del array en un string, con separador opcional."
  },
  {
    id: 16,
    question: "¿Qué símbolo comenta una línea en JavaScript?",
    options: ["//", "/*", "#", "--"],
    answer: "//",
    explanation: "// comenta una sola línea; /* */ para múltiples líneas."
  },
  {
    id: 17,
    question: "¿Qué objeto representa la ventana del navegador?",
    options: ["document", "window", "navigator", "screen"],
    answer: "window",
    explanation: "El objeto global 'window' representa la ventana del navegador."
  },
  {
    id: 18,
    question: "¿Qué método previene el comportamiento por defecto de un evento?",
    options: ["event.stop()", "event.preventDefault()", "event.cancel()", "event.block()"],
    answer: "event.preventDefault()",
    explanation: "Este método evita acciones predeterminadas como enviar formularios."
  },
  {
    id: 19,
    question: "¿Qué método de array devuelve un nuevo array con los elementos que cumplen una condición?",
    options: ["filter()", "map()", "reduce()", "find()"],
    answer: "filter()",
    explanation: "filter() crea un nuevo array con elementos que pasan un test."
  },
  {
    id: 20,
    question: "¿Qué atributo HTML se usa para especificar texto alternativo en imágenes?",
    options: ["alt", "title", "src", "description"],
    answer: "alt",
    explanation: "El atributo 'alt' provee texto alternativo para accesibilidad."
  },
  {
    id: 21,
    question: "¿Qué propiedad CSS se usa para cambiar el color de texto?",
    options: ["text-color", "font-color", "color", "text-style"],
    answer: "color",
    explanation: "La propiedad 'color' define el color del texto."
  },
  {
    id: 22,
    question: "¿Qué símbolo se usa para acceder a propiedades de un objeto en JavaScript?",
    options: [".", ":", "- >", "#"],
    answer: ".",
    explanation: "El punto (.) accede a propiedades (ej: objeto.propiedad)."
  },
  {
    id: 23,
    question: "¿Qué declaración NO es válida para crear una variable en JavaScript?",
    options: ["let x = 5;", "var x = 5;", "int x = 5;", "const x = 5;"],
    answer: "int x = 5;",
    explanation: "JavaScript no usa tipos como 'int' en declaraciones."
  },
  {
    id: 24,
    question: "¿Qué método convierte un objeto JavaScript a JSON string?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.encode()", "JSON.toStr()"],
    answer: "JSON.stringify()",
    explanation: "JSON.stringify() convierte objetos a cadenas JSON."
  },
  {
    id: 25,
    question: "¿Qué etiqueta HTML se usa para contenido independiente (como un post)?",
    options: ["< div >", "< span >", "< article >", "< section >"],
    answer: "< article >",
    explanation: "< article > representa contenido autocontenido."
  },
  {
    id: 26,
    question: "¿Qué pseudo-clase CSS selecciona un elemento cuando el cursor está sobre él?",
    options: [":active", ":hover", ":focus", ":over"],
    answer: ":hover",
    explanation: ":hover aplica estilos al pasar el cursor."
  },
  {
    id: 27,
    question: "¿Qué operador verifica igualdad de valor Y tipo en JavaScript?",
    options: ["==", "===", "=", "!=="],
    answer: "===",
    explanation: "=== verifica valor y tipo (igualdad estricta)."
  },
  {
    id: 28,
    question: "¿Qué método elimina el último elemento de un array?",
    options: ["pop()", "shift()", "slice()", "splice()"],
    answer: "pop()",
    explanation: "pop() remueve y devuelve el último elemento."
  },
  {
    id: 29,
    question: "¿Qué propiedad CSS controla el espacio entre elementos?",
    options: ["padding", "margin", "spacing", "gap"],
    answer: "margin",
    explanation: "margin define el espacio exterior de un elemento."
  },
  {
    id: 30,
    question: "¿Qué evento se dispara cuando un formulario se envía?",
    options: ["onclick", "onsubmit", "onchange", "onload"],
    answer: "onsubmit",
    explanation: "onsubmit ocurre al enviar un formulario."
  },
  {
    id: 31,
    question: "¿Qué método llama a una función después de un tiempo especificado?",
    options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
    answer: "setTimeout()",
    explanation: "setTimeout() ejecuta una función una vez tras un retraso."
  },
  {
    id: 32,
    question: "¿Qué unidad CSS es relativa al tamaño de fuente del elemento?",
    options: ["px", "em", "rem", "vw"],
    answer: "em",
    explanation: "em es relativo al font-size del elemento actual."
  },
  {
    id: 33,
    question: "¿Qué palabra clave crea una función en JavaScript?",
    options: ["function", "def", "func", "method"],
    answer: "function",
    explanation: "'function' declara una función (ej: function nombre() {})."
  },
  {
    id: 34,
    question: "¿Qué propiedad CSS hace elementos invisibles pero manteniendo su espacio?",
    options: ["display: none", "visibility: hidden", "opacity: 0", "hidden: true"],
    answer: "visibility: hidden",
    explanation: "visibility:hidden oculta el elemento pero conserva su espacio."
  },
  {
    id: 35,
    question: "¿Qué estructura de control ejecuta código basado en múltiples condiciones?",
    options: ["if", "for", "switch", "while"],
    answer: "switch",
    explanation: "switch evalúa una expresión contra múltiples casos."
  },
  {
    id: 36,
    question: "¿Qué selector CSS apunta a todos los elementos < p > dentro de un < div >?",
    options: ["div p", "div  > p", "div + p", "div ~ p"],
    answer: "div p",
    explanation: "div p selecciona todos los < p > descendientes de < div >."
  },
  {
    id: 37,
    question: "¿Qué método une dos o más arrays?",
    options: ["concat()", "merge()", "join()", "push()"],
    answer: "concat()",
    explanation: "concat() devuelve un nuevo array combinado."
  },
  {
    id: 38,
    question: "¿Qué etiqueta HTML muestra texto preformateado (conservando espacios)?",
    options: ["< code >", "< pre >", "< text >", "< format >"],
    answer: "< pre >",
    explanation: "< pre > muestra texto con formato y espacios literal."
  },
  {
    id: 39,
    question: "¿Qué propiedad devuelve el primer elemento que coincide con un selector CSS?",
    options: ["querySelector()", "getElement()", "find()", "select()"],
    answer: "querySelector()",
    explanation: "querySelector() retorna el primer elemento coincidente."
  },
  {
    id: 40,
    question: "¿Qué valor devuelve typeof null en JavaScript?",
    options: ["null", "object", "undefined", "string"],
    answer: "object",
    explanation: "typeof null devuelve 'object' (error histórico de JavaScript)."
  },
  {
    id: 41,
    question: "¿Qué propiedad CSS cambia el tipo de cursor?",
    options: ["cursor", "pointer", "mouse", "hover"],
    answer: "cursor",
    explanation: "cursor define el tipo de cursor (ej: pointer, wait)."
  },
  {
    id: 42,
    question: "¿Qué método convierte un string a número entero?",
    options: ["Number()", "parseInt()", "parseFloat()", "toInteger()"],
    answer: "parseInt()",
    explanation: "parseInt() convierte un string a entero (ej: '10' → 10)."
  },
  {
    id: 43,
    question: "¿Qué etiqueta HTML define metadatos como el título de la página?",
    options: ["< meta >", "< head >", "< title >", "< header >"],
    answer: "< head >",
    explanation: "< head > contiene metadatos como < title > y < meta >."
  },
  {
    id: 44,
    question: "¿Qué operador lógico devuelve true si ambos operandos son true?",
    options: ["||", "&&", "!", "??"],
    answer: "&&",
    explanation: "AND lógico (&&) devuelve true solo si ambos son true."
  },
  {
    id: 45,
    question: "¿Qué pseudo-elemento CSS selecciona la primera línea de un párrafo?",
    options: ["::first-line", "::first-letter", "::line", "::start"],
    answer: "::first-line",
    explanation: "::first-line aplica estilos a la primera línea de texto."
  },
  {
    id: 46,
    question: "¿Qué método devuelve el índice de un elemento en un array?",
    options: ["indexOf()", "findIndex()", "search()", "locate()"],
    answer: "indexOf()",
    explanation: "indexOf() retorna el primer índice donde se encuentra un elemento."
  },
  {
    id: 47,
    question: "¿Qué propiedad CSS establece el grosor del borde?",
    options: ["border-size", "border-width", "border-thickness", "border-style"],
    answer: "border-width",
    explanation: "border-width define el grosor (ej: 1px, 2px)."
  },
  {
    id: 48,
    question: "¿Qué palabra clave se usa para heredar propiedades de una clase?",
    options: ["extends", "inherits", "super", "prototype"],
    answer: "extends",
    explanation: "class Hijo extends Padre {} hereda de otra clase."
  },
  {
    id: 49,
    question: "¿Qué etiqueta HTML crea una lista desordenada?",
    options: ["< ol >", "< ul >", "< li >", "< list >"],
    answer: "< ul >",
    explanation: "< ul > crea listas no numeradas (con < li > para ítems)."
  },
  {
    id: 50,
    question: "¿Qué método ejecuta una función para cada elemento de un array?",
    options: ["map()", "forEach()", "loop()", "iterate()"],
    answer: "forEach()",
    explanation: "forEach() ejecuta una función por cada elemento (sin retorno)."
  }
];

export function getRandomQuestions(questions,totalQuestions){

    if(questions.length == 0){
        console.error("El banco de preguntas está vacío");
        return [];
    }

    const copyQuestions = questions;
    const selectedQuestions = [];

    const questionsToSelect = Math.min(totalQuestions, copyQuestions.length);

    for(let i=0; i< questionsToSelect;i++){
        const randomIndex = Math.floor(Math.random() * copyQuestions.length);
        selectedQuestions.push(copyQuestions[randomIndex]);
        copyQuestions.splice(randomIndex, 1);
    }
    return selectedQuestions;
}

// const preguntasDelQuiz = getRandomQuestions(questions, 10);
// console.log(preguntasDelQuiz); 