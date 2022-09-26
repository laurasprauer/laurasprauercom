import React from 'react';
import PropTypes from 'prop-types';

import Dot from './dot';
import Dash from './dash';

export const MorseCodeLetter = ({
  size,
  letterWidth,
  letterCode,
  letter,
  theme,
}) => {
  // define the letter codes to be displayed
  const displayLetterCodes = [];

  // loop through letterCode string
  if (letterCode) {
    for (let i = 0; i < letterCode.length; i += 1) {
      // if the code is a dot
      if (letterCode.charAt(i) === '.') {
        displayLetterCodes.push(
          <Dot
            key={`${letter}${i}${letterCode.charAt(i)}`}
            size={size}
            theme={theme}
          />
        );
      }

      // if the code is a dash
      if (letterCode.charAt(i) === '-') {
        displayLetterCodes.push(
          <Dash
            key={`${letter}${i}${letterCode.charAt(i)}`}
            size={size}
            theme={theme}
          />
        );
      }
    }
  }

  return <div style={{ width: `${letterWidth}px` }}>{displayLetterCodes}</div>;
};

MorseCodeLetter.propTypes = {
  size: PropTypes.number,
  letterWidth: PropTypes.number,
  letterCode: PropTypes.string,
  letter: PropTypes.string,
  theme: PropTypes.string,
};

MorseCodeLetter.defaultProps = {};

export default MorseCodeLetter;
