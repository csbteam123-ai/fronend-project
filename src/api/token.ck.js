import axios from "axios"

export const tokenvfy = (hader) =>{
    return axios.get(`${import.meta.env.VITE_BACKEND_API}api/token/test/ck`,{
        headers:{
            tokensend: hader
        }
    })
}