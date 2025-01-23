import React from 'react';
import PropTypes from 'prop-types';

import SVG from '@components/svg';
import Link from '@components/link';

import * as styles from './styles.module.scss';

export const Navigation = ({ pathname, darkmode }) => {
  // define the class names for the navigation links

  // HOME
  let homeClasses = `${styles.links}`;
  if (pathname === '/') {
    homeClasses = `${styles.links} ${styles.selected}`;
  }

  // DEVELOPER
  let developerClasses = `${styles.links}`;
  if (pathname === '/developer') {
    developerClasses = `${styles.links} ${styles.selected}`;
  }

  // ABOUT
  let aboutClasses = `${styles.links}`;
  if (pathname === '/about') {
    aboutClasses = `${styles.links} ${styles.selected}`;
  }

  // CONTACT
  let contactClasses = `${styles.links}`;
  if (pathname === '/contact') {
    contactClasses = `${styles.links} ${styles.selected}`;
  }

  // if darkmode
  let containerClasses = `${styles.container}`;
  if (darkmode) {
    containerClasses = `${styles.container} ${styles.darkmode}`;
  }

  return (
    <div className={containerClasses}>
      <ul>
        <li className={homeClasses}>
          <Link className={styles.item1} to="/">
            HOME
            <SVG name="home" />
          </Link>
        </li>
        <li className={developerClasses}>
          <Link className={styles.item2} to="/developer">
            DEVELOPER
            <SVG name="code" />
          </Link>
        </li>
        <li className={aboutClasses}>
          <Link className={styles.item3} to="/about">
            ABOUT
            <SVG name="about" />
          </Link>
        </li>
        <li className={contactClasses}>
          <Link className={styles.item4} to="/contact">
            CONTACT
            <SVG name="message" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

Navigation.propTypes = {
  pathname: PropTypes.string,
  darkmode: PropTypes.bool,
};

Navigation.defaultProps = {};

export default Navigation;
