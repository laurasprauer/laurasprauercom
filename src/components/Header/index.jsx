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

  // CONTACT
  // let contactClasses = `${styles.links}`;
  // if (pathname === '/contact') {
  //   contactClasses = `${styles.links} ${styles.selected}`;
  // }

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
            <svg width="80" height="90" viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg">
              <circle cx="39.5" cy="22.5" r="22.5" fill="#000" />
              <path d="M29 54h22c16.016 0 29 12.984 29 29v7H0v-7c0-16.016 12.984-29 29-29z" fill="#000" fillRule="evenodd" />
            </svg>
          </Link>
        </li>
        {/* <li className={contactClasses}>
          <Link className={styles.item3} to="/contact">
            CONTACT
            <svg width="97" height="85" viewBox="0 0 97 85" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 71L5 85l3.86-14H0V0h97v71H35zM11 20v12h75V20H11zm0 20v12h62V40H11z" fill="#000" fillRule="evenodd" />
            </svg>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
