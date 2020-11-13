// Javascript como lenguage no acepta o no maneja el concepto de Clases, como en lenguajes como C++
// Lo que hace JS en cambio es traer a la mesa un concepto llamado prototipos, que no es lo mismo que clases
// Y tampoco tiene la opcion de heredar, pero si existe algo muy similar que es la Herencia Prototipal


function heredaDe(prototipoHijo, prototipoPadre) { // Esta es una funcion que recibe funciones
    var fn = function () {} // Creamos una funcion vacia
    fn.prototype = prototipoPadre.prototype // Hacemos una copia del prototipo del Padre para guardarlo en el protitipo de nuestra funcion vacia
    prototipoHijo.prototype = new fn // De esa forma evitamos acceder directamente a la funcion y no la pizamos
    prototipoHijo.prototype.constructor = prototipoHijo //Asignamos la funcion constructora
    //Si no agregamos la ultima linea se estaria llamando al constructor de prototipo padre
}


function Persona (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}


Persona.prototype.saludar = function() {
    console.log(`Hola ${this.nombre} ${this.apellido} gusto en verte!`)
}

Persona.prototype.soyAlto = function() {
    return this.height > 1.50 ? "Eres Alto/a" : "Eres Bajo/a"
}


function Desarrollador (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}



heredaDe(Desarrollador, Persona)


Desarrollador.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}



var alvaro = new Desarrollador('Alvaro', 'Carcamo', 1.93)


alvaro.saludar()

var mauro = new Persona('Mauricio', 'Rengifo', 1.76)

mauro.saludar()

// var alvaro = new Persona('Alvaro', 'Incapie', 1.97)


Persona.prototype