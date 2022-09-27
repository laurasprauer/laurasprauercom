import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MorseCodeLetter from './morseCodeLetter';
import * as styles from './styles.module.scss';

export const MorseCodeAnimate = ({
  windowHeight,
  windowWidth,
  total,
  letter,
  order,
  theme,
}) => {
  const [letterState, setLetterState] = useState({});

  // init letterState
  useEffect(() => {
    setLetterState(setInitialState());
  }, [windowHeight, windowWidth]);

  useEffect(() => {
    const item = document.getElementById(`${order}-${letter}`);

    if (letterState.direction && letterState.speed && letterState.defaultPos) {
      // begin animation from center values
      item.animate(
        [
          {
            transform: `translate(${letterState.defaultPos}px, 0)`,
          },
          {
            transform: `translate(${
              letterState.direction === 'left'
                ? `-${letterState.letterWidth}px`
                : `${windowWidth}px`
            }, 0)`,
          },
        ],
        {
          delay: 500,
          duration: letterState.speed,
          iterations: 1,
        }
      );

      //continue animation on infinity loop
      item.animate(
        [
          {
            transform: `translate(${
              letterState.direction === 'left'
                ? `${windowWidth}px`
                : `-${letterState.letterWidth}px`
            }, 0)`,
          },
          {
            transform: `translate(${
              letterState.direction === 'left'
                ? `-${letterState.letterWidth}px`
                : `${windowWidth}px`
            }, 0)`,
          },
        ],
        {
          duration: Math.floor(Math.random() * 6000) + 4000,
          iterations: Infinity,
          delay: letterState.speed + 500,
        }
      );
    }
  }, [letterState]);

  const defineLetterValues = () => {
    // define the object for letterValues
    const letterValues = {};

    // define the size of the dot and dash components, subtract 10 for padding
    const size = windowHeight / total - 10;

    // save the size as a value to be returned
    letterValues.size = size;

    // get the dot and dash width properties needed to calc the total width
    const dotWidth = windowHeight / total;
    const dashWidth = size / 0.554545 + 10;

    // define the the letterCode and letterWidth based on the passed letter prop
    let letterCode = null;
    let letterWidth = null;
    switch (letter) {
      case 'A':
        letterCode = '.-';
        letterWidth = dotWidth + dashWidth;
        break;
      case 'E':
        letterCode = '.';
        letterWidth = dotWidth;
        break;
      case 'L':
        letterCode = '.-..';
        letterWidth = dotWidth * 3 + dashWidth;
        break;
      case 'P':
        letterCode = '.--.';
        letterWidth = dotWidth * 2 + dashWidth * 2;
        break;
      case 'R':
        letterCode = '.-.';
        letterWidth = dotWidth * 2 + dashWidth;
        break;
      case 'S':
        letterCode = '...';
        letterWidth = dotWidth * 3;
        break;
      case 'U':
        letterCode = '..-';
        letterWidth = dotWidth * 2 + dashWidth;
        break;
      default:
      // if the icon prop does not match or is undefined, do nothing
    }

    // save the letterCode and letterWidth as values to be returned
    letterValues.letterCode = letterCode;
    letterValues.letterWidth = letterWidth;

    return letterValues;
  };

  const setInitialState = () => {
    let initialState = {};

    // if order is an even number, direction is left, if odd it's right
    let direction = 'right';
    if (order % 2 === 0) {
      direction = 'left';
    }

    // define the value for the letterCode
    const letterValues = defineLetterValues();

    // get a random default starting position
    const defaultPos = Math.floor(Math.random() * (windowWidth - 20)) + 1;

    // figure out the distance the letter will travel on load
    // if the letter is moving right, distance traveled is the window width minus the default pos
    const totalDistancePossible = windowWidth + letterValues.letterWidth;
    let distanceToTravel =
      totalDistancePossible - defaultPos - letterValues.letterWidth;
    if (direction === 'left') {
      // if the letter is moving left, distance traveled is the default pos plus the width of the letter
      distanceToTravel = defaultPos + letterValues.letterWidth;
    }

    // figure out the speed based on the percent of the distance being traveled
    const percentToTravel = distanceToTravel / totalDistancePossible;
    const speed = Math.round(
      (Math.floor(Math.random() * 6000) + 4000) * percentToTravel
    );

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
  };

  // define the inline styles
  const letterStyle = {
    top: `${(windowHeight / total) * order}px`,
    left: '0px',
  };

  return (
    <div className={styles.letter} style={letterStyle}>
      <div id={`${order}-${letter}`}>
        {letterState.size && (
          <MorseCodeLetter
            key={`${order}-${letter}`}
            size={letterState.size}
            letterCode={letterState.letterCode}
            letterWidth={letterState.letterWidth}
            letter={letter}
            theme={theme}
          />
        )}
      </div>
    </div>
  );
};

MorseCodeAnimate.propTypes = {
  darkmode: PropTypes.bool,
  windowHeight: PropTypes.number,
  windowWidth: PropTypes.number,
  total: PropTypes.number,
  order: PropTypes.number,
  letter: PropTypes.string,
  theme: PropTypes.string,
};

MorseCodeAnimate.defaultProps = {};

export default MorseCodeAnimate;
