import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

export default class Dash extends React.Component {
  constructor(props) {
    super(props);

    //get a random number between 0 and 1, this will determine if the dot/dash is white or black
    this.state = {
      classStyle: Math.floor(Math.random() * 2),
    };
  }

  render() {
    // is the dot style black or white?
    let dashClassName = styles.dashBlack;
    if (this.state.classStyle === 1) {
      dashClassName = styles.dashWhite;
    }

    // define the dot svg
    const displayDash = (
      <svg
        width={`${this.props.size / 0.554545}`}
        height={this.props.size}
        viewBox="0 0 110 61"
        xmlns="http://www.w3.org/2000/svg"
        className={dashClassName}
      >
        <g fillRule="evenodd">
          <path d="M29.5 0h51C96.792 0 110 13.544 110 30.25S96.792 60.5 80.5 60.5h-51C13.208 60.5 0 46.956 0 30.25S13.208 0 29.5 0z" fill="#000" className={styles.dashFill} />
          <path d="M29.5 6.05c-12.916 0-23.45 10.802-23.45 24.2s10.534 24.2 23.45 24.2h51c12.916 0 23.45-10.802 23.45-24.2S93.416 6.05 80.5 6.05h-51z" fill="#000" fillOpacity={0} stroke="#fff" strokeWidth={this.props.size * 0.2} className={styles.dashStroke} />
        </g>
      </svg>
    );
    // render
    return (displayDash);
  }
}

Dash.propTypes = {
  size: PropTypes.number.isRequired,
};
