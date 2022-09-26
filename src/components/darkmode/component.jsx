import React from 'react';
import PropTypes from 'prop-types';

import SVG from '../svg/index';

import * as styles from './styles.module.scss';

export const Darkmode = ({ darkmode, toggleDarkmode }) => {
  return (
    <div
      className={`
        ${styles.container}
        ${darkmode ? styles.lightmode : styles.darkmode}
      `}
      onClick={toggleDarkmode}
    >
      {darkmode ? <SVG name="sun" /> : <SVG name="moon" />}
    </div>
  );
};

Darkmode.propTypes = {
  toggleDarkmode: PropTypes.func,
  darkMode: PropTypes.bool,
};

Darkmode.defaultProps = {};

export default Darkmode;
