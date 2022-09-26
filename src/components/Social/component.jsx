import React from 'react';
import PropTypes from 'prop-types';
import Link from '../link/';
import SVG from '../svg/';

import * as styles from './styles.module.scss';

export const Social = ({ icon, link, darkmode }) => {
  return (
    <div>
      <div className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}>
        <Link to={link} target="_blank">
          <SVG name={icon} />
        </Link>
      </div>
    </div>
  );
};

Social.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  darkmode: PropTypes.bool,
};

Social.defaultProps = {};

export default Social;
