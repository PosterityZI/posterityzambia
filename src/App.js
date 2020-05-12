import React from 'react';
import Loadable from 'react-loadable';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';
import { img01, img02, img03, img04, img05, img07 } from './images';
import loading from './loading.jpg';
import Nav from './components/Nav.js';
import Soon from './components/Soon.js';
import About from './components/About.js';
import Footer from './components/Footer.js';

function App() {
  return (
        <HashRouter basename="/">
          <div className="">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/soon" component={Soon} />
          </div>
        </HashRouter>
      );
}

function Home(){
        return(
        <div className="">
        	 <Nav/>
        	 <Carousel/>
             <Works/>
             <Footer/>
        </div>
)
}


function Carousel(){
        return(
          <div className="carousel">
        <div className="row ">
          <div className="col mb-4 mb-lg-0">
            <div id="carouselExampleIndicators"  className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" >
                    <div className="slider-text">
		              <h1>A Better Next Generation<span>.</span></h1>
		              <p>It is only possible if we hold hands and work together for the greater good</p>
		            </div>
                  <img src={img01} className="d-block w-100" alt="pzi maiden" />
                </div>
                <div className="carousel-item" >
                    <div className="slider-text">
		              <h1>Empowering Communities<span>.</span></h1>
		              <p>Fighting poverty through empowerment, education and innovation.</p>
		            </div>
                  <img src={img02} className="d-block w-100" alt="pzi maiden2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)
}

function Works(){
        return(
                <section id="works">
                  <div className="row">
                    <div className="twelve columns align-center">
                      <h1>We aim to lead the way.</h1>
                    </div>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-halves">
                      <div className="columns portfolio-item">
                        <div className="item-wrap" style={{'height':'300px'}}  >
                          <a href="index.html">
                            <img alt="" src={img04} style={{'width':'100%', 'height':'200px'}}/>
                            <div className="overlay" />
                            <div className="link-icon"><i className="fa fa-link" /></div>
                          </a>
                          <div className="portfolio-item-meta">
                            <h5><a href="index.html">Social Enterprise and Welfare</a></h5>
                            <p>Developing sustainable Social Enterprises</p>
                          </div>
                        </div>
                      </div>
                      <div className="columns portfolio-item">
                        <div className="item-wrap" style={{'height':'300px'}} >
                          <a href="index.html">
                            <img alt="" src={img03} style={{'width':'100%', 'height':'200px'}}/>
                            <div className="overlay" />
                            <div className="link-icon"><i className="fa fa-link" /></div>
                          </a>
                          <div className="portfolio-item-meta">
                            <h5><a href="index.html">Civic Engangement</a></h5>
                            <p>Civic Engangement as a means of information dessimination and involvement</p>
                          </div>
                        </div>
                      </div>
                      <div className="columns portfolio-item"  >
                        <div className="item-wrap" style={{'height':'300px'}}>
                          <a href="index.html">
                            <img alt="" src={img05} style={{'width':'100%', 'height':'200px'}} />
                            <div className="overlay" />
                            <div className="link-icon"><i className="fa fa-link" /></div>
                          </a>
                          <div className="portfolio-item-meta">
                            <h5><a href="index.html">Entrepreneurship</a></h5>
                            <p>Promoting Life Skills, Innovation and Entrepreneurship</p>
                          </div>
                        </div>
                      </div>
                      <div className="columns portfolio-item">
                        <div className="item-wrap" style={{'height':'300px'}} >
                         <a href="index.html">
                            <img alt="" src={img07} style={{'width':'100%', 'height':'200px'}}/>
                            <div className="overlay" />
                            <div className="link-icon"><i className="fa fa-link" /></div>
                          </a>
                          <div className="portfolio-item-meta">
                            <h5><a href="index.html">Education</a></h5>
                            <p>Improving Education standards for disadvantaged communities</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        )
}


const LoadableBar = Loadable({
  loader: () => import('./components/Soon'),
  delay: 300,
  loading() {
    return (
          <div className="App">
           <div className="App-header">
             <img src={loading} className="App-logo" alt="logo" />
         </div>
        </div>
    )
  }
});


function About0(){

	return(
	<LoadableBar/>
	)
}

function Projects(){
    return(
    <LoadableBar/>
    )
}

function Contact(){
  return(
 <LoadableBar/>
   )
}

function Blog(){
return(
    <LoadableBar/>
    )
}



export default App;
