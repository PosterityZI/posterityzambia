import React from 'react';
import logo from '../logo2.png';

function Navbar(){
	return(
	<div className="row">
	  <div className="twelve columns">
	    <div className="logo">
	      <a href="index.html"><img alt="Posterity Logo" className="try" src={logo} /></a>
	    </div>
	    <nav id="nav-wrap">
	      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
	      <ul id="nav" className="nav">
	        <li className="current"><a href="index.html">Home</a></li>
	        <li><a href="#">Blog</a></li>
	        <li><a href="#">About</a></li>
	        <li><a href="#">Contact</a></li>
	        <li><a href="#">Projects</a></li>
	      </ul>
	    </nav>
	  </div>
	</div>
	
	)
}

export default Navbar
