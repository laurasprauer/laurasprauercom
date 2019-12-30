import React from 'react';
import { Link } from 'react-router-dom';

// import styles
import styles from './styles.module.scss';

function Thanks() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Thanks!</h1>
        <p>
I received your message and will get back to you as soon as I can.
          {' '}<Link to="/">Go Back Home</Link>
.
        </p>
      </div>
    </div>
  );
}

export default Thanks;
