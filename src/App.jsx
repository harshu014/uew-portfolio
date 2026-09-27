import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
// import Process from './components/Process'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import LoadingScreen from './components/LoadingScreen'

function App() {
  return (
    <div className="relative min-h-screen bg-darker overflow-hidden">
      <LoadingScreen />
      <Cursor />
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        {/* <Process /> */}
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App