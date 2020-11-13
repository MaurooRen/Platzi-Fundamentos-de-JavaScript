class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola ${this.nombre} ${this.apellido} gusto en verte!`)
    }

    soyAlto() {
        return this.height > 1.50 ? "Eres Alto/a" : "Eres Bajo/a"
    }

}




class Desarrollador extends Persona {
    constructor (nombre, apellido, altura, job) {
        super(nombre, apellido, altura) //Llamamos al constructor del objeto padre
        //Los this.key=value, ya no son necesarios por que se estan llamando arriva
        this.job = job
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)

    }
}









// var alvaro = new Desarrollador('Alvaro', 'Carcamo', 1.93)


// alvaro.saludar()

// var mauro = new Persona('Mauricio', 'Rengifo', 1.76)

// mauro.saludar()

// // var alvaro = new Persona('Alvaro', 'Incapie', 1.97)


