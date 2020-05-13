import React from 'react';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css';
import logo from  '../logo.png'

  function Nav() {
    return (
     <div className="row" style={{'backgroundColor':'#3A3434'}}>
     <div className="twelve columns">
     <nav className="col navbar sticky-top  navbar-expand-lg navbar-dark">
     <Link className="navbar-brand" to="/"><img src={logo} width="100" height="30" alt="site logo"/><span className="marker"> Posterity Zambia</span></Link>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
     <span className="navbar-toggler-icon"></span>
 </button>
     <div id="navbarContent" className="collapse navbar-collapse">
     <ul className="navbar-nav">
     <li className="nav-item active">
     <Link className="nav-link" to="/">Home</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link" to="/about">About</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link" to="/contact">Contact</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link" to="/projects">Projects</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link" to="/blog">Blog</Link>
     </li>
     </ul>
 </div>
     </nav>
     </div>
     </div>
   );
}

export default Nav;
