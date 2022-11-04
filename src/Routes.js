import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Blog from './pages/Blog/Blog'
import DetailBlog from './pages/Blog/Detail Blog/DetailBlog.jsx'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog">
          <Route path="" element={<Blog />} /> 
          <Route path='detail-blog/:id' element={<DetailBlog />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes