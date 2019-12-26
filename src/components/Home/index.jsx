import React from 'react';

// import styles
import styles from './styles.module.scss';

// import components
import Name from '../Name';
import Social from '../Social';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <Name />
        <h2>Front End Engineer</h2>
        <div className={styles.social}>
          <Social
            icon="github"
            link="https://github.com/laurasprauer"
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
