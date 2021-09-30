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
        <h2>full-time front end engineer, part-time artist</h2>
        <div className={styles.social}>
          <Social
            icon="github"
            link="https://github.com/laurasprauer"
          />
          <Social
            icon="linkedin"
            link="https://www.linkedin.com/in/laurasprauer/"
          />
          <Social
            icon="instagram"
            link="https://www.instagram.com/sprauer.art/"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
