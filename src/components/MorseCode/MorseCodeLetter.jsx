import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

// import components
import Dot from '../Dot';
import Dash from '../Dash';

export default class MorseCodeLetter extends React.Component {
  constructor(props) {
    super(props);

    // if order is an even number, direction is left, if odd it's right
    let direction = 'right';
    if (this.props.order % 2 === 0) {
      direction = 'left';
    }

    this.state = {
      direction,
      animationPos: `${Math.floor(Math.random() * 100) + 1}%`,
    };
  }

  render() {
    // define the inline styles
    const letterStyle = {
      top: `${(this.props.windowHeight / this.props.total) * this.props.order}px`,
      left: `${this.state.animationPos}`,
    };

    // define the size of the dot and dash components, subtract 10 for padding
    const size = (this.props.windowHeight / this.props.total) - 10;

    // also get the dot and dash width
    const dotWidth = this.props.windowHeight / this.props.total;
    const dashWidth = (size / 0.554545) + 10;

    // define what letter will be displayed
    let displayLetter = null;

    switch (this.props.letter) {
      case 'A':
        displayLetter = (
          <div
            style={{ width: `${dotWidth + (dashWidth)}px` }}
          >
            <Dot size={size} />
            <Dash size={size} />
          </div>
        );
        break;
      case 'E':
        displayLetter = (
          <div
            style={{ width: `${dotWidth}px` }}
          >
            <Dot size={size} />
          </div>
        );
        break;
      case 'L':
        displayLetter = (
          <div
            style={{ width: `${(dotWidth * 3) + (dashWidth)}px` }}
          >
            <Dot size={size} />
            <Dash size={size} />
            <Dot size={size} />
            <Dot size={size} />
          </div>
        );
        break;
      case 'P':
        displayLetter = (
          <div
            style={{ width: `${(dotWidth * 2) + (dashWidth * 2)}px` }}
          >
            <Dot size={size} />
            <Dash size={size} />
            <Dash size={size} />
            <Dot size={size} />
          </div>
        );
        break;
      case 'R':
        displayLetter = (
          <div
            style={{ width: `${(dotWidth * 2) + dashWidth}px` }}
          >
            <Dot size={size} />
            <Dash size={size} />
            <Dot size={size} />
          </div>
        );
        break;
      case 'S':
        displayLetter = (
          <div
            id="hey"
            onClick={this.animate}
            style={{ width: `${(dotWidth * 3)}px` }}
          >
            <Dot size={size} />
            <Dot size={size} />
            <Dot size={size} />
          </div>
        );
        break;
      case 'U':
        displayLetter = (
          <div
            style={{ width: `${(dotWidth * 2) + dashWidth}px` }}
          >
            <Dot size={size} />
            <Dot size={size} />
            <Dash size={size} />
          </div>
        );
        break;
      default:
        // if the icon prop does not match or is undefined, do nothing
    }

    return (
      <div className={styles.letter} style={letterStyle}>
        {displayLetter}
      </div>
    );
  }
}

MorseCodeLetter.propTypes = {
  letter: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  windowWidth: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
};
