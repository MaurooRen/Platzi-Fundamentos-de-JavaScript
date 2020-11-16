const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
  
function getCharacter(id, callback) {
    // console.log(id)
    const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`

    $.get(url, opts, callback).fail(function() {
        console.log(`Ocurrio un error, intenta mas tarde`)
    })
}


// Esto es llamado el Callback Hell/Infierno de los callbacks
getCharacter(1, function(person) {
    console.log(`Hola, yo soy ${person.name}`)
    getCharacter(2, function(person) {
        console.log(`Hola, yo soy ${person.name}`)
        getCharacter(3, function(person) {
            console.log(`Hola, yo soy ${person.name}`)
            getCharacter(4, function(person) {
                console.log(`Hola, yo soy ${person.name}`)
            })
        })
    })
})

