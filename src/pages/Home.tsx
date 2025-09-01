import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Process from '../components/process'
import Footer from '../components/footer'
import Products from '../components/products'
import Contact from '../contact'

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
