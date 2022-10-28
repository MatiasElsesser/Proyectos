// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invierte = (cadena = "") => {
      if (!cadena) return console.warn("Dato invalido")

      if (cadena.includes(" ")){
            let separa = cadena.split(" ");
            let invierte = separa.reverse(); // metodo de array que invierte el orden del mismo
            let une = invierte.join(" ") // metodo de array que lo une en un string, y recibe de parametro con que queremos que este separado
            return une
      }
      let separa = cadena.split("");
      let invierte = separa.reverse();
      let une = invierte.join("")
      return une
      
}
// console.log(invierte("apurate"))




// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const cuenta = (cadena = "", palabra = "") => {
      if (!cadena) return console.warn("Dato invalido")
      if (!palabra) return console.warn("Dato invalido")

      let contador = 0
      let iterable = cadena.split(" ")
      iterable.forEach(element => {
            if (element === palabra) {
                  contador += 1
            }
      });
      return contador
}
// console.log(cuenta("dale matias apurate porque apurate", "apurate"))





// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = (palabra = "") => {
      if (!palabra) return console.warn("Dato invalido")

      palabra = palabra.toLowerCase()// para que tome de igual manera si son mayus o minus
      let aArray = palabra.split("")
      let reversa = aArray.reverse()
      let unir = reversa.join("")
      // esto podria resumirlo asi : let reverse = palabra.split("").reverse().joint("")
      
      return (palabra === unir)
}
// console.log(palindromo("Salas"))





// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const transformador = (caracteres = "", filtro = "") => {
      if (!caracteres) return console.warn("Dato invalido")
      if (!filtro) return console.warn("Dato invalido")

      let cadena =  caracteres.replaceAll(filtro, "") // este metodo remplaza todas las coincidencias de una misma cadena por el segundo parametro que le demos

      return cadena
}
// console.log(transformador("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))