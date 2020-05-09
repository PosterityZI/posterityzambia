import React from 'react';
import Intro from './Intro.js';
import Works from './Works';
import Navbar from './Navbar';

function Home(){
	return(
	<div>
		<Works/>
		<Intro/>
		<Navbar/>
	</div>
		
	)
}

export default Home;
