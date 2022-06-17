import axios from "axios";

const baseUrl = "http://localhost:3001/notes";
    
const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);

    // return axios.get(baseUrl);  // this line returning promise
}

const create = (newObject) => {
    // return axios.post(baseUrl, newObject);
    const request = axios.post(baseUrl, newObject);
    return request.then(response => response.data);
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => response.data);
    // return axios.put(`${baseUrl}/${id}`, newObject);
}

// creat const to handle export of this module
// https://stackoverflow.com/questions/64816649/warning-assign-object-to-a-variable-before-exporting-as-module-default

const notesService = {
    getAll,
    create,
    update
}
export default notesService;