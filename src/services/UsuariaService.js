import axios from "axios";
const baseURL = "http://127.0.0.1:8080"

const getAll = async ()=>{

    const rest = await axios.get(baseURL + '/usuaria/FindAll')
    console.log(rest);
    return rest.data;
}

export {getAll}