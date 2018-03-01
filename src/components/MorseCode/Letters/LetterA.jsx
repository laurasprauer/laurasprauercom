import React from 'react';
import PropTypes from 'prop-types';

// import components
import Dot from '../../Dot';
import Dash from '../../Dash';

function LetterA({ size, bgColor }) {
  // render
  return (
    <div>
      <Dot size={size} bgColor={bgColor} />
      <Dash size={size} bgColor={bgColor} />
    </div>
  );
}

LetterA.propTypes = {
  size: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default LetterA;
