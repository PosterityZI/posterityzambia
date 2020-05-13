import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import Nav from './Nav.js';
import Footer from './Footer.js';
import '../App.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 2,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`blogData.json`)
            .then(res => {
                const data = res.data.posts;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => <React.Fragment>
                <div className="row add-bottom">
                
                   <div className="six columns add-bottom">
                
                      <h3>{pd.title}</h3>
                
                      <p><a href="#"><img width="120" height="50" className="pull-left" alt="sample-image" src={pd.image}/></a>{pd.content}</p>
                <h3>{pd.date}</h3>
                   </div>
                   <hr />
                
                </div>
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div id="topb">
            <Nav/>
	<div id="page-title">
	
	<div className="row">
	
	<div className="ten columns centered text-center">
	<h1>Our Blog<span>.</span></h1>
	
	<p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi
	enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu. </p>
	</div>
	
	</div>
	
	</div> 
	<div className="content-outer">
	
	<div id="page-content" className="row">
	
	<div id="primary" className="twelve columns">

                {this.state.postData}
</div>
	</div>
	
	<div className="col full pagination">
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                   
            </div>
            </div>
            <section id="tweets">
            
                  <div className="row">
            
                     <div className="tweeter-icon align-center">
                        <i className="fa fa-facebook"></i>
                     </div>
            
                     <ul id="twitter" className="align-center">
                        <li>
                           <span>
                           For more updates on our daily operations and ventures , find us on Facebook and let us get talking
                         
                           </span>
                        </li>
                     </ul>
            
                     <p className="align-center"><a href="https://facebook.com/279271898900830/" target = "_blank" rel="noopener noreferrer" className="button">Like Our Page</a></p>
            
                  </div>
            
               </section>
            <Footer link={'#topb'}/>
          </div>

        )
    }
}
