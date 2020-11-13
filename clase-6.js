var mauricio = {
    nombre: "Mauricio",
    apellido: "Rengifo"
}

function imprimirNombreEnMayusculas(objeto) {
    console.log(objeto.nombre.toUpperCase());
}

function imprimirNombreEnMinisculas({ nombre }) {
    console.log(nombre.toLowerCase());
}

imprimirNombreEnMayusculas(mauricio)
imprimirNombreEnMinisculas(mauricio)