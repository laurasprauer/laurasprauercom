import React from 'react';
import PropTypes from 'prop-types';

import Link from '@components/link';
import Social from '@components/social';
import Name from '@components/name';

import * as styles from './styles.module.scss';

export const Home = ({ darkmode }) => {
  return (
    <div className={`${styles.home} ${darkmode ? styles.darkmode : ''}`}>
      <div className={styles.block}>
        <Name darkmode={darkmode} />
      </div>
      <div className={styles.content}>
        <h1>Developer & Human</h1>
        <p>
          You had me at hello world --{' '}
          <Link darkmode={darkmode} to="/developer">
            Dev Resources
          </Link>
        </p>
        <p>
          Based on a true story --{' '}
          <Link darkmode={darkmode} to="/about">
            About Me
          </Link>
        </p>
        <div className={styles.social}>
          <Social
            icon="github"
            link="https://github.com/laurasprauer"
            darkmode={darkmode}
          />
          <Social
            icon="linkedin"
            link="https://www.linkedin.com/in/laurasprauer/"
            darkmode={darkmode}
          />
          <Social
            icon="bluesky"
            link="https://bsky.app/profile/laura-burns.bsky.social"
            darkmode={darkmode}
          />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  darkmode: PropTypes.bool,
};

Home.defaultProps = {};

export default Home;
