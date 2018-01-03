import React, { Component } from 'react';
import styles from './styles.module.scss';

//import components
import Name from './components/Name';
import Social from './components/Social';

class Home extends Component {
  render() {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.homeBlock}>
          <Name/>
          <h2>Designer & Developer</h2>
          <div className={styles.social}>
            <Social
              icon="twitter"
              link="https://twitter.com/lspraue"
            />
            <Social
              icon="github"
              link="https://github.com/laurasprauer"
            />
            <Social
              icon="dribbble"
              link="https://dribbble.com/laurasprauer"
            />
            <Social
              icon="linkedin"
              link="https://www.linkedin.com/in/laurasprauer/"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
