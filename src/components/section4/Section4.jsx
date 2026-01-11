import React from 'react'
import Contact from './Contact'
const Section4 = () => {
  return (
    <div className='h-[70vh] max-[639px]:h-auto w-full py-10 px-20 bg-blue-500 font-medium'>
        <div className='h-full w-full flex max-[639px]:flex-col gap-10 justify-between max-[639px]:justify-center'>
            <div className='h-full w-1/3 bg-amber-300'>
              <Contact/>
            </div>
            <div className='h-full w-1/3 bg-amber-300'>
                maruf 
            </div>
        </div>
    </div>
  )
}

export default Section4