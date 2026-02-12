import axios from "axios";

export const message_user_find = (token,serch) => {
    return axios.post(`${import.meta.env.VITE_BACKEND_API}api/message/user/find`,{serch},{
        headers: {
            tokensend: token
        },
    }); 
};