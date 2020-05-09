import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Soon from './Soon.js';
import Home from './Home.js';
import Intro from './Intro';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' render={Home}/>
        <Route path='/soon' component={Soon}/>
        <Route path='/intro' component={Intro}/>
      </Switch>
    </main>
  );
}

export default Main;
