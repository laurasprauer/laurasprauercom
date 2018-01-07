import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import styles
// import styles from './styles.module.scss';

// import components
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

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
