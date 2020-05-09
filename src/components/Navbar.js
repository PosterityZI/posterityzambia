import React from 'react';
import * as $ from 'jquery';
import { Link } from 'react-router-dom'
import logo from '../logo2.png';

function Navbar(){

	return(
	<div className="row">
	  <div className="twelve columns">
	    <div className="logo">
	      <Link to="/"><img alt="Posterity Logo" className="try" src={logo} /></Link>
	    </div>
	    <nav id="nav-wrap">
	      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
	      <ul id="nav" className="nav">
	        <li className="current"><Link to="/">Home</Link></li>
	        <li><Link to="/soon">Blog</Link></li>
	        <li><Link to="/">About</Link></li>
	        <li><Link to="/soon">Contact</Link></li>
	        <li><Link to="/intro">Projects</Link></li>
	      </ul>
	    </nav>
	  </div>
	</div>
	
	)
}

export default Navbar
