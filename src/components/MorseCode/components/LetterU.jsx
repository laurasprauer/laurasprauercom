import React from 'react';
import PropTypes from 'prop-types';

// import components
import Dot from '../../Dot';
import Dash from '../../Dash';

function LetterU({ size }) {
  // render
  return (
    <div>
      <Dot size={size} />
      <Dot size={size} />
      <Dash size={size} />
    </div>
  );
}

LetterU.propTypes = {
  size: PropTypes.number.isRequired,
};

export default LetterU;
