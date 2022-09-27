import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MorseCodeAnimate from './morseCodeAnimate';

import * as styles from './styles.module.scss';

export const MorseCode = ({ darkmode, theme }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [displayAnimation, setDisplayAnimation] = useState(false);

  useEffect(() => {
    if (window && document) {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          oldWidth: windowSize.width,
          oldHeight: windowSize.height,
        });
      }
      // Add event listener
      window.addEventListener('resize', handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    // force animation reload on window resize
    if (windowSize.width && windowSize.width !== windowSize.oldWidth) {
      setDisplayAnimation(false);
      setTimeout(() => {
        setDisplayAnimation(true);
      }, 100);
    }
  }, [windowSize]);

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
