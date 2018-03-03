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
      animationStartPos: Math.floor(Math.random() * this.props.windowWidth) + 1,
    };
  }

  render() {
    // define the inline styles
    const letterStyle = {
      top: `${(this.props.windowHeight / this.props.total) * this.props.order}px`,
    };

    // define the size of the dot and dash components, subtract 10 for padding
    const size = (this.props.windowHeight / this.props.total) - 10;

    // define what letter will be displayed
    let displayLetter = null;

    switch (this.props.letter) {
      case 'A':
        displayLetter = (
          <span>
            <Dot size={size} />
            <Dash size={size} />
          </span>
        );
        break;
      case 'E':
        displayLetter = (
          <span>
            <Dot size={size} />
          </span>
        );
        break;
      case 'L':
        displayLetter = (
          <span>
            <Dot size={size} />
            <Dash size={size} />
            <Dot size={size} />
            <Dot size={size} />
          </span>
        );
        break;
      case 'P':
        displayLetter = (
          <span>
            <Dot size={size} />
            <Dash size={size} />
            <Dash size={size} />
            <Dot size={size} />
          </span>
        );
        break;
      case 'R':
        displayLetter = (
          <span>
            <Dot size={size} />
            <Dash size={size} />
            <Dot size={size} />
          </span>
        );
        break;
      case 'S':
        displayLetter = (
          <span>
            <Dot size={size} />
            <Dot size={size} />
            <Dot size={size} />
          </span>
        );
        break;
      case 'U':
        displayLetter = (
          <span>
            <Dot size={size} />
            <Dot size={size} />
            <Dash size={size} />
          </span>
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
