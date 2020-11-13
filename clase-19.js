var valery = {
    nombre: "Valery",
    edad: 12,
    altura: 1.90
}
var andrew = {
    nombre: "Andrew",
    edad: 21,
    altura: 1.50
}
var tomas = {
    nombre: "Tomas",
    edad: 15,
    altura: 1.65
}
var karol = {
    nombre: "Karol",
    edad: 19,
    altura: 1.43
}
var calvin = {
    nombre: "Calvin",
    edad: 57,
    altura: 1.67
}
var ana = { 
    nombre: "ana",
    edad: 12,
    altura: 1.10
}

var personas = [valery, andrew, tomas, karol, calvin, ana]


//Esta funcion tiene el side-effect que nos modifica los objetos originales
//y nos crea otro array con los objetos igualemte modificados
//asi que terminarimos con dos arrays exactamente iguales
const pasarACms = persona => {
    persona.altura *= 100
    return persona
}

//Esta funcion recibe el array original y por cada objeto regresa un objeto
//nuevo y se almacena en el nuevo array
// const convertirACms = persona => {
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }

//Al retornar un solo objeto podemos obviar el return de la siguente forma
const convertirACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var alturaEnCms = personas.map(convertirACms)


//RETO: Usar .map para saber la expectaviva de vida, suponiendo que
//todos vivan hasta 80 annios, pero! agregar esta como un nuevo valor,
//creando un nuevo array de objetos

const PROMEDIO_DE_VEJEZ = 80

const calcularExpetativa = persona => ({
    ...persona,
    tiempoRestante: PROMEDIO_DE_VEJEZ - persona.edad
})

var expectavivaDeVida = personas.map(calcularExpetativa)