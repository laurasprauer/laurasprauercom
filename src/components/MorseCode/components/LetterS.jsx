import React from 'react';
import PropTypes from 'prop-types';

// import components
import Dot from '../../Dot';

function LetterS({ size }) {
  // render
  return (
    <div>
      <Dot size={size} />
      <Dot size={size} />
      <Dot size={size} />
    </div>
  );
}

LetterS.propTypes = {
  size: PropTypes.number.isRequired,
};

export default LetterS;
