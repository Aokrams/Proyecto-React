import axios from "axios";
const baseURL = "http://127.0.0.1:8080"

const usuariaAdd = async ()=>{

    const rest = await axios.get(baseURL + '/usuaria/Save', usuaria)
    console.log(rest);
    return rest.data;
}

export { usuariaAdd }
