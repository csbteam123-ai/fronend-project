import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Navigate} from "react-router-dom"

const Tokenlogin = ({login_page}) => {
  const [islogin, setislogin] = useState(false)
  useEffect(()=>{
    const token = sessionStorage.getItem('token')
    if(!token) return setislogin(false)
    return setislogin(true)
  },[])
  if (islogin === null) return null;
  return islogin ? <Navigate to="/about" replace /> : login_page ;

}

export default Tokenlogin