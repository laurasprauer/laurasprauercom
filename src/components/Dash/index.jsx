import React from 'react';
import PropTypes from 'prop-types';

// import styles
// import styles from './styles.module.scss';

function Dash({ size, bgColor }) {
  // define the dot svg
  const displayDash = (
    <svg width={`${size / 0.53636}`} height={size} viewBox="0 0 110 59" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.5 0h51C96.792 0 110 13.208 110 29.5S96.792 59 80.5 59h-51C13.208 59 0 45.792 0 29.5S13.208 0 29.5 0z" fill={bgColor} fillRule="evenodd" />
    </svg>
  );
  // render
  return (displayDash);
}

Dash.propTypes = {
  size: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Dash;
