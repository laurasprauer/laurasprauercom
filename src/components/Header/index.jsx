import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

function Header({
  pathname,
  darkMode,
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
  let contactClasses = `${styles.links}`;
  if (pathname === '/contact') {
    contactClasses = `${styles.links} ${styles.selected}`;
  }

  // RESOURCES
  let resourcesClasses = `${styles.links}`;
  if (pathname === '/resources') {
    resourcesClasses = `${styles.links} ${styles.selected}`;
  }

  // if darkMode
  let containerClasses = `${styles.container}`;
  if ((pathname === '/resources' || pathname === '/resume') && !darkMode) {
    containerClasses = `${styles.container} ${styles.darkMode}`;
  }

  return (
    <div className={containerClasses}>
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
        <li className={contactClasses}>
          <Link className={styles.item3} to="/contact">
            CONTACT
            <svg width="97" height="85" viewBox="0 0 97 85" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 71L5 85l3.86-14H0V0h97v71H35zM11 20v12h75V20H11zm0 20v12h62V40H11z" fill="#000" fillRule="evenodd" />
            </svg>
          </Link>
        </li>
        <li className={resourcesClasses}>
          <Link className={styles.item4} to="/resources">
            RESOURCES
            <svg width="25" height="25.001" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <path d="m24.38 10.175-2.231-.268a9.962 9.962 0 0 0-.992-2.401l1.387-1.763a.723.723 0 0 0-.057-.934l-2.299-2.3a.726.726 0 0 0-.934-.057l-1.766 1.389a9.825 9.825 0 0 0-2.396-.99L14.825.62a.724.724 0 0 0-.7-.62h-3.252a.723.723 0 0 0-.699.62l-.268 2.231a9.904 9.904 0 0 0-2.398.991L5.743 2.455a.724.724 0 0 0-.933.056l-2.3 2.301a.725.725 0 0 0-.054.934L3.842 7.51a9.879 9.879 0 0 0-.991 2.4l-2.23.267a.724.724 0 0 0-.621.7v3.252c0 .344.279.657.621.699l2.231.268a9.94 9.94 0 0 0 .991 2.396l-1.386 1.766a.726.726 0 0 0 .057.934l2.296 2.301a.726.726 0 0 0 .933.057l1.766-1.39c.744.43 1.548.765 2.398.991l.268 2.23c.041.342.355.62.699.62h3.252a.721.721 0 0 0 .699-.62l.268-2.23a9.928 9.928 0 0 0 2.398-.991l1.766 1.387c.271.212.69.187.933-.056l2.299-2.301a.724.724 0 0 0 .056-.935l-1.388-1.764a9.893 9.893 0 0 0 .992-2.397l2.23-.268a.722.722 0 0 0 .621-.699v-3.252a.72.72 0 0 0-.62-.7zM12.501 18.75a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5z"/>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  darkMode: PropTypes.string.isRequired,
};

export default Header;
