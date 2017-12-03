import React, { Component } from 'react';
import styles from "./styles.css";

class NotFound extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h1>I didn't find what you were looking for</h1>
      </div>
    );
  }
}

export default NotFound;
