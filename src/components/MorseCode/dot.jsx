import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as styles from './styles.module.scss';

export const Dot = ({ size, theme }) => {
  // get a random number between 0 and 1, this will determine if the dot/dash is solid or outline
  const [classStyle, setClassStyle] = useState(Math.floor(Math.random() * 2));

  // is the dot style black or white?
  let dotClassName = styles.dotSolid;
  if (classStyle === 1) {
    dotClassName = styles.dotOutline;
  }

  if (theme === 'circle') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={dotClassName}
      >
        <g fillRule="nonzero" fill="none">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="#000"
            stroke="#fff"
            strokeWidth={20}
            className={styles.circleStroke}
          />
        </g>
      </svg>
    );
  }

  if (theme === 'square') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={dotClassName}
      >
        <g>
          <rect
            stroke="#fff"
            fill="#000"
            strokeWidth={20}
            x="10"
            y="10"
            width="160"
            height="160"
            className={styles.circleStroke}
          />
        </g>
      </svg>
    );
  }

  // always solid
  if (theme === 'line') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={styles.dotNoOutline}
      >
        <g>
          <polygon
            id="Rectangle"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            points="10 10 90 10 90 18.8888889 10 18.8888889"
            className={styles.circleStroke}
          ></polygon>
          <polygon
            id="Rectangle"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            points="10 27.7777778 90 27.7777778 90 36.6666667 10 36.6666667"
            className={styles.circleStroke}
          ></polygon>
          <polygon
            id="Rectangle"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            points="10 45.5555556 90 45.5555556 90 54.4444444 10 54.4444444"
            className={styles.circleStroke}
          ></polygon>
          <polygon
            id="Rectangle"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            points="10 63.3333333 90 63.3333333 90 72.2222222 10 72.2222222"
            className={styles.circleStroke}
          ></polygon>
          <polygon
            id="Rectangle"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            points="10 81.1111111 90 81.1111111 90 90 10 90"
            className={styles.circleStroke}
          ></polygon>
        </g>
      </svg>
    );
  }

  return null;
};

Dot.propTypes = {
  theme: PropTypes.string,
  size: PropTypes.number,
};

Dot.defaultProps = {};

export default Dot;
