import React from 'react'
import FotoProfile from '../../../assets/images/gambar1.png'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <h3>Welcome I'M</h3>
          <h1>Ibnu Choldun</h1>
          <p>Web Developer | Electrical Engineering</p>
        </div>
        <div className="hero-img">
          <img src={FotoProfile} alt="Foto Profile" className="profil"/>
        </div>
      </section>
    </>
  )
}

export default HeroSection