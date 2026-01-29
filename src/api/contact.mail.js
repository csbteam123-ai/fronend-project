import axios from "axios"

export const sender = (fullname,mail,phone,subject,msg) => {
    return axios.post(`${import.meta.env.VITE_BACKEND_API}api/contact/send/mail`,{
        fullname,
        email:mail,
        phone,
        subject,
        msg
        
    })
}