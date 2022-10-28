// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const detectorDePrimos = (numero = undefined) => {
      if(numero === undefined) return console.warn("Debes ingresar un numero");
      if(typeof numero !== "number") return console.error("El parametro debe ser un numero");
      if(numero === 0) return console.warn("El numero no puede ser 0");
      if(numero === 1) return console.warn("El numero no puede ser 1");
      // math.sign devuelve 1, 0 o -1 dependiendo del signo del numero pasado
      if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");

      // (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0) 
      //       ? console.info(`${numero} NO es un numero primo`)
      //       : console.info(`${numero} es un numero primo`);

      let divisible = false
      for(i = 2; i < numero; i++) {
            if((numero % i) === 0) {
                  divisible = true
                  break
            }
      }
      return (divisible) 
            ? console.info(`El numero ${numero} NO es un numero primo`) 
            : console.info(`El numero ${numero} es un numero primo`)
}
// detectorDePrimos(7)





// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parOImpar = (numero = undefined) => {
      if(numero === undefined) return console.warn("Debes ingresar un numero");
      if(typeof numero !== "number") return console.error("El parametro debe ser un numero");

      (numero % 2 === 0) 
            ? console.info(`${numero} es un numero par`) 
            : console.info(`${numero} es un numero impar`);
}
// parOImpar(50)




// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
// ºF = ºC x 1.8 + 32
// ºC = (ºF-32) ÷ 1.8.

const convertidorDeTemperatura = (grados = undefined, unidad = "") => {
      if(!unidad) return console.warn("Debes especificar una medida de grados");
      if((unidad.toLowerCase() !== "c") && (unidad.toLowerCase() !== "f")) return console.error("La unidad debe ser C o F");
      if(grados === undefined) return console.warn("Debes ingresar una cantidad de grados");

      let temperatura = undefined
      if(unidad.toLowerCase() === "c") {
            temperatura = ((grados * 1.8) + 32) + "°F";
      } else {
            temperatura = ((grados - 32) / 1.8) + "°C";
      }
      return console.info(temperatura)
}

convertidorDeTemperatura(10,"c")