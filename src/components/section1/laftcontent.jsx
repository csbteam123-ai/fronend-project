import React from 'react'
import { MoveUpRight } from 'lucide-react';

const laftcontent = () => {
  return (
    <div className=' w-1/3  text-black py-5 px-5 flex flex-col justify-between '>
        <div className='mt-10'>
            <h1 className=' font-bold text-6xl'>we sell problem solution</h1>
            <p className=' text-xl mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestias praesentium in placeat beatae maiores necessitatibus nesciunt sint voluptatem dolorem.</p>
        </div>
        <div>
            <MoveUpRight className='h-20 w-20 hover:h-22 hover:w-22' />
        </div>
    </div>
  )
}

export default laftcontent