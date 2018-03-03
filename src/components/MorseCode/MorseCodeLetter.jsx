import React from 'react';
import PropTypes from 'prop-types';

// import components
import Dot from '../Dot';
import Dash from '../Dash';

function MorseCodeLetter({
  letter, size, rowPadding, inbetweenMargin,
}) {
  // define the inline styles
  const letterStyle = {
    padding: `${rowPadding}px`,
  };

  // define what letter will be displayed
  let displayLetter = null;

  switch (letter) {
    case 'A':
      displayLetter = (
        <span>
          <Dot size={size} margin={inbetweenMargin} />
          <Dash size={size} margin={inbetweenMargin} />
        </span>
      );
      break;
    case 'E':
      displayLetter = (
        <span>
          <Dot size={size} margin={inbetweenMargin} />
        </span>
      );
      break;
    case 'L':
      displayLetter = (
        <span>
          <Dot size={size} margin={inbetweenMargin} />
          <Dash size={size} margin={inbetweenMargin} />
          <Dot size={size} margin={inbetweenMargin} />
          <Dot size={size} margin={inbetweenMargin} />
        </span>
      );
      break;
    case 'P':
      displayLetter = (
        <span>
          <Dot size={size} margin={inbetweenMargin} />
          <Dash size={size} margin={inbetweenMargin} />
          <Dash size={size} margin={inbetweenMargin} />
          <Dot size={size} margin={inbetweenMargin} />
        </span>
      );
      break;
    case 'R':
      displayLetter = (
        <span>
          <Dot size={size} margin={inbetweenMargin} />
          <Dash size={size} margin={inbetweenMargin} />
          <Dot size={size} margin={inbetweenMargin} />
        </span>
      );
      break;
    case 'S':
      displayLetter = (
        <span>
          <Dot size={size} margin={inbetweenMargin} />
          <Dot size={size} margin={inbetweenMargin} />
          <Dot size={size} margin={inbetweenMargin} />
        </span>
      );
      break;
    case 'U':
      displayLetter = (
        <span>
          <Dot size={size} margin={inbetweenMargin} />
          <Dot size={size} margin={inbetweenMargin} />
          <Dash size={size} margin={inbetweenMargin} />
        </span>
      );
      break;
    default:
      // if the icon prop does not match or is undefined, do nothing
  }

  return (
    <div style={letterStyle}>
      {displayLetter}
    </div>
  );
}

MorseCodeLetter.propTypes = {
  letter: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  rowPadding: PropTypes.number.isRequired,
  inbetweenMargin: PropTypes.number.isRequired,
};

export default MorseCodeLetter;
