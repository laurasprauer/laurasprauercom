import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import styles
import styles from './styles.module.scss';

function Resources({
  darkMode,
}) {
  // add darkMode class if darkMode is true
  let containerClasses = `${styles.container}`;
  if (darkMode) {
    containerClasses = `${styles.container} ${styles.darkMode}`;
  }

  const arrow = (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 17.898C9 18.972 10.2649 19.546 11.0731 18.8388L17.3838 13.3169C18.1806 12.6197 18.1806 11.3801 17.3838 10.6829L11.0731 5.16108C10.2649 4.45388 9 5.02785 9 6.1018V17.898Z"/>
    </svg>
  );

  return (
    <div className={containerClasses}>
      <div className={styles.wrapper}>
        <h1>Resources</h1>
        <div className={styles.resources}>
          <Link to="/momentum-2021">
            <div>JavaScript History</div>
            <div>momentum 2021 talk &amp; blog post {arrow}</div>
          </Link>
          <Link to="/resume">
            <div>Resume</div>
            <div>expierence &amp; skills {arrow}</div>
          </Link>
          <a href="https://www.instagram.com/sprauer.art/" target="_blank" rel="noreferrer">
            <div>@sprauer.art</div>
            <div>till death do we art {arrow}</div>
          </a>
        </div>
      </div>
    </div>
  );
}

Resources.propTypes = {
  darkMode: PropTypes.string.isRequired,
};

export default Resources;
