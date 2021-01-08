import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

// import components
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Thanks from '../Thanks';
import Resume from '../Resume';
import NotFound from '../NotFound';
import MorseCode from '../MorseCode';

function Main({
  pathname,
}) {
  // let's figure out what the background color should be based on the path name
  // the default color is yellow
  let backgroundColor = {
    backgroundColor: '#f4e541', // yellow
  };

  if (pathname === '/') { // home page
    backgroundColor = {
      backgroundColor: '#28ffb2', // teal
    };
  } else if (pathname === '/about') { // about page
    backgroundColor = {
      backgroundColor: '#ff7f50', // peach
    };
  } else if (pathname === '/contact') { // contact page
    backgroundColor = {
      backgroundColor: '#9e42f4', // purple
    };
  } else if (pathname === '/thanks') { // thanks page
    backgroundColor = {
      backgroundColor: '#f142f4', // pink
    };
  } else if (pathname === '/resume') { // resume page
    backgroundColor = {
      backgroundColor: '#ffffff', // white
    };
  }

  // decides which pages have the MorseCode animation and which do not
  let showMorseCode = <MorseCode />;
  if (pathname === '/resume') {
    showMorseCode = null;
  }

  return (
    <div className={styles.container} style={backgroundColor}>
      {showMorseCode}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/thanks" component={Thanks} />
        <Route exact path="/resume" component={Resume} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

Main.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Main;
