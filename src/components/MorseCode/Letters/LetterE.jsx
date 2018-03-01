import React from 'react';
import PropTypes from 'prop-types';

// import components
import Dot from '../../Dot';

function LetterE({ size, bgColor }) {
  // render
  return (
    <div>
      <Dot size={size} bgColor={bgColor} />
    </div>
  );
}

LetterE.propTypes = {
  size: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default LetterE;
