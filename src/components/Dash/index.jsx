import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

export default class Dash extends React.Component {
  constructor(props) {
    super(props);

    // get a random number between 0 and 1, this will determine if the dot/dash is white or black
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
        width={this.props.size * 1.75}
        height={this.props.size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 200"
        className={dashClassName}
      >
        <g fillRule="nonzero" fill="none">
          <path
            d="M100 200c.699 0 151.344-.007 152.04-.021C306.303 198.865 350 154.529 350 100c0-54.495-43.746-98.808-97.96-99.976C251.31.008 100.734 0 100 0 44.772 0 0 44.772 0 100s44.772 100 100 100z"
            fill="#000"
            className={styles.dashFill}
          />
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
    // render
    return (displayDash);
  }
}

Dash.propTypes = {
  size: PropTypes.number.isRequired,
};
