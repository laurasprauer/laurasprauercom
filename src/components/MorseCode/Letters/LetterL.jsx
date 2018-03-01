import React from 'react';
import PropTypes from 'prop-types';

// import components
import Dot from '../../Dot';
import Dash from '../../Dash';

function LetterL({ size, bgColor }) {
  // render
  return (
    <div>
      <Dot size={size} bgColor={bgColor} />
      <Dash size={size} bgColor={bgColor} />
      <Dot size={size} bgColor={bgColor} />
      <Dot size={size} bgColor={bgColor} />
    </div>
  );
}

LetterL.propTypes = {
  size: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default LetterL;
