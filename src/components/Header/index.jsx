import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

function Header({
  pathname,
}) {
  // define the class names for the header links

  // HOME
  let homeClasses = `${styles.links}`;
  if (pathname === '/') {
    homeClasses = `${styles.links} ${styles.selected}`;
  }

  // ABOUT
  let aboutClasses = `${styles.links}`;
  if (pathname === '/about') {
    aboutClasses = `${styles.links} ${styles.selected}`;
  }

  return (
    <div className={styles.container}>
      <ul>
        <li className={homeClasses}>
          <Link className={styles.item1} to="/">
            HOME
            <svg width="100" height="90" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
              <path d="M46.524 90V48.503H19.786V90H0V36.92L50 0l50 36.92V90H46.524zM58.29 48.503V65.21h26.738V48.503H58.289z" fill="#000" fillRule="evenodd" />
            </svg>
          </Link>
        </li>
        <li className={aboutClasses}>
          <Link className={styles.item2} to="/about">
            ABOUT
          </Link>
        </li>
      </ul>
    </div>
  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
