var sofia = {
    nombre: "Sofia",
    edad: 81
}

var camilo = {
    nombre: "Camilo",
    edad: 12
}



//RETO: Escribe las funciones necesarias para que nos imprima
//si una persona es mayor o menor de edad
// Sofia es mayor/menos de edad


//Lo definimos como una constante para dar contexto al leer el codigo
//de lo contrario seria un "magic number"
const MAYORIA_DE_EDAD = 18

//Separamos la logica de evaluar si la edad cumple la mayoria legal
//Esta es una funcion que retorna un valor 'true/false'
function esMayorDeEdad( { edad } ) {
    return edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es MAYOR de edad`)
    } else {
        console.log(`${persona.nombre} es MENOR de edad`)
    }
}