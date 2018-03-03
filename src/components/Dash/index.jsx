import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

function Dash({
  size,
}) {
  // define the dot svg
  const displayDash = (
    <svg
      width={`${size / 0.554545}`}
      height={size}
      viewBox="0 0 110 61"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.dash}
    >
      <g fillRule="evenodd">
        <path d="M29.5 0h51C96.792 0 110 13.544 110 30.25S96.792 60.5 80.5 60.5h-51C13.208 60.5 0 46.956 0 30.25S13.208 0 29.5 0z" fill="#000" className={styles.dashFill} />
        <path d="M29.5 6.05c-12.916 0-23.45 10.802-23.45 24.2s10.534 24.2 23.45 24.2h51c12.916 0 23.45-10.802 23.45-24.2S93.416 6.05 80.5 6.05h-51z" fill="#000" fillOpacity={0} stroke="#fff" strokeWidth={size * 0.2} className={styles.dashStroke} />
      </g>
    </svg>
  );
  // render
  return (displayDash);
}

Dash.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Dash;
