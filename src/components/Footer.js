import React from 'react';

function Footer(){
	return(
		<footer>
		  <div className="row">
		    <div className="twelve columns">
		      <ul className="footer-nav">
		        <li><a href="#">Home.</a></li>
		        <li><a href="#">Blog.</a></li>
		        <li><a href="#">About.</a></li>
		        <li><a href="#">Contact.</a></li>
		        <li><a href="#">Projects.</a></li>
		      </ul>
		      <ul className="footer-social">
		        <li><a href="https://facebook.com/279271898900830/"><i className="fa fa-facebook" /></a></li>
		        <li><a href="#"><i className="fa fa-twitter" /></a></li>
		        <li><a href="mailto:posterityza@gmail.com" target="blank"><i className="fa fa-envelope" /></a></li>
		        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
		        <li><a href="#"><i className="fa fa-skype" /></a></li>
		      </ul>
		      <ul className="copyright">
		        <li>Copyright © 2020  <a href="https://damianochintala.me">Posterity Zambia</a></li> 
		        <li><a href="http://www.styleshout.com/">Styleshout</a> adapted  Design</li>               
		      </ul>
		    </div>
		    <div id="go-top" style={{display: 'block'}}><a title="Back to Top" href="#">Go To Top</a></div>
		  </div>
		</footer>
		
	)
}

export default Footer
