import React from 'react';
import PropTypes from 'prop-types';

// import components
import Dot from '../../Dot';

function LetterS({ size, bgColor }) {
  // render
  return (
    <div>
      <Dot size={size} bgColor={bgColor} />
      <Dot size={size} bgColor={bgColor} />
      <Dot size={size} bgColor={bgColor} />
    </div>
  );
}

LetterS.propTypes = {
  size: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default LetterS;
