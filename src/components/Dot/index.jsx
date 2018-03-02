import React from 'react';
import PropTypes from 'prop-types';

// import styles
// import styles from './styles.module.scss';

function Dot({ size }) {
  // define the dot svg
  const displayDot = (
    <svg height={size} width={size} viewBox={`0 0 ${size * 2} ${size * 2}`} xmlns="http://www.w3.org/2000/svg">
      <circle cx={size} cy={size} r={size} fill="#000" />
    </svg>
  );
  // render
  return (displayDot);
}

Dot.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Dot;
