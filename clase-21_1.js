function Persona(name, lastName, age, height) {
    this.name = {
        'firstName': name,
        'lastName': lastName
    }
    this.age = age
    this.fullName = function(){
        return `Full name: ${this.name} ${this.lastName}`
    }
    this.height = height
}

Persona.prototype.nationality = "Colombia" //El uso de prototype nos permite adicionar propiedades a nuestro objeto constructor
//En este caso adicionar nacionalidad a el objeto constructor Persona 


//RETO: Annadir el methodo saludar que nos regresa "Hola Mauricio Rengifo" a el objeto constructor
Persona.prototype.saludar = function() {
    return `Hola ${this.name['firstName']} ${this.name['lastName']} de ${this.nationality}`
}


//RETO: agregar funcion al prototipo Persona que siga si una persona es alta o no si mide mas de 1.50
Persona.prototype.soyAlto = function() {
    debugger
    return this.height > 1.50 ? "Estas alto" : "Estas bajo"
    //Aqui hacemos uso de una condicional con operador terneario: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator 
}




const mauricio = new Persona("Mauricio", "Rengifo", 23, 1.69) //Creamos nuestro Objeto con una nueva/new instancia de nuestro prototipo Persona
//Prototype se podria entender como la creacion de clases con las cuales creamos objetos que tiene dichas 'propiedades'
const camila = new Persona("Camila", "Nunez", 27, 1.45)
const karla = new Persona("Karla", "Marin")



// console.log(mauricio.saludar())
console.log(camila.soyAlto())
// console.log(karla)
