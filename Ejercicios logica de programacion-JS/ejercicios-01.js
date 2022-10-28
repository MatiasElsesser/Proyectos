// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function contador(string) {
      if (typeof string == "string") {
            console.log(string.length)
      } else {
            console.log("Dato incorrecto")
      }
}

contador("Me llamo matias") // 15

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function recorte (string, cut){
      if (typeof string === "string" && typeof cut === "number") {
            console.log(string.substring(0,cut))
      } else {
            console.log("Dato incorrecto")
      }
}

recorte("Hola Mundo",4)// Hola

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function convierte (string, separador){
      if (typeof string === "string") {
            console.log(string.split(separador))
      } else {
            console.log("Dato incorrecto")
      }
}
convierte("Hola que tal", " ") //(3) ['Hola', 'que', 'tal']





// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repite (string, r){
      if (typeof string === "string" && typeof r === "number") {
            console.log(string.repeat(r))
      } else {
            console.log("Dato incorrecto")
      }
}

repite("Mati",7) //MatiMatiMatiMatiMatiMatiMati