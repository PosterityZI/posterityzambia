import React from 'react';
import { HashRouter, Rout } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
function Footer(props){
	return(
				<footer className="container">
                  <div className="row">
                    <div className="twelve columns">
                      <ul className="footer-nav">
                        <li><Link to="/#toph">Home.</Link></li>
                        <li><Link smooth to="/blog#topb">Blog.</Link></li>
                        <li><Link smooth to="/about#topa">About.</Link></li>
                        <li><Link to="/soon">Contact.</Link></li>
                        <li><Link to="/soon">Projects.</Link></li>
                      </ul>
                      <ul className="footer-social">
                        <li><a href="https://facebook.com/279271898900830/" target = "_blank" rel="noopener noreferrer" ><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="mailto:posterityza@gmail.com" target="_blank"><i className="fa fa-envelope" /></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="#"><i className="fa fa-skype" /></a></li>
                      </ul>
                      <ul className="copyright">
                        <li>Copyright © 2020  <a href="https://damianochintala.me">Posterity Zambia</a></li>
                        <li><a href="http://www.styleshout.com/">Styleshout</a> adapted  Design by <a href="https://damianochintala.me/">Damiano</a></li>
                      </ul>
                    </div>
                    <div id="go-top" style={{display: 'block'}}><Link title="Back to Top" smooth to={props.link}>Go To Top</Link></div>
                  </div>
                </footer>
		
	)
}

export default Footer
