import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage/HomePage.jsx";
import Footer from "./components/Footer";
import HomeProject from "../src/components/Projects/HomeProject.jsx"


import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
  <>
      <Router>
        <Navbar/>
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<HomeProject />} />
          {/* {/* <Route path="/about" element={<About />} /> */}
          <Route path="/myresume" element={<MyResume />} />
        </Routes>
        <Footer/>
        <Toaster/>
    </Router>
  
  </>
  );
}

export default App;
