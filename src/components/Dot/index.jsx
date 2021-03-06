import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

export default class Dot extends React.Component {
  constructor(props) {
    super(props);

    // get a random number between 0 and 1, this will determine if the dot/dash is white or black
    this.state = {
      classStyle: Math.floor(Math.random() * 2),
    };
  }

  render() {
    // is the dot style black or white?
    let dotClassName = styles.dotBlack;
    if (this.state.classStyle === 1) {
      dotClassName = styles.dotWhite;
    }

    // define the dot svg
    const displayDot = (
      <svg
        width={this.props.size}
        height={this.props.size}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={dotClassName}
      >
        <g fillRule="nonzero" fill="none">
          <circle
            cx="100"
            cy="100"
            r="100"
            fill="#000"
            className={styles.circleFill}
          />
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
    // render
    return (displayDot);
  }
}

Dot.propTypes = {
  size: PropTypes.number.isRequired,
};
