import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import AiPrivacy from '../components/AiPrivacy'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    <NavBar/>

    <Hero/>
    <HowItWorks/>
    <AiPrivacy/>
    <Testimonials/>

    <Footer/>
    </div>
  )
}

export default Home