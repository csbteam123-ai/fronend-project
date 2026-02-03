import axios from "axios";
export function createservises(token, data) {
  return axios.post(`${import.meta.env.VITE_BACKEND_API}api/servises/add`,data,{
    headers: {
      tokensend: token,
    },
  });
}
