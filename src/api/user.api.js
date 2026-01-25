import axios from "axios"
export const usercreate = (data) => {
    return axios.post(`${import.meta.env.VITE_BACKEND_API}api/usercreate`,data)
}
export const userlogin = (data)=>{
    return axios.post(`${import.meta.env.VITE_BACKEND_API}api/login`,data)
}