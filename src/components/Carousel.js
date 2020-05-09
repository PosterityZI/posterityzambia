import React from 'react';
import { img01, img02, img03, img04, img05, img06 } from '../images';

function Carousel(){
	return(
	  <div className="container">
        <div className="row">
          <div className="col mb-4 mb-lg-0">          
            <div id="carouselExampleIndicators"  className="carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4" class="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
			  </ol>
              <div className="carousel-inner">
                <div className="carousel-item active" >
                  <img src={img01} className="d-block w-100" alt="pzi maiden" />
                </div>
                <div className="carousel-item" >
                  <img src={img02} className="d-block w-100" alt="pzi maiden2" />
                </div>
                <div className="carousel-item" >
                  <img src={img03} className="d-block w-100" alt="pzi maiden2" />
                </div>
                <div className="carousel-item" >
                  <img src={img04} className="d-block w-100" alt="pzi maiden2" />
                </div>
                <div className="carousel-item" >
                  <img src={img05} className="d-block w-100" alt="pzi maiden2" />
                </div>
               <div className="carousel-item" >
                  <img src={img06} className="d-block w-100" alt="pzi maiden2" />
                </div>
              </div>          
            </div>        
          </div>
        </div>
      </div>
)
}

export default Carousel
