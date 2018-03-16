import React from 'react';

// import styles
import styles from './styles.module.scss';

function About() {
  return (
    <div className={styles.container} >
      <div className={styles.wrapper} >
        <div className={styles.content} >
          <h1>Who Dis?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus mi sed lacus iaculis, vitae tincidunt quam volutpat. Sed nibh quam, luctus et ornare vitae, bibendum sed nunc. Morbi mattis non neque ut aliquet.</p>
        </div>
        <div className={styles.blackBox} />
        <div className={styles.whiteBox} />
      </div>
    </div>
  );
}

export default About;
