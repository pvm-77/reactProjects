import axios from "axios";
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    // send get request to fetch contacts from server and server give a promise
    const request = axios.get(baseUrl);
    // handle promise 
    return request.then(response => {
        return response.data

    })


}

const create = (newContactObject) => {
    const request = axios.post(baseUrl, newContactObject)
    return request.then(response => {
        return response.data

    })
}
const update = () => { }
const deleteContact = (id) => { 
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => {
        return response.data

    }).catch(error => {
        console.log(error)
    }
    )
}
const personsService = {
    getAll,
    create,
    update,
    deleteContact
}
export default personsService;