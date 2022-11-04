import React from 'react'
import AboutSection from './About Section/AboutSection'
import HeroSection from './Hero Section/HeroSection'
import PortfolioSection from './Portfolio Section/PortfolioSection'
import BlogSection from './Blog Section/BlogSection'
import Vector from '../../assets/images/gambar14.png'
import './Home.css'

const Home = () => {
  return (
    <>
      <img src={Vector} alt="" className='vector1'/>
      <img src={Vector} alt="" className='vector2'/>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <BlogSection />
    </>
  )
}

export default Home