import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { message_conv_find } from '../api/mess.conv.api'
import { setAdminMember } from '../redux/Userslice'

const Massageredux = () => {
    const dicpatch = useDispatch()
    const user = useSelector((state) => state.user.user)
    const admin_member = useSelector((state) => state.user.admin_mamber)
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const fn = async () =>{
        try {
            if(user){
                const res = await message_conv_find(token,user.id)
                const newres = res.data.mess_conv.map((item)=> item.member).flat()
                const other_user = newres.filter((item) => item._id !== user.id)
                dicpatch(setAdminMember(other_user))
                // console.log(other_user,admin_member)
                if(admin_member.length !== 0){
                    console.log(other_user,admin_member)
                }
            }
        } catch (error) {
            return console.log(error)
        }
    }
    fn()
  },[user])
}

export default Massageredux