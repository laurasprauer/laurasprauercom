/* eslint-disable no-debugger, no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

export default class DownloadResume extends React.Component {
  downloadPdf = () => {
    console.log('hey');
  }

  render() {
    // add darkMode class if darkMode is true
    let containerClasses = `${styles.container}`;
    if (this.props.darkMode) {
      containerClasses = `${styles.container} ${styles.darkMode}`;
    }

    return (
      <div className={containerClasses} onClick={this.downloadPdf} role="button" aria-label="Download Resume PDF">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.825 21.825"><path d="M16.791 13.254a1.112 1.112 0 011.587 0 1.14 1.14 0 010 1.587l-6.65 6.651a1.14 1.14 0 01-.809.333c-.317 0-.603-.127-.81-.333l-6.65-6.651c-.444-.444-.444-1.143 0-1.587s1.143-.444 1.587 0l4.746 4.762V1.111A1.116 1.116 0 0110.918 0c.619 0 1.111.492 1.111 1.111v16.904l4.762-4.761z"/></svg>
        <div className={styles.line}/>
        <div className={styles.text}>PDF</div>
      </div>
    );
  }
}

DownloadResume.propTypes = {
  darkMode: PropTypes.string.isRequired,
};
