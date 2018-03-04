import React from 'react';
import PropTypes from 'prop-types';

// import components
import Dot from '../Dot';
import Dash from '../Dash';

function MorseCodeLetter({
  size, letterCode, letterWidth, letter,
}) {
  // define the letter codes to be displayed
  const displayLetterCodes = [];

  // loop through letterCode string
  for (let i = 0; i < letterCode.length; i += 1) {
    // if the code is a dot
    if (letterCode.charAt(i) === '.') {
      displayLetterCodes.push(<Dot key={`${letter}${i}${letterCode.charAt(i)}`} size={size} />);
    }

    // if the code is a dash
    if (letterCode.charAt(i) === '-') {
      displayLetterCodes.push(<Dash key={`${letter}${i}${letterCode.charAt(i)}`} size={size} />);
    }
  }

  // render
  return (
    <div style={{ width: `${letterWidth}px` }}>
      {displayLetterCodes}
    </div>
  );
}

MorseCodeLetter.propTypes = {
  size: PropTypes.number.isRequired,
  letterCode: PropTypes.string.isRequired,
  letterWidth: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired,
};

export default MorseCodeLetter;
