import React from 'react'
import Navbar from './Navbar'
import Laftcontent from './laftcontent'
import Rightcontent from './rightcontent'


const Section1 = () => {
  return (
    <div className='h-screen w-full  text-white font-medium py-5 px-5 overflow-hidden max-[639px]:h-auto '>
        <Navbar />
        <div className='h-11/12 w-full flex max-[639px]:block gap-10 '>
            <Laftcontent />
            <Rightcontent />
        </div>
    </div>
  )
}

export default Section1