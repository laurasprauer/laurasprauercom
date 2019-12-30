import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, transit } from 'react-css-transition';

// import styles
import styles from './styles.module.scss';

// import components
import MorseCodeLetter from './MorseCodeLetter';

CSSTransition.childContextTypes = {};

export default class MorseCodeAnimate extends React.Component {
  constructor(props) {
    super(props);

    const initialState = this.setInitialState(false);

    // we need to save the setInitialState function in state
    // so we can call it from getDerivedStateFromProps

    this.state = {
      direction: initialState.direction,
      defaultPos: initialState.defaultPos,
      speed: initialState.speed,
      size: initialState.size,
      letterCode: initialState.letterCode,
      letterWidth: initialState.letterWidth,
      active: initialState.active,
      setInitialState: this.setInitialState.bind(this),
    };
  }

  componentDidMount() {
    // set animation active to true once it has mounted
    this.toggleDisplayLetter();

    // when the tab is focused again, remount the animation
    window.addEventListener('focus', this.resetLetter, false);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.windowWidth !== prevState.windowWidth
      || nextProps.windowHeight !== prevState.windowHeight
    ) {
      // reset the initialState size and letterWidth
      const initialState = prevState.setInitialState(false);
      return {
        size: initialState.size,
        letterWidth: initialState.letterWidth,
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    // check if the letter should be reMounted
    if (prevState.active && !this.state.active) {
      this.toggleDisplayLetter();
    }
  }

  setInitialState = () => {
    let initialState = {};

    // if order is an even number, direction is left, if odd it's right
    let direction = 'right';
    if (this.props.order % 2 === 0) {
      direction = 'left';
    }

    // define the value for the letterCode
    const letterValues = this.defineLetterValues();

    // get a random default starting position
    const defaultPos = Math.floor(Math.random() * (this.props.windowWidth - 20)) + 1;

    // figure out the distance the letter will travel on load
    // if the letter is moving right, distance traveled is the window width minus the default pos
    const totalDistancePossible = this.props.windowWidth + letterValues.letterWidth;
    let distanceToTravel = totalDistancePossible - defaultPos - letterValues.letterWidth;
    if (direction === 'left') {
      // if the letter is moving left, distance traveled is the default pos plus the width of the letter
      distanceToTravel = defaultPos + letterValues.letterWidth;
    }

    // figure out the speed based on the percent of the distance being traveled
    const percentToTravel = distanceToTravel / totalDistancePossible;
    const speed = Math.round((Math.floor(Math.random() * 6000) + 4000) * percentToTravel);

    initialState = {
      direction,
      defaultPos,
      speed,
      size: letterValues.size,
      letterCode: letterValues.letterCode,
      letterWidth: letterValues.letterWidth,
      active: false,
    };

    return initialState;
  }

  toggleDisplayLetter = () => {
    this.setState({
      active: true,
    });
  }

  resetLetter = () => {
    this.setState((prevState) => ({
      active: false,
      defaultPos: ((prevState.direction === 'left') ? this.props.windowWidth : prevState.letterWidth * -1),
      speed: (Math.floor(Math.random() * 6000) + 4000),
    }));
  }

  defineLetterValues = () => {
    // define the object for letterValues
    const letterValues = {};

    // define the size of the dot and dash components, subtract 10 for padding
    const size = (this.props.windowHeight / this.props.total) - 10;

    // save the size as a value to be returned
    letterValues.size = size;

    // get the dot and dash width properties needed to calc the total width
    const dotWidth = this.props.windowHeight / this.props.total;
    const dashWidth = (size / 0.554545) + 10;

    // define the the letterCode and letterWidth based on the passed letter prop
    let letterCode = null;
    let letterWidth = null;
    switch (this.props.letter) {
      case 'A':
        letterCode = '.-';
        letterWidth = dotWidth + (dashWidth);
        break;
      case 'E':
        letterCode = '.';
        letterWidth = dotWidth;
        break;
      case 'L':
        letterCode = '.-..';
        letterWidth = (dotWidth * 3) + (dashWidth);
        break;
      case 'P':
        letterCode = '.--.';
        letterWidth = (dotWidth * 2) + (dashWidth * 2);
        break;
      case 'R':
        letterCode = '.-.';
        letterWidth = (dotWidth * 2) + dashWidth;
        break;
      case 'S':
        letterCode = '...';
        letterWidth = (dotWidth * 3);
        break;
      case 'U':
        letterCode = '..-';
        letterWidth = (dotWidth * 2) + dashWidth;
        break;
      default:
        // if the icon prop does not match or is undefined, do nothing
    }

    // save the letterCode and letterWidth as values to be returned
    letterValues.letterCode = letterCode;
    letterValues.letterWidth = letterWidth;

    return letterValues;
  }

  render() {
    // define the inline styles
    const letterStyle = {
      top: `${(this.props.windowHeight / this.props.total) * this.props.order}px`,
      left: '0px',
    };

    // now lets display the letter
    // define what letter will be displayed
    let displayLetter = null;

    // find out where this letter is translating to (right or left?)
    let transitionTo = `${this.props.windowWidth}px`;
    if (this.state.direction === 'left') {
      transitionTo = `-${this.state.letterWidth}px`;
    }

    displayLetter = (
      <CSSTransition
        defaultStyle={{ transform: `translate(${this.state.defaultPos}px, 0)` }}
        enterStyle={{
          transform: transit(`translate(${transitionTo}, 0)`, this.state.speed, 'linear'),
        }}
        activeStyle={{ transform: `translate(${transitionTo}, 0)` }}
        active={this.state.active}
        onTransitionComplete={this.resetLetter}
      >
        <MorseCodeLetter
          key={`${this.props.order}-${this.props.letter}`}
          size={this.state.size}
          letterCode={this.state.letterCode}
          letterWidth={this.state.letterWidth}
          letter={this.props.letter}
        />
      </CSSTransition>
    );

    return (
      <div className={styles.letter} style={letterStyle}>
        {displayLetter}
      </div>
    );
  }
}

MorseCodeAnimate.propTypes = {
  letter: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  windowWidth: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
};
