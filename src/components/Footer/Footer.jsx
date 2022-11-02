import React from 'react'
import { Link } from 'react-router-dom'
import Github from './../../assets/icons/github.svg'
import Instagram from './../../assets/icons/instagram.svg'
import Linkedin from './../../assets/icons/linkedin.svg'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <footer>
            <div class="container">
                <h1>Ibnu Choldun</h1>
                <div class="alamat">
                    <p>Desa Bongas Blok Pentil, RT:03/RW:01, Kec. Bongas, Kab.Indramayu, Jawabarat, 45255</p>
                </div>
                <div class="nav">
                    <ul>
                        <li><Link to="/" className='navlink'>Home</Link></li>
                        <li><Link to="/about" className='navlink'>About</Link></li>
                        <li><Link to="/portfolio" className='navlink'>Portfolio</Link> </li>
                        <li><Link to="/blog" className='navlink'>Blog</Link></li>
                    </ul>
                </div>
                <div class="contact">
                    <p>+6285872587871</p>
                    <p>ibnucholdun023@gmail.com</p>
                    <div class="sosmed">
                        <a href="https://www.linkedin.com/in/ibnucholdun/" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="linkedin" width={30}/>
                        </a>
                        <a href="https://www.instagram.com/ibnu.choldun15" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="instagram" width={30}/>
                        </a>
                        <a href="https://github.com/ibnucholdun" target="_blank" rel="noopener noreferrer">
                            <img src={Github} alt="github" width={30}/>
                        </a>
                    </div>
                </div>
            </div>
            <p class="copy">© 2022 Ibnu Choldun</p>
        </footer>
    </>
  )
}

export default Footer