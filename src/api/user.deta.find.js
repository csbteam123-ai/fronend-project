import axios from "axios";

export const user_find = async (data) => {
   return await axios.get(`${import.meta.env.VITE_BACKEND_API}api/get/user/send`, {
    headers: {
      tokensend: data,
    },
  });
};

