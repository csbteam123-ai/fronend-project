import axios from "axios";

export function allUserSee() {
    return axios.get(`${import.meta.env.VITE_BACKEND_API}api/user/all/info`);
}
export function userUpdate(id,data) {
    return axios.patch(`${import.meta.env.VITE_BACKEND_API}api/user/update/${id}`,data);
}
export function userDelete(id) {
    return axios.delete(`${import.meta.env.VITE_BACKEND_API}api/user/delete/${id}`);
}