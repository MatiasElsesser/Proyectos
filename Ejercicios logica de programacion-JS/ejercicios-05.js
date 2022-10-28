// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const convertidorBinarioDecimal = (numero = undefined, base = undefined) => {
      if(numero === undefined || base === undefined) return console.warn("Debes ingresar un numero");
      if(typeof numero !== "number" || typeof base !== "number") return console.error("Los parametros ingresados deben ser numeros");

      if(base === 2) {
            return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`); // parseInt recibe un segundo parametro para especificar una base
      }
}

// convertidorBinarioDecimal(100,2)





// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const precioDescuento = (precio = undefined, descuento = 0) => {
      if (precio === undefined) return console.warn("Debes introducir un precio");
      if (!descuento) return console.warn("El articulo no tiene descuento");
      if ((typeof precio !== "number") || (typeof descuento !== "number")) return console.error("Solo se aceptan numeros");
      if (descuento >= 101) return console.error("El descuento maximo es de 100%"); 

      let descontar =  (descuento * precio) / 100;
      let precioFinal = precio - descontar;
      return console.info(`El articulo de valor $${precio}, queda en $${precioFinal} con el descuento de ${descuento}%`)

}
// precioDescuento(1400,10)





// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const edadHastaAhora = (fecha = undefined) => {
      if(fecha === undefined) return console.warm("Debes ingresar una fecha");
      if(!(fecha instanceof Date)) return console.warn("Debes ingresar un texto tipo fecha");

      let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
      aniosEnMilisegundos = 1000 * 60 * 60 * 24 * 365,
      aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMilisegundos);

      return (Math.sign(aniosHumanos === -1))
            ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
            : (Math.sign(aniosHumanos) === 1) 
                  ?console.info(`Han pasado ${Math.abs(aniosHumanos)} años desde el ${fecha.getFullYear()}`)
                  : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}

edadHastaAhora(new Date(2050,5,11))