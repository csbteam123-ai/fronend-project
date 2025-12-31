import React from 'react'
import { House } from 'lucide-react';

const navbar = () => {
  return (
    <div className='h-1/12 w-full  py-1 px-4 flex  items-center justify-between'>
        <button className='bg-black hover:bg-gray-700 py-3 px-6 rounded-full'>i'm MD Maruf</button>
        <ul className='flex gap-5 mr-15 uppercase text-black '>
            <li><a href="" className=' text-[16px] hover:text-[18px]'>about</a></li>
            <li><a href="" className=' text-[16px] hover:text-[18px]'>servises</a></li>
            <li><a href="" className=' text-[16px] hover:text-[18px]'>project1</a></li>
            <li> <House /> </li>
            
        </ul>
    </div>
  )
}

export default navbar