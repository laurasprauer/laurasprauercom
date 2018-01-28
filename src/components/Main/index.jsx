import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import styles
// import styles from './styles.module.scss';

// import components
import Home from '../Home';
import About from '../About';
import NotFound from '../NotFound';

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Main;
