import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Shop from './Components/Shop'
import Service from './Components/Service'
import Testimonials from './Components/Testimonials'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/shop' element={<Shop/>}/>
   
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App