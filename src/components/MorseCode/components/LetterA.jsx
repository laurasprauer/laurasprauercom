import React from 'react';
import PropTypes from 'prop-types';

// import components
import Dot from '../../Dot';
import Dash from '../../Dash';

function LetterA({ size }) {
  // render
  return (
    <div>
      <Dot size={size} />
      <Dash size={size} />
    </div>
  );
}

LetterA.propTypes = {
  size: PropTypes.number.isRequired,
};

export default LetterA;
