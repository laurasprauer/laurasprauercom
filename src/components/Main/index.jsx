import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import mixpanel from 'mixpanel-browser';
import $ from 'jquery';

// import styles
import styles from './styles.module.scss';

// import components
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Thanks from '../Thanks';
import Resume from '../Resume';
import Resources from '../Resources';
import Conference from '../Conference';
import NotFound from '../NotFound';
import MorseCode from '../MorseCode';

const YELLOW = '#28ffb2';
const TEAL = '#28ffb2';
const PEACH = '#ff7f50';
const PURPLE = '#9e42f4';
const PINK = '#f142f4';
const BLACK = '#343434';
const WHITE = '#ffffff';

export default class Main extends React.Component {
  componentDidMount() {
    // update the background color manually on start
    $('body').css('background-color', `${this.getBackgroundColor()}`);

    mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, { debug: true });
  }

  componentDidUpdate() {
    // update the background color manually on change
    $('body').css('background-color', `${this.getBackgroundColor()}`);

    if (process.env.REACT_APP_ENV === 'production') {
      mixpanel.track('Site Visit', {
        url: `${this.props.pathname}`,
      });
    }
  }

  toggleDarkMode = () => {
    this.props.toggleDarkMode();
  }

  getBackgroundColor = () => {
    // let's figure out what the background color should be based on the path name
    // the default color is yellow
    if (this.props.pathname === '/') { // home page
      return TEAL;
    } if (this.props.pathname === '/about') { // about page
      return PEACH;
    } if (this.props.pathname === '/contact') { // contact page
      return PURPLE;
    } if (this.props.pathname === '/thanks') { // thanks page
      return PINK;
    } if (this.props.pathname === '/resume' || this.props.pathname === '/resources' || this.props.pathname === '/momentum-2021') { // resources pages
      // check for darkMode
      if (this.props.darkMode) {
        return BLACK;
      }

      return WHITE;
    }

    return YELLOW;
  }

  render() {
    const backgroundColor = {
      backgroundColor: `${this.getBackgroundColor()}`,
    };

    // decides which pages have the MorseCode animation and which do not
    // you can also only toggle darkMode on the resources pages
    let showMorseCode = <MorseCode />;
    let showDarkMode = null;
    if (this.props.pathname === '/resume' || this.props.pathname === '/resources' || this.props.pathname === '/momentum-2021') {
      showMorseCode = null;
      // check if darkmode is already enabled or not
      if (!this.props.darkMode) {
        showDarkMode = <div className={styles.darkMode} role="button" aria-label="Toggle Dark Mode" onClick={this.toggleDarkMode}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.812 312.812"><path d="M305.2 178.159c-3.2-.8-6.4 0-9.2 2-10.4 8.8-22.4 16-35.6 20.8-12.4 4.8-26 7.2-40.4 7.2-32.4 0-62-13.2-83.2-34.4-21.2-21.2-34.4-50.8-34.4-83.2 0-13.6 2.4-26.8 6.4-38.8 4.4-12.8 10.8-24.4 19.2-34.4 3.6-4.4 2.8-10.8-1.6-14.4-2.8-2-6-2.8-9.2-2-34 9.2-63.6 29.6-84.8 56.8-20.4 26.8-32.4 60-32.4 96 0 43.6 17.6 83.2 46.4 112s68 46.4 112 46.4c36.8 0 70.8-12.8 98-34 27.6-21.6 47.6-52.4 56-87.6 1.6-5.6-1.6-11.2-7.2-12.4z"/></svg></div>;
      } else {
        showDarkMode = <div className={styles.lightMode} role="button" aria-label="Toggle Light Mode" onClick={this.toggleDarkMode}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.16 45.16"><path d="M22.58 11.269c-6.237 0-11.311 5.075-11.311 11.312s5.074 11.312 11.311 11.312c6.236 0 11.311-5.074 11.311-11.312S28.816 11.269 22.58 11.269zM22.58 7.944a2.207 2.207 0 01-2.207-2.206V2.207a2.207 2.207 0 114.414 0v3.531a2.207 2.207 0 01-2.207 2.206zM22.58 37.215a2.207 2.207 0 00-2.207 2.207v3.53a2.207 2.207 0 104.414 0v-3.53a2.208 2.208 0 00-2.207-2.207zM32.928 12.231a2.208 2.208 0 010-3.121l2.497-2.497a2.207 2.207 0 113.121 3.121l-2.497 2.497a2.207 2.207 0 01-3.121 0zM12.231 32.93a2.205 2.205 0 00-3.121 0l-2.497 2.496a2.207 2.207 0 003.121 3.121l2.497-2.498a2.204 2.204 0 000-3.119zM37.215 22.58c0-1.219.988-2.207 2.207-2.207h3.531a2.207 2.207 0 110 4.413h-3.531a2.206 2.206 0 01-2.207-2.206zM7.944 22.58a2.207 2.207 0 00-2.207-2.207h-3.53a2.207 2.207 0 100 4.413h3.531a2.206 2.206 0 002.206-2.206zM32.928 32.93a2.208 2.208 0 013.121 0l2.497 2.497a2.205 2.205 0 11-3.121 3.12l-2.497-2.497a2.205 2.205 0 010-3.12zM12.231 12.231a2.207 2.207 0 000-3.121L9.734 6.614a2.207 2.207 0 00-3.121 3.12l2.497 2.497a2.205 2.205 0 003.121 0z"/></svg></div>;
      }
    }

    return (
      <div className={styles.container} style={backgroundColor}>
        {showMorseCode}
        {showDarkMode}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/thanks" component={Thanks} />
          <Route exact path="/resume" render={() => <Resume darkMode={this.props.darkMode}/>} />
          <Route exact path="/resources" render={() => <Resources darkMode={this.props.darkMode}/>} />
          <Route
            exact
            path="/momentum-2021"
            render={() => (
              <Conference
                darkMode={this.props.darkMode}
                pdf="/pdf/25-Years-of-JavaScript-Momentum-2021.pdf"
                blogLink="https://www.ample.co/"
                title="Momentum 2021"
                subTitleBold="25 Years of JavaScript"
                subTitleThin="- Why History Matters and What We Can Learn From It"
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

Main.propTypes = {
  pathname: PropTypes.string.isRequired,
  darkMode: PropTypes.string.isRequired,
  toggleDarkMode: PropTypes.string.isRequired,
};
