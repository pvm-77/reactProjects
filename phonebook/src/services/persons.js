import axios from "axios";
const baseUrl = 'http://localhost:3001/api';

const getAll = () => {
    let url='/contacts'
    // send get request to fetch contacts from server and server give a promise
    const request = axios.get(`${baseUrl}${url}`);
    // handle promise 
    return request.then(response => {
        console.log(response.data)
        return response.data

    })
}
const create = (newContactObject) => {
    let url='/addContact'
    const request = axios.post(`${baseUrl}${url}`, newContactObject)
    return request.then(response => {
        console.log(response)
        return response.data

    })
}
const update = () => { }
const deleteContact = (id) => {
    let url='/deleteContact'
    const request = axios.delete(`${baseUrl}${url}/${id}`)
    return request.then(response => {
        console.log(response)
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