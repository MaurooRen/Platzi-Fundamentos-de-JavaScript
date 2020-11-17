//Para poder usar 'axios' debemos instalar la dependencia en nuestro proyecto
const axios = require('axios')
const llamarApi = async(url, llamados = 0) => {
    try {
        const { data } = await axios.get(url)

        console.log(data)
        return data
    } catch(e) {
        if(llamados > 5) {
            return ''
        }
        console.log(e)
        return llamarApi(url, llamados++)
    }
}

llamarApi('https://jsonplaceholder.typicode.com/users')
