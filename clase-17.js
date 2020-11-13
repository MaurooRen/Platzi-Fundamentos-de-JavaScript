var valery = {
    nombre: "Valery",
    edad: 19,
    altura: 1.90
}
var andrew = {
    nombre: "Andrew",
    edad: 21,
    altura: 1.50
}
var tomas = {
    nombre: "Tomas",
    edad: 38,
    altura: 1.65
}
var karol = {
    nombre: "Karol",
    edad: 67,
    altura: 1.43
}
var calvin = {
    nombre: "Calvin",
    edad: 57,
    altura: 1.67
}


var nombres = [valery, andrew, tomas, karol, calvin]



for(var i = 0; nombres.length > i; i++) {
    console.log(nombres[i].nombre)
}