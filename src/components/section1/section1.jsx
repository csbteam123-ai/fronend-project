import React from 'react'
import Navbar from './Navbar'
import Laftcontent from './laftcontent'
import Rightcontent from './rightcontent'


const section1 = () => {
  return (
    <div className='h-screen w-full  text-white font-medium py-5 px-5 '>
        <Navbar />
        <div className='h-11/12 w-full flex gap-10 '>
            <Laftcontent />
            <Rightcontent />
        </div>
    </div>
  )
}

export default section1