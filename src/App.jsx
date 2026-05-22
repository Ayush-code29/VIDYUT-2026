import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events';
import Achievements from './components/Acheivements';
import Stats from './components/Stats';
import Sponsors from './components/Sponsor';
let body = document.querySelector("body");

body.style.backgroundImage = "url('new-background.jpg')";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";
body.style.minHeight = "100vh";

function App() {
  return (
    <>
    
    
    <Navbar /><Hero /><Events/><Achievements/><Stats/><Sponsors/>
    
    </>

    
  )
}

export default App
