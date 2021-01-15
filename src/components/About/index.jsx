import React from 'react';
import { Link } from 'react-router-dom';

// import styles
import styles from './styles.module.scss';

function About() {
  const date = new Date();
  const exp = date.getFullYear() - 2013;
  const imageSrc = `/images/laura-img-${Math.floor(Math.random() * 3) + 1}.jpg`;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.aboutHeader}>
            <img src={imageSrc} alt="Laura Sprauer" />
            <div className={styles.heyThere}><h1>Hey&nbsp;&nbsp;There</h1></div>
          </div>
          <p>
            My name is Laura Sprauer, and I&#39;ve been developing on the web for the past
            {' '}{exp}{' '}
            years. Starting off my career as an interactive designer before fully transitioning to a front end engineer has given me a unique perspective - and I love it!
          </p>
          <p>
            During the day I build slick user interfaces for a more beautiful and easy to use web - during the evenings you can find me walking my dog, spending quality time with friends and family, and deep diving into all things arts and crafts.
          </p>
          <p>
            Interested in connecting? I&#39;m available for new opportunities, speaking engagments, or networking over coffee. &nbsp;
            <Link to="/contact">Let&#39;s Talk!</Link>
          </p>
          <p>
            Want to learn more about my professional experience? &nbsp;
            <Link to="/resume">View My Resume</Link> &nbsp;
            or connect with me on &nbsp;
            <a href="https://www.linkedin.com/in/laurasprauer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </div>
        <div className={styles.blackBox} />
        <div className={styles.whiteBox} />
      </div>
    </div>
  );
}

export default About;
