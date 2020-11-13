var mauricio = {
    nombre: "Mauricio",
    apellido: "Rengifo",
    edad: 23
}


//El paso de objetos por parametro a una funcion es entendido como
//Paso de parametro como REFERENCIA
//Lo que significa que al acceder al objeto a traves de la funcion este
//es modificado. Ejemplo

//En esta funcion el objeto de pasa como parametro/como referencia
function cumpleanos(persona) {
    //persona.edad = persona.edad + 1
    persona.edad++
    //aqui lo que hacemos es modificar directamente la propiedad "edad"
    //del objeto "persona"
}

cumpleanos(mauricio) // edad: 24


//RETO: Pasar el objeto como REFERENCIA y crear un nuevo objeto para
//no modifical el original

function cambiarNombre(persona) {
    return {
        ...persona, //Aqui estamos replicando las propiedades del objeto original
        nombre: "Alberto Totototo" //Aqui modificamos una en especifico
    }
}


//RETO: Un ejemplo de paso por varlos y explicar lo que ocurre

//En este caso desestructuramos el objeto y pasamos solo el valor edad
function benjaminButton( { edad } ) {
    //aqui modificamos la variable local "edad"
    edad = edad - 2
}
