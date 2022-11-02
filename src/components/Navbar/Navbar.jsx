import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/logo.png'

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
    </>
  )
}

export default Navbar