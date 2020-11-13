function Persona (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    //return this //no es necesario ya que esta implicito
}

//RETO: Crear funcion saludar para la clase Persona
//nombreClase.prototype.nombreFuncion = function(){...}
Persona.prototype.saludar = function() {
    console.log(`Hola ${this.nombre} ${this.apellido} gusto en verte!`)
}

//RETO: Crear funcion que me diga si la persona es alta o no
Persona.prototype.analizarAltura = function() {
    if(this.altura > 1.80) {
        console.log(`Que tal el clima alla arriva ${this.nombre}?`)
    } else {
        console.log(`${this.nombre} estas mas bien chaparro!`)
    }
}


var mauro = new Persona('Mauricio', 'Rengifo', 1.76)
var alvaro = new Persona('Alvaro', 'Incapie', 1.97)
mauro.saludar()