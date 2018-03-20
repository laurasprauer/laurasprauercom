import React from 'react';
import { Link } from 'react-router-dom';

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
          <p>Feel free to check out my <a href="https://github.com/laurasprauer">GitHub</a> or send me an email at <a href="mailto:lspraue@gmail.com">lspraue@gmail.com</a> if you would like to connect!</p>
        </div>
        <div className={styles.blackBox} />
        <div className={styles.whiteBox} />
      </div>
    </div>
  );
}

export default About;
