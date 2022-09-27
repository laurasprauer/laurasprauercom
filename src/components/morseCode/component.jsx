import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import MorseCodeAnimate from './morseCodeAnimate';

import * as styles from './styles.module.scss';

export const MorseCode = ({ darkmode, theme }) => {
  const [windowSize, _setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [displayAnimation, setDisplayAnimation] = useState(false);
  const myStateRef = React.useRef(windowSize);
  const setMyState = (data) => {
    myStateRef.current = data;
    _setWindowSize(data);
  };

  useEffect(() => {
    if (window && document) {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setMyState({
          width: window.innerWidth,
          height: window.innerHeight,
          oldWidth: myStateRef.current.width,
          oldHeight: myStateRef.current.height,
        });
      }
      // Add event listener
      window.addEventListener('resize', handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      setDisplayAnimation(true);
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const heightUpdated =
      windowSize.height &&
      getDifference(windowSize.height, windowSize.oldHeight) > 50;
    const widthUpdated =
      windowSize.width && windowSize.width !== windowSize.oldWidth;

    // force animation reload on window resize
    if (heightUpdated || widthUpdated) {
      setDisplayAnimation(false);
      setTimeout(() => {
        setDisplayAnimation(true);
      }, 100);
    }
  }, [windowSize]);

  const getDifference = (a, b) => {
    return Math.abs(a - b);
  };

  const fullName = [...'LAURASPRAUER'];

  return (
    <div className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}>
      {displayAnimation &&
        fullName.map((letter, i) => {
          return (
            <MorseCodeAnimate
              key={`${i}-${letter}`}
              letter={letter}
              order={i}
              total={fullName.length}
              windowHeight={windowSize.height}
              windowWidth={windowSize.width}
              theme={theme}
            />
          );
        })}
    </div>
  );
};

MorseCode.propTypes = {
  darkmode: PropTypes.bool,
  theme: PropTypes.string,
};

MorseCode.defaultProps = {};

export default MorseCode;
