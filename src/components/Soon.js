import React from 'react';
import logo from '../logo.png';
import '../App.css';

function Soon(){
	return(
           <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
               <h1 className="soon" style={{'color':'red'}}>COMING SOON....</h1><br/>
               <p className="maintain">Site currently under maintenance</p>
                <button type="button" class="btn btn-dark"><a className="App-link" href="https://posterityzi.github.io" target="_blank" rel="noopener noreferrer" >Back to Posterity Zambia</a></button>
            </div>
           </div>
	)
}

export default Soon;
