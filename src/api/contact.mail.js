import axios from "axios"

export const sender = (name,mail,phone,subject,message) => {
    return axios.post(`${import.meta.env.VITE_BACKEND_API}api/contact/send/mail`,{
        fullname:name,
        email:mail,
        phone,
        subject,
        message
        
    })
}