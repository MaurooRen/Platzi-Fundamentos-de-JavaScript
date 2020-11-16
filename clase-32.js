const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
  
function getCharacter(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
        $
            .get(url, opts, function(data){
                resolve(data)
            })
            .fail(() => reject(id))
    })

}

function onError(id) {
    console.log(`Hubo un error al obtener le personaje ${id}`)
}

let ids = [1, 2, 3, 4, 5, 6, 7]

// let promesas = ids.map(function(id) {
//     return getCharacter(id)
// })

let promesas = ids.map(id => getCharacter(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)


// getCharacter(1)
//     .then((person1) => {
//         console.log(`El personaje 1 es: ${person1.name}`)
//         return getCharacter(2)
//     })
//     .then((person2) => {
//         console.log(`El personaje 2 es: ${person2.name}`)
//         return getCharacter(3)
//     })
//     .then((person3) => {
//         console.log(`El personaje 3 es: ${person3.name}`)
//         return getCharacter(4)
//     })
//     .then((person4) => {
//         console.log(`El personaje 4 es: ${person4.name}`)
//     })
//     .catch((id) => {
//         console.log(onError)
//     })



// // Esto es llamado el Callback Hell/Infierno de los callbacks
// getCharacter(1, function(person) {
//     console.log(`Hola, yo soy ${person.name}`)
//     // getCharacter(2, function(person) {
//     //     console.log(`Hola, yo soy ${person.name}`)
//     //     getCharacter(3, function(person) {
//     //         console.log(`Hola, yo soy ${person.name}`)
//     //         getCharacter(4, function(person) {
//     //             console.log(`Hola, yo soy ${person.name}`)
//     //         })
//     //     })
//     // })
// })

