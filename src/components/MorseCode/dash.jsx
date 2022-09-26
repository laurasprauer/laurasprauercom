import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as styles from './styles.module.scss';

export const Dash = ({ size, theme }) => {
  // get a random number between 0 and 1, this will determine if the dot/dash is white or black
  const [classStyle, setClassStyle] = useState(Math.floor(Math.random() * 2));

  // is the Dash style solid or outline?
  let dashClassName = styles.dashSolid;
  if (classStyle === 1) {
    dashClassName = styles.dashOutline;
  }

  if (theme === 'circle') {
    return (
      <svg
        width={size * 1.75}
        height={size}
        viewBox="0 0 350 200"
        className={dashClassName}
      >
        <g fillRule="nonzero" fill="none">
          <path
            d="M100 180c.63 0 151.414-.007 152.04-.022 43.312-1 77.96-36.425 77.96-79.978 0-43.532-34.677-78.943-77.96-79.977C251.393 20.008 100.65 20 100 20c-44.183 0-80 35.817-80 80s35.817 80 80 80z"
            fill="#000"
            strokeWidth={20}
            stroke="#fff"
            className={styles.dashStroke}
          />
        </g>
      </svg>
    );
  }

  if (theme === 'square') {
    return (
      <svg
        width={size * 1.75}
        height={size}
        viewBox="0 0 350 200"
        className={dashClassName}
      >
        <g fillRule="nonzero" fill="none">
          <rect
            stroke="#fff"
            fill="#000"
            strokeWidth={20}
            x="10"
            y="10"
            width="280"
            height="160"
            className={styles.dashStroke}
          />
        </g>
      </svg>
    );
  }

  // always solid
  if (theme === 'line') {
    return (
      <svg
        width={size * 1.75}
        height={size}
        viewBox="0 0 175 100"
        className={styles.dashNoOutline}
      >
        <g fillRule="nonzero" fill="none">
          <rect
            id="Rectangle"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            x="10"
            y="10"
            width="155"
            height="8.88888889"
            className={styles.dashStroke}
          ></rect>
          <rect
            id="Rectangle"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            x="10"
            y="27.7777778"
            width="155"
            height="8.88888889"
            className={styles.dashStroke}
          ></rect>
          <rect
            id="Rectangle"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            x="10"
            y="45.5555556"
            width="155"
            height="8.88888889"
            className={styles.dashStroke}
          ></rect>
          <rect
            id="Rectangle"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            x="10"
            y="63.3333333"
            width="155"
            height="8.88888889"
            className={styles.dashStroke}
          ></rect>
          <rect
            id="Rectangle"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            x="10"
            y="81.1111111"
            width="155"
            height="8.88888889"
            className={styles.dashStroke}
          ></rect>
        </g>
      </svg>
    );
  }

  return null;
};

Dash.propTypes = {
  theme: PropTypes.string,
  size: PropTypes.number,
};

Dash.defaultProps = {};

export default Dash;
