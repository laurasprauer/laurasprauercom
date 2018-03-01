import React from 'react';
import PropTypes from 'prop-types';

// import styles
// import styles from './styles.module.scss';

function Dot({ size, bgColor }) {
  // define the dot svg
  const displayDot = (
    <svg height={size} width={size} viewBox={`0 0 ${size * 2} ${size * 2}`} xmlns="http://www.w3.org/2000/svg">
      <circle cx={size} cy={size} r={size} fill={bgColor} />
    </svg>
  );
  // render
  return (displayDot);
}

Dot.propTypes = {
  size: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Dot;
