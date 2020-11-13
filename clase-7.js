var mauricio = {
    nombre: "Mauricio",
    apellido: "Rengifo",
    edad: 23
}
var isabell = {
    nombre: "Isabell",
    apellido: "Herz",
    edad: 33
}

function imprimirNombreEnMayusculas(persona) {
    //var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(mauricio)


function imprimirNombreYEdad( { nombre, edad}) {
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} annios`)
}

imprimirNombreYEdad(mauricio)
imprimirNombreYEdad(isabell)
