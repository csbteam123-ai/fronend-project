import React from 'react'

const M404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-[#1b1b2f] via-[#162447] to-[#1f4068] text-white px-4">
      
      {/* Animated Character */}
      <div className="relative w-40 h-40 rounded-full bg-white mb-8 animate-bounce">
        <div className="absolute w-9 h-9 bg-[#1f4068] rounded-full top-12 left-12"></div>
        <div className="absolute w-9 h-9 bg-[#1f4068] rounded-full top-12 right-12"></div>
        <div className="absolute w-15 h-7 border-4 border-[#1f4068] border-t-transparent rounded-b-full bottom-10 left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Text */}
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6 text-center opacity-80">
        Oops! Je page ta tumi khujtaso seta pawa jai nai...
      </p>

      {/* Back Button */}
      <a
        href="/"
        className="bg-[#e43f5a] hover:bg-[#ff6f91] transition-all px-6 py-3 rounded-lg font-semibold"
      >
        Back to Home
      </a>
    </div>
  )
}

export default M404