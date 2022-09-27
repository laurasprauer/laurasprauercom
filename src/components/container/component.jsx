import React, { useEffect } from 'react';
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
import Link from '@components/link';

import { Helmet } from 'react-helmet';
import mixpanel from 'mixpanel-browser';

import * as styles from './styles.module.scss';

mixpanel.init(process.env.APP_MIXPANEL_TOKEN);

export const Container = ({
  type,
  slug,
  darkmode,
  toggleDarkmode,
  animationType,
  data,
}) => {
  useEffect(() => {
    mixpanelEvent();
  }, []);

  const mixpanelEvent = () => {
    if (process.env.NODE_ENV === 'production') {
      mixpanel.track('Site Visit', {
        url: `${slug}`,
      });
    }
  };

  let title = 'Laura Sprauer - Developer - Artist';
  let description = 'Laura Sprauer - Developer - Artist';
  let image =
    'https://images.ctfassets.net/okczg0bbqwnf/3QkUBN4i8MRLojaKyJUjKn/b63d7633191b064855bc0d4d4c3b16fe/laura-sprauer-share-image.png';

  if (type === 'developer') {
    title = 'Laura Sprauer - Developer';
    description = 'You had me at hello world.';
  }
  if (type === 'resume') {
    title = 'Laura Sprauer - Resume';
    description = 'Review my expierence and skills.';
  }
  if (type === 'about') {
    title = 'Based on a true story';
    description =
      "My name is Laura Sprauer, and I'm a Developer, Artist, and Human.";
  }
  if (type === 'contact') {
    title = "Laura Sprauer - Let's Talk";
    description =
      "If you're interested in connecting I'm available for new opportunities, speaking engagments, or networking over coffee.";
  }
  if (type === 'artist') {
    title = 'Laura Sprauer - Artist';
    description =
      "I'm an art hobbyist. This isn't my full-time job, it's a passion. I'm continuously trying to improve and discover my style. All support is appreciated. Feel free to browse all finished original artwork in my gallery below, or follow me on instagram to get updated on my progression as an artist or learn about my thrifted and antique art finds.";
  }
  if (type === '404') {
    title = 'Oh Snap - 404 Page';
    description = "Looks like this page doesn't exist.";
  }
  if (type === 'art') {
    title = `${data.title} By Laura Sprauer`;
    description = `${data.description.childMarkdownRemark.html.replace(
      /(&lt;([^>]+)>)/gi,
      ''
    )}`;
    image = `${data.thumbnail.file.url}`;
  }
  if (type === 'conference') {
    title = `${data.techTalkTitle}`;
    description = `${data.techTalkSubTitle}.`;
  }

  const isBrowser = typeof window !== 'undefined';
  const url = isBrowser ? window.location.href : 'https://laurasprauer.com';

  return (
    <div>
      <Helmet>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>{title}</title>
        <link rel="canonical" href={`${url}/${slug}`} />
        <meta property="og:url" content={url} />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#343434" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Laura Sprauer" />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <meta name="image" content={image} />
      </Helmet>

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
                  <Link to="/" darkmode={!darkmode}>
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
