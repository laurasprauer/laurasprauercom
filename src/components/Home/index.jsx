import React from 'react';

// import styles
import styles from './styles.module.scss';

// import components
import MorseCode from '../MorseCode';
import Name from '../Name';
import Social from '../Social';

function Home() {
  return (
    <div className={styles.container}>
      <MorseCode />
      <div className={styles.block}>
        <Name />
        <h2>Creative Developer</h2>
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

export default Home;
