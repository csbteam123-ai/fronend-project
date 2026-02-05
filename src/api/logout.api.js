import axios from "axios";
export function userLogout(token) {
    return axios.get(`${import.meta.env.VITE_BACKEND_API}api/logout`,{
        headers: {
            tokensend: token
        }
    });
}