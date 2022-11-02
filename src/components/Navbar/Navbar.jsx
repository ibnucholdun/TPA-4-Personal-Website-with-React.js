import React from 'react'
import './Navbar.css'
import { Routes, Route, Link } from 'react-router-dom'
import Logo from '../../assets/icons/logo.png'
import Home from '../../pages/Home/Home.jsx'
import About from '../../pages/About/About.jsx'
import Portfolio from '../../pages/Portfolio/Portfolio.jsx'
import Blog from '../../pages/Blog/Blog.jsx'

const Navbar = () => {
    const menuClick = () => {
        const nav = document.querySelector('nav')
        nav.classList.toggle('active')
    }

  return (
    <>
        <header>
            <Link to="/" className='logo'><img src={Logo} alt="Logo" width={70}/></Link>
            <button className='menu' id='menu' aria-label='button menu dropdown on mobile' onClick={menuClick}>☰</button>
            <nav className='navbar'>
                <ul>
                    <li><Link to="/" className='navlink'>Home</Link></li>
                    <li><Link to="/about" className='navlink'>About</Link></li>
                    <li><Link to="/portfolio" className='navlink'>Portfolio</Link></li>
                    <li><Link to="/blog" className='navlink'>Blog</Link></li>
                </ul>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    </>
  )
}

export default Navbar