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

async function obtenerPersonajes() {
    let ids = [1, 2, 3, 4, 5, 6, 7]
    let promesas = ids.map(id => getCharacter(id))
    try {
        let personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch(id) {
        onError(id)
    }

    // Promise
    //     .all(promesas)
    //     .then(personajes => console.log(personajes))
    //     .catch(onError)
}


obtenerPersonajes()