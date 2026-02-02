import React from 'react'
// import Section1 from './components/section1/section1'
// import Section2 from './components/section2/section2'
// import Section3 from './components/section3/section3'
// import Section4 from './components/section4/Section4'
import Home from './pages/Home'
//main page route
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import M404 from './pages/404'
import LoginSignupPage from './pages/LoginSignupPage'
import Project from './pages/project'
import Tokenverify from "./token/tokenverify"
import Tokenlogin from './token/Tokenlogin'
import ServicesPage from './pages/Services'
import Admin from "./pages/admin"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Tokenlogin login_page={<LoginSignupPage/>}/>} />
        <Route path='/project' element={<Tokenverify children={<Project />} />} />
        <Route path='/services_all' element={<ServicesPage />} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='*' element={<M404/>} />
      </Routes>
    </div>
  )
}

export default App
