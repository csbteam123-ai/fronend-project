import axios from "axios";
export function createservises(token, data) {
  return axios.post(`${import.meta.env.VITE_BACKEND_API}api/servises/add`,data,{
    headers: {
      tokensend: token,
    },
  });
}
export function getAllServises() {
  return axios.get(`${import.meta.env.VITE_BACKEND_API}api/servises/all`);
}
export function updateservises(token, id, data) {
  return axios.patch(`${import.meta.env.VITE_BACKEND_API}api/servises/update/${id}`,data,{
    headers: {
      tokensend: token,
    },
  });
}