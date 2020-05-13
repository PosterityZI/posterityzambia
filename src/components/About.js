import React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';
import { HashLink as Link } from 'react-router-hash-link';

function About(){
	return(
	<div id="top">
	<div>
		<Nav/>
	</div>
	   <div id="page-title">

      <div className="row">

         <div className="ten columns centered text-center">
            <h1>About Us<span>.</span></h1>

            <p>We are a Social Benefit Enterprise specialised in facilitating access to Education for the vulnerable and poor demographic in Zambia. We provide Enterprise support to the vulnerable poor and struggling women in the informal sector as well as engaged in Street Children reintegration through skills development and Education .<br/>
             These objectives  fuel the solid aim of dismantling poverty in Zambia.
             </p>
         </div>

      </div>

   </div> 
		<div className="content-outer">
		  <div id="page-content" className="row page">
		    <div id="primary" className="eight columns">
		      <section>
		        <h1>Meet our talented team.</h1>
		        <p className="lead">We’re a team of makers and thinkers made from different career paths, 
		        and that diversity of thought and background breeds unbridled innovation. Despite our differences, we are committed to working
		         in a coordinated and harmonious manner as we strive to improve our community </p>
		        <p>The Team is led by some of the best young and skilled minds in Zambia </p>
		        <div className="row">
		          <div id="team-wrapper" className="bgrid-halves cf">
		            <div className="column member">
		              <img src="images/team/founder2.jpg" alt="" />
		              <div className ="member-name">
		                <h5>Noah Mwewa</h5>
		                <span>Founder</span>
		              </div>
		              <p>A Social Enterprise Developer ,a Miner who is Specialised in Underground and open 
		              pit Mining blasting , an Author of 15 books , An industrial Production and Operations 
		              Specialist and an Industrial Occupation Health Safety Environment Management personnel </p><br/>
		              <ul className="member-social">
		                <li><a href="https://www.facebook.com/noah.mwewa.1" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
		                <li><a href="https://twitter.com/Noahmwewa2?s=09" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
		                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
		              </ul>
		            </div>
		            <div className="column member">
		              <img src="images/team/ceo.jpg" alt="" />
		              <div className="member-name">
		                <h5>Dr. Clement Shibalika</h5>
		                <span>Chief Executive Officer</span>
		              </div>
		              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
		                nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p><br/>
		              <ul className="member-social">
		                <li><a href="https://www.facebook.com/kalibashi9" target="_blank" rel="noopener noreferrer" ><i className="fa fa-facebook" /></a></li>
		                <li><a href="https://twitter.com/kalibashi9?s=09" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
		                <li><a href="https://www.linkedin.com/in/clement-shibalika-05b05517" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>              
		              </ul>
		            </div>
					<div className="column member">
                        <img src="images/team/coo.jpg" alt="" />
                           <div className ="member-name">
                             <h5>Probby Malyango</h5>
                              <span>Chief Operations Officer</span>
                              </div>
                              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                                nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p><br/>
                              <ul className="member-social">
                                <li><a href="https://www.facebook.com/profile.php?id=100008831883000" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
                                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://www.linkedin.com/in/probby-malyango-903657144" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
                              </ul>
                            </div>
		            <div className="column member">
		              <img src="images/team/hop.jpg" alt="" />
		              <div className="member-name">
		                <h5>Aaron Rarge Sichone</h5>
		                <span>Head of Projects</span>
		              </div>
		              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
		                nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p><br/>
		              <ul className="member-social">
		                <li><a href="https://www.facebook.com/rarge.sichone" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
		                <li><a href="https://twitter.com/AaronsichoneN?s=09" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
		                <li><a href="https://www.linkedin.com/in/aaron-sichone-0a3077156" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
		              </ul>
		            </div>
		            <div className="column member">
		              <img src="images/team/hoo.jpg" alt="" />
		              <div className="member-name">
		                <h5>Lourenco Kolombo</h5>
		                <span>Head of Operations</span>
		              </div>
		              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
		                nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p><br/>
		              <ul className="member-social">
		                <li><a href="https://www.facebook.com/lourenco.kolombo.3" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
		                <li><a href="https://twitter.com/Don_Kolz?s=09"><i className="fa fa-twitter" target="_blank" rel="noopener noreferrer" /></a></li>
		                <li><a href="https://www.linkedin.com/in/lourenco-kolombo-3281a0164" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
		              </ul>
		            </div>
		          </div> {/* Team wrapper End */}
		        </div> {/* row End */}
		      </section> {/* section end */}
		    </div> {/* primary end */}
          <div id="secondary" className="four columns end">
          
               <aside id="sidebar">
                  <div className="widget widget_text">
                     <h5 className="widget-title">Reach out to Us</h5>
                     <div className="textwidget">At Posterity, we believe that Education is a reliable vehicle that can be used to thrust people out of poverty into prosperity. Help us serve our communities better. </div>
          		         </div>
          
                  <div className="widget widget_contact">
          					   <h5>Address and Phone</h5>
          					   <p className="address">
          						   Lusaka <br/>
          						   Lusaka City <br/>
          						   Lusaka Province, ZM<br/>
          						   <span>+260-969-931-732</span>
          					   </p>
          
          					   <h5>Email and Social</h5>
          					   <p>
                        E-mail: posterity@gmail.com<br/>
                        Twitter: <a href="#">@posterityzi</a><br/>
                        Facebook: <a href="https://www.facebook.com/Posterity-Zambia-International-279271898900830/" target="_blank" rel="noopener noreferrer" >Posterity Zambia International </a><br/>
                        Gmail: <a href="mailto:posterityza@gmail.com" target="_blank" rel="noopener noreferrer">posterityza</a>
                     </p>
          		 </div>
          
              
          
               </aside>
          
            </div>
		  </div>
		</div>
	   <Footer link={'#top'}/>
	  </div>
		
	)
}

export default About;
 
