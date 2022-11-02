import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Blog from './pages/Blog/Blog'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default AppRoutes