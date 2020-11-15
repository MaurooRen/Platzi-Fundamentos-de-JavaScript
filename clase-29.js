const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
  
function getCharacter(id, callback) {
    console.log(id)
    const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
    $.get(url, opts, function(person) {
        console.log(`Hola, yo soy ${person.name}`)

        if(callback) {
            callback()
        }
    })
}


// Esto es llamado el Callback Hell/Infierno de los callbacks
getCharacter(1, function() {
    getCharacter(2, function() {
        getCharacter(3, function() {
            getCharacter(4)
        })
    })
})
