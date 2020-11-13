var pete = {
    nombre: "Peter",
    apellido: "Davidson",
    edad: 30
}

var valeria = {
    nombre: "Valeria",
    apellido: "Gonzales",
    edad: 16
}


const MAYORIA_DE_EDAD = 18

// function esMayorDeEdad(persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// Convertimos la funcion en anonima
// var esMayorDeEdad = function(persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// Remplazamos 'function' por una flecha '=>'
// var esMayorDeEdad = (persona) => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }


// Arrow Function
var esMayorDeEdad = ( { edad } ) => edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona) == true) {
        console.log(`${persona.nombre} es MAYOR de edad.`)
    } else {
        console.log(`${persona.nombre} es MENOR de edad.`)
    }
}

imprimirSiEsMayorDeEdad(pete);

//RETO: Escribir la funcion eeMenorDeEdad como arrow function 
//y que esta retorne la negacion a la llamada de esMayorDeEdad

var esMenorDeEdad = persona => !esMayorDeEdad(persona)