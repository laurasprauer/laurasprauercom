import React from 'react';
import { Link } from 'react-router-dom';

// import styles
import styles from './styles.module.scss';

function About() {
  const date = new Date();
  const exp = date.getFullYear() - 2014;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>Hello</h1>
          <p>
My name is Laura Sprauer, and I&#39;ve been developing on the web for the past
            {exp}
            {' '}
years. Starting off my career as an interactive designer before fully transitioning to a front end developer has given me a unique perspective - and I love it!
          </p>
          <p>
Interested in connecting?
            <Link to="/contact">Let&#39;s Talk!</Link>
          </p>
        </div>
        <div className={styles.blackBox} />
        <div className={styles.whiteBox} />
      </div>
    </div>
  );
}

export default About;
