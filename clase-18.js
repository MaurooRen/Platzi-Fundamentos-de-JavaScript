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


//RETO: Usar la funcion .filter para crear un nuevo array
//con las personas que midan mas de 1.50


// Nuestra condicion debe retornar true o false
// a esta condicion se le pasan objetos
const esAlta = persona => {
    return persona.altura > 1.50
}

// Creamos una variable que almacenara un Array que 
// que cumpla con nuestra condicion
// var nombreVariable = nombreArray.filter(condicion)
var personasAltas = personas.filter(esAlta)
// condicion debe de ser una funcion a la cual filter
// le pasa objeto por objeto del Array


//RETO: Usar .filter para obtener Array de mayores de edad

const esMayorDeEdad = ( { edad } ) => edad > 18

var mayoresDeEdad = personas.filter(esMayorDeEdad)


//RETO: Filtrar personas cuya segunda letra del nombre
//sea la letra 'a'


const segundaLetraStr = ( { nombre } ) => {
    return nombre.substring(1,2) == "a"
}

var segundaLetraA = personas.filter(segundaLetraStr)


//RETO: Obtener lista de nombres cuyo nombre tenga mas
//de cinco letras


const nombresLargos = ( { nombre } ) => {
    var nuevoArray = []
    nuevoArray = nombre.split('')
    return nuevoArray.length > 5
}

var masDeCincoLetras = personas.filter(nombresLargos)


//RETO: Encontrar nombres palindromos DE FORMA LARGA

const reconocerPalindromo = ( { nombre } ) => {
    //guardamos nombre original
    var original = nombre 
    //lo convertimos en Array
    var arrayOriginal = original.split("")
    //volteamos el array
    var nuevoArray = []
    for(var i = 0; arrayOriginal.length > i; i++) {
        nuevoArray.push(arrayOriginal[arrayOriginal.length - (i + 1)])
    }
    //corvertimos array en string y quitamos las (,)
    var nombreAlReves = nuevoArray.join('')

    //Evaluamos si son iguales
    if(original == nombreAlReves) {
        return true
    } else {
        return false
    }
}

var palindromos = personas.filter(reconocerPalindromo)



//RETO: Encontrar nombres palindromos DE FORMA CORTA Y QUE TE DEJE DORMIR

const nombresPalindromos = persona => {
    return persona.nombre.split('').reverse().join('') == persona.nombre
}

var encontrarPalindromos = personas.find(nombresPalindromos)