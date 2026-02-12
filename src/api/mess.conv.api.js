import axios from "axios"

export const message_conv = (token, id,sender) => {
    return axios.post(`${import.meta.env.VITE_BACKEND_API}api/message/conv/${id}`,{sender_user_id:sender},{
        headers: {
            tokensend: token
        },
    });
}
export const message_conv_find = (token, id) => {
    return axios.get(`${import.meta.env.VITE_BACKEND_API}api/message/conv/${id}`,{
        headers: {
            tokensend: token
        },
    });
}