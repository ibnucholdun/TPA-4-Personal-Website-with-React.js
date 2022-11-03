import React from 'react'
import AboutSection from './About Section/AboutSection'
import HeroSection from './Hero Section/HeroSection'
import PortfolioSection from './Portfolio Section/PortfolioSection'
import BlogSection from './Blog Section/BlogSection'
import './Home.css'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <BlogSection />
    </>
  )
}

export default Home