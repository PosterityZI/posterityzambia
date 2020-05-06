import React from 'react';
import { img01, img02, img03, img04, img05, img06 } from '../images';
function Intro(){
	return(
		<section id="intro">
		  {/* Flexslider Start*/}
		  <div id="intro-slider" className="flexslider">
		    <ul className="slides">
		      <li>
		        <div className="row">
		          <div className="twelve columns">
		            <div className="slider-text">
		              <h1>A Better Next Generation<span>.</span></h1>
		              <p>It is only possible if we hold hands and work together for the greater good</p>
		            </div>
		            <div className="slider-image">
		              <img src={img01}  alt="team" />
		            </div>
		          </div>
		        </div>
		      </li>
		      <li>
		        <div className="row">
		          <div className="twelve columns">
		            <div className="slider-text">
		              <h1>Empowering Communities<span>.</span></h1>
		              <p>Fighting poverty through empowerment, education and innovation.</p>
		            </div>
		            <div className="slider-image">
		              <img src={img02} alt="team" />
		            </div>
		          </div>
		        </div>
		      </li>
		    </ul>
		  </div>
		</section>
		
	)
}

export default Intro
