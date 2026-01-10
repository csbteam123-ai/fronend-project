import React from 'react'
// import Section1 from './components/section1/section1'
// import Section2 from './components/section2/section2'
// import Section3 from './components/section3/section3'
// import Section4 from './components/section4/Section4'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
