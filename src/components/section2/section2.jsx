import React from 'react'
import Top from './top'
import Bottom from './bottom'
const section2 = () => {
  return (
    <div className='h-screen w-full py-10 px-10 flex max-[639px]:block flex-col gap-2 overflow-hidden max-[639px]:h-auto'>
      <Top />
      <Bottom />
    </div>
  )
}

export default section2