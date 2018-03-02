import React from 'react';
import PropTypes from 'prop-types';

// import components
import Dot from '../../Dot';
import Dash from '../../Dash';

function LetterP({ size }) {
  // render
  return (
    <div>
      <Dot size={size} />
      <Dash size={size} />
      <Dash size={size} />
      <Dot size={size} />
    </div>
  );
}

LetterP.propTypes = {
  size: PropTypes.number.isRequired,
};

export default LetterP;
