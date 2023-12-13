// import { useState } from 'react'

import './App.css'
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom"
import { Carousel } from './components/Carousel';

import {slides} from "./data/carouselData.json"

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


function App() {

  return (
    <div className="App">
      <Header />
      {/* <Carousel data={slides}/> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App
