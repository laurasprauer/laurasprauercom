import React from 'react';
import PropTypes from 'prop-types';

// import components
import Dot from '../../Dot';

function LetterE({ size }) {
  // render
  return (
    <div>
      <Dot size={size} />
    </div>
  );
}

LetterE.propTypes = {
  size: PropTypes.number.isRequired,
};

export default LetterE;
