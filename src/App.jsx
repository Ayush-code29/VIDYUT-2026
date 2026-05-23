import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events';
import Achievements from './components/Acheivements';
import Stats from './components/Stats';
import Sponsors from './components/Sponsor';
import Teams from './components/Teams';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  return (
    <>
    
    <Loader/>
    <Navbar />
    <Hero />
    <Events/>
    <Achievements/>
    <Stats/>
    <Sponsors/>
    <Teams/>
    <Contact/>
    <Footer/>
    
    </>

    
  )
}

export default App
