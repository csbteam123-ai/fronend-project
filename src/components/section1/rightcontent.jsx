import React from 'react'
import { MoveRight } from 'lucide-react';

const rightcontent = () => {
  return (
    <div className=' w-2/3  py-5 px-5 flex gap-10'>
        <div className='bg-red-400 h-full w-1/3 rounded-3xl overflow-hidden relative'>
            <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='h-full w-full top-0 left-0 absolute  py-5 px-5 flex flex-col justify-between '>
                <h4 className='h-10 w-10 bg-white text-black rounded-full flex justify-center items-center'>1</h4>
                <div className=' flex flex-col gap-15'>
                    <p className='text-shadow-2xs shadow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt obcaecati dolorem aspernatur, quis corrupti accusantium deleniti eligendi numquam vitae!</p>
                    <div className=' flex justify-between'>
                        <button className='bg-green-400 py-2 px-8 rounded-full '>lima islam</button>
                        <MoveRight className='h-10 w-10 bg-green-400 text-white py-1 px-1 rounded-full' />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-red-400 h-full w-1/3 rounded-3xl overflow-hidden relative'>
            <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='h-full w-full top-0 left-0 absolute  py-5 px-5 flex flex-col justify-between '>
                <h4 className='h-10 w-10 bg-white text-black rounded-full flex justify-center items-center'>2</h4>
                <div className=' flex flex-col gap-15'>
                    <p className='text-shadow-2xs shadow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt obcaecati dolorem aspernatur, quis corrupti accusantium deleniti eligendi numquam vitae!</p>
                    <div className=' flex justify-between'>
                        <button className='bg-green-400 py-2 px-8 rounded-full '>lima islam</button>
                        <MoveRight className='h-10 w-10 bg-green-400 text-white py-1 px-1 rounded-full ' />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-red-400 h-full w-1/3 rounded-3xl overflow-hidden relative'>
            <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661281292577-27c65307ac42?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='h-full w-full top-0 left-0 absolute  py-5 px-5 flex flex-col justify-between '>
                <h4 className='h-10 w-10 bg-white text-black rounded-full flex justify-center items-center'>3</h4>
                <div className=' flex flex-col gap-15'>
                    <p className='text-shadow-2xs shadow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt obcaecati dolorem aspernatur, quis corrupti accusantium deleniti eligendi numquam vitae!</p>
                    <div className=' flex justify-between'>
                        <button className='bg-green-400 py-2 px-8 rounded-full '>lima islam</button>
                        <MoveRight className='h-10 w-10 bg-green-400 text-white py-1 px-1 rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default rightcontent