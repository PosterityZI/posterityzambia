import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import Works from './components/Works.js';
import Footer from './components/Footer.js';
import Soon from './components/Soon.js';
import Main from './components/Main.js';
import Carousel from './components/Carousel.js';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Carousel/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
