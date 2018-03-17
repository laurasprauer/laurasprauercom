import React from 'react';

// import styles
import styles from './styles.module.scss';

function About() {
  const date = new Date();
  const exp = date.getFullYear() - 2014;
  return (
    <div className={styles.container} >
      <div className={styles.wrapper} >
        <div className={styles.content} >
          <h1>Hello</h1>
          <p>My name is Laura Sprauer, and I&#39;ve been creatively developing for the past {exp} years. Starting off my career as an interactive designer before fully transitioning to a front end developer has given me a unique perspective - and I love it!</p>
          <p>I&#39;m also a nerd and pet lover who calls Cincinnati home. Interested in connecting? Let&#39;s talk!</p>
        </div>
        <div className={styles.blackBox} />
        <div className={styles.whiteBox} />
      </div>
    </div>
  );
}

export default About;
