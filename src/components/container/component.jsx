import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../navigation/index';
import Darkmode from '../darkmode/index';
import Home from '../home/index';
import Developer from '../developer/index';
import Resume from '../resume/index';
import About from '../about/index';
import Conference from '../conference/index';
import Contact from '../contact/index';
import Artist from '../artist/index';
import Art from '../art/index';
import MorseCode from '../morseCode/index';
import Link from '../link/index';

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

          {type === '404' && (
            <div className={styles.fourOhFour}>
              <div>
                <h1>Oh Snap</h1>
                <p>
                  Looks like this page doesn&apos;t exist.{' '}
                  <Link to="/home" darkmode={!darkmode}>
                    There&apos;s no place like home.
                  </Link>
                </p>
              </div>
            </div>
          )}
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
