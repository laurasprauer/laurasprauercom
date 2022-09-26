import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '@components/navigation';
import Darkmode from '@components/darkmode';
import Home from '@components/home';
import Developer from '@components/developer';
import Resume from '@components/resume';
import About from '@components/about';
import Conference from '@components/conference';
import Contact from '@components/contact';
import Artist from '@components/artist';
import Art from '@components/art';
import MorseCode from '@components/morseCode';

import * as styles from './styles.module.scss';

export const Container = ({
  type,
  slug,
  darkmode,
  toggleDarkmode,
  animationType,
  data,
}) => {
  return (
    <div>
      <Navigation pathname={slug} darkmode={darkmode} />
      <Darkmode darkmode={darkmode} toggleDarkmode={toggleDarkmode} />

      <div
        className={`
          ${styles.animationContainer}
          ${darkmode ? styles.darkmode : ''}
        `}
      >
        {animationType && (
          <MorseCode darkmode={darkmode} theme={animationType} />
        )}
      </div>

      <div className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}>
        <div className={styles.wrapper}>
          {type === 'home' && <Home darkmode={darkmode} />}
          {type === 'developer' && <Developer darkmode={darkmode} />}
          {type === 'resume' && <Resume darkmode={darkmode} />}
          {type === 'about' && <About darkmode={darkmode} />}
          {type === 'conference' && (
            <Conference darkmode={darkmode} data={data} />
          )}
          {type === 'contact' && <Contact darkmode={darkmode} />}
          {type === 'artist' && <Artist darkmode={darkmode} />}
          {type === 'art' && <Art darkmode={darkmode} data={data} />}
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  slug: PropTypes.string,
  type: PropTypes.string,
  toggleDarkmode: PropTypes.func,
  darkmode: PropTypes.bool,
  animationType: PropTypes.string,
  data: PropTypes.any,
};

Container.defaultProps = {};

export default Container;
