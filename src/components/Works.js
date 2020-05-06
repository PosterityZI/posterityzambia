import React from 'react';
import { img01, img02, img03, img04, img05, img06, img07 } from '../images';

function Works(){
	return(
		<section id="works">
		  <div className="row">
		    <div className="twelve columns align-center">
		      <h1>We aim to lead the way.</h1>
		    </div>
		    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-halves">
		      <div className="columns portfolio-item">
		        <div className="item-wrap">
		          <a href="portfolio.html">
		            <img alt="" src={img04} />
		            <div className="overlay" />
		            <div className="link-icon"><i className="fa fa-link" /></div>
		          </a>
		          <div className="portfolio-item-meta">
		            <h5><a href="portfolio.html">Social Enterprise and Welfare</a></h5>
		            <p>Developing sustainable Social Enterprises</p>
		          </div>
		        </div>
		      </div>
		      <div className="columns portfolio-item">
		        <div className="item-wrap">
		          <a href="portfolio.html">
		            <img alt="" src={img03} />
		            <div className="overlay" />
		            <div className="link-icon"><i className="fa fa-link" /></div>
		          </a>
		          <div className="portfolio-item-meta">
		            <h5><a href="portfolio.html">Civic Engangement</a></h5>
		            <p>Civic Engangement as a means of information dessimination and involvement</p>
		          </div>
		        </div>
		      </div>
		      <div className="columns portfolio-item s-first">
		        <div className="item-wrap">
		          <a href="portfolio.html">
		            <img alt="" src={img05} />
		            <div className="overlay" />
		            <div className="link-icon"><i className="fa fa-link" /></div>
		          </a>
		          <div className="portfolio-item-meta">
		            <h5><a href="portfolio.html">Entrepreneurship</a></h5>
		            <p>Promoting Life Skills, Innovation and Entrepreneurship</p>
		          </div>
		        </div>
		      </div>
		      <div className="columns portfolio-item">
		        <div className="item-wrap">
		          <a href="portfolio.html">
		            <img alt="" src={img07} />
		            <div className="overlay" />
		            <div className="link-icon"><i className="fa fa-link" /></div>
		          </a>
		          <div className="portfolio-item-meta">
		            <h5><a href="portfolio.html">Education</a></h5>
		            <p>Improving Education standards for disadvantaged communities</p>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
	)
}

export default Works
