// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const nroAleatorio = () => console.info(Math.round(Math.random() * 100 + 500))
// nroAleatorio();


// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => {
      if (!numero) return console.warn("Numero invalido")
      if (typeof numero !== "number") return console.error(`El valor ${numero} no es un numero`)

      // Lo solucionamos de manera similar como hicimos con los palindromos
      numero = numero.toString();
      let nroAlReves = numero.split("").reverse().join(""); // aca le puse puntoycoma porque sino me tiraba error de referencia, avergiguar por que

      (numero === nroAlReves) 
            ? console.info(`El numero ${numero} es capicua`) 
            : console.info(`El numero ${numero} NO es capicua`)
}
// capicua(404)





// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = 0) => {
      if(!numero) return console.warn("Dato ingresado invalido")
      if(typeof numero !== "number") return console.error(`${numero} no es un numero`)
      if (numero < 0) return console.warn("El numero ingresado, debe ser positivo")

      let contador = 1;
      for (let i = 1; i <= numero; i++){
            // contador = contador * i;
            contador *= i
      }
      return console.info(`El factorial de ${numero} es ${contador}`)
}
factorial(9)