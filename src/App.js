import React from 'react';
import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import Works from './components/Works.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Works/>
    <Footer/>
    </div>
  );
}

export default App;
