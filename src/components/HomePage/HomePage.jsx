import React from 'react'
import Home from "./Home.jsx";
import About from "./About.jsx";
import PortFolio from "./PortFolio";
import Experiance from "./Experiance";
import Contact from "./Contact";

const HomePage = () => {
  return (
   <>
   <Home/>
   <About/>
   {/* <PortFolio/> */}
   <Experiance/>
   <Contact/>
   
   </>
  )
}

export default HomePage