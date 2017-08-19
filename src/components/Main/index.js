import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//import styles
import './styles.css';

//import components
import Home from './components/Home';
import NotFound from './components/NotFound';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
