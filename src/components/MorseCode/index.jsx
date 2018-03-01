import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

// import components
import LetterL from './Letters/LetterL';
import LetterA from './Letters/LetterA';
import LetterU from './Letters/LetterU';
import LetterR from './Letters/LetterR';
import LetterS from './Letters/LetterS';
import LetterP from './Letters/LetterP';
import LetterE from './Letters/LetterE';

function MorseCode({ size, bgColor }) {
  // render
  return (
    <div className={styles.container}>
      <LetterL size={size} bgColor={bgColor} />
      <LetterA size={size} bgColor={bgColor} />
      <LetterU size={size} bgColor={bgColor} />
      <LetterR size={size} bgColor={bgColor} />
      <LetterA size={size} bgColor={bgColor} />

      <LetterS size={size} bgColor={bgColor} />
      <LetterP size={size} bgColor={bgColor} />
      <LetterR size={size} bgColor={bgColor} />
      <LetterA size={size} bgColor={bgColor} />
      <LetterU size={size} bgColor={bgColor} />
      <LetterE size={size} bgColor={bgColor} />
      <LetterR size={size} bgColor={bgColor} />
    </div>
  );
}

MorseCode.propTypes = {
  size: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default MorseCode;
