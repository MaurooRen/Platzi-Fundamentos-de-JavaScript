//RETO: Crear clase Animal, y las respectivas funciones que te permitan: clsificar
//saludar, y conocer los trucos que sabe

function Animal(nombre, edad, tipo, trucos, habitat) {
    this.nombre = nombre
    this.edad = edad
    this.tipo = tipo
    this.trucos = trucos
    this.habitat = habitat
}

//Creacion de objeto con el prototipe Animal
var scott = new Animal('Scott', 16, 'perro', ['sentarse', 'buscar', 'traer la pelota'], 'domestico');
var negra = new Animal('Negra', 5, 'gato', [], 'domestico')
var lucas = new Animal('Lucas', 11, 'pato', [], 'silvestre')

//RETO: Crear una saludar
//Scott es un perro muy lindo

Animal.prototype.saludar = function() {
    console.log(`${this.nombre} es un ${this.tipo} muy lindo!!`)
}

// scott.saludar()
// negra.saludar()


//RETO: Crear funcion que diga los trucos que sabe hacer
Animal.prototype.conocerTrucos = function() {
    if(this.trucos.length > 0)
    {
        // console.log(`${this.nombre} sabe esto(s) trucos: ${this.trucos}`)
        console.log(`${this.nombre} sabe esto(s) trucos:`)
        for(var i = 0; this.trucos.length > i; i++) {
            console.log(`- this.trucos[i]`)
        }
    } else {
        console.log(`${this.nombre} NO sabe trucos actualmente`)
    }
}

// scott.saludar()
// negra.saludar()



//RETO: Crear la funcion que indique si es domestico o no como Arrow function


//FUNCION ORIGINAL QUE SI FUNCIONA
Animal.prototype.soyDomestico = function() {
    return this.habitat == 'domestico'
}

//LA QUE NO
Animal.prototype.soyDomestico = () => {
    return this.habitat == 'domestico'
}