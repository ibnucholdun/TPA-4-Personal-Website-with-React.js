import React from 'react'
import AboutSection from './About Section/AboutSection'
import HeroSection from './Hero Section/HeroSection'
import './Home.css'
import PortfolioSection from './Portfolio Section/PortfolioSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
    </>
  )
}

export default Home