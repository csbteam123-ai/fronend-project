import axios from "axios";

export const getReduxUserInfo = async (token) => {
    return axios.get(`${import.meta.env.VITE_BACKEND_API}api/get/user/info`,{
        headers: {
            tokensend: token,
        },
    })
};