class Persona { //Inicializamos la clase
    constructor(nombre, apellido, altura){ //Generamos el constructor de la clase
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        const {nombre, apellido} = this //Desestructuramos nuestro objeto
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn) {
            fn(nombre, apellido, false) //false se le pasa como parametro
        }
    }
    soyAlto() {
        const { nombre, altura } = this
        altura > 1.50 ? console.log(`Haz crecido mucho ${nombre}`) : console.log(`Estas chaparro/a ${nombre}`)
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura, trabajo) {
        super(nombre, apellido, altura)
        this.trabajo = trabajo 
    }
    saludar(fn) {
        const { nombre, apellido, trabajo } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy ${trabajo}`)
        //Si se reconoce que se paso una funcion como parametro a la funcion Saludar
        //osea, si fn existe en este contexto -> ejecutar fn con los siguentes parametros
        if(fn) { // Si no existe fn esto no se ejecura
            fn(nombre, apellido, trabajo, true)
        }    
    }
}


//Aqui el 'true' proviene el que se le paso como parametro en la funcion saludar
function responderSaludo(nombre, apellido, trabajo, esDev) {
    console.log(`-Buenos dias ${nombre} ${apellido}`)
    if(esDev) {
        console.log(`-Ah mira, no sabia que eras ${trabajo}`)
    }
}



var mauro = new Persona("Mauricio", "Rengifo", 1.76)
var andrea = new Persona("Andrea", "Nunez", 1.46)
var sophia = new Desarrollador("Sophia", "Rodriguez", 1.56, "Front-end")



mauro.saludar()
sophia.saludar(responderSaludo)