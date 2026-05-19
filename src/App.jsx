import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events';
let body = document.querySelector("body");

body.style.backgroundImage = "url('new-background.jpg')";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";
body.style.minHeight = "100vh";

function App() {
  return (
    <>
    
    
    <Navbar /><Hero /><Events/>
    
    </>

    
  )
}

export default App
