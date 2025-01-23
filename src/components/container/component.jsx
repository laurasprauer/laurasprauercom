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
import GiftSearch from '@components/giftSearch';
import Art from '@components/art';
import Blog from '@components/blog';
import MorseCode from '@components/morseCode';
import Link from '@components/link';

import { Helmet } from 'react-helmet';

import * as styles from './styles.module.scss';

export const Container = ({
  type,
  slug,
  darkmode,
  toggleDarkmode,
  animationType,
  data,
}) => {
  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';
    const url = isBrowser
      ? window.location.origin
      : 'https://laurasprauerburns.com';
    const pathname = isBrowser ? window.location.pathname : '/';
    if (url === 'https://laurasprauer.com') {
      window.location.replace(`https://laurasprauerburns.com/${pathname}`);
    }
  }, []);

  let title = 'Laura Sprauer Burns - Developer';
  let description = 'Laura Sprauer Burns - Developer';
  let image =
    'https://images.ctfassets.net/okczg0bbqwnf/2nEHqZ5gFWvlHhQspcuUjw/a050e2d03b8ab83faf68841071a539d6/sprauer-burns-share-img.png';

  if (type === 'developer') {
    title = 'Laura Sprauer Burns - Developer';
    description = 'You had me at hello world.';
  }
  if (type === 'resume') {
    title = 'Laura Sprauer Burns - Resume';
    description = 'Review my expierence and skills.';
  }
  if (type === 'about') {
    title = 'Based on a true story';
    description =
      "My name is Laura Sprauer Burns, and I'm a Developer, Artist, and Human.";
  }
  if (type === 'contact') {
    title = "Laura Sprauer Burns - Let's Talk";
    description =
      "If you're interested in connecting I'm available for new opportunities, speaking engagments, or networking over coffee.";
  }
  if (type === 'gift-search') {
    title = 'Find the Perfect Gift!';
    description =
      "Finding the perfect gift doesn't have to be difficult. Get gift ideas from Open AI's ChatGPT API. Built by developer Laura Sprauer for funzies.";
    image =
      'https://images.ctfassets.net/okczg0bbqwnf/3QJ7kohhTRf1NOLtIq7Qk2/ab77374648c8eee65849d4ffb73b5b3c/gift-search.png';
  }
  if (type === 'artist') {
    title = 'Laura Sprauer Burns - Artist';
    description =
      "I'm an art hobbyist. This isn't my full-time job, it's a passion. I'm continuously trying to improve and discover my style. All support is appreciated. Feel free to browse all finished original artwork in my gallery below, or follow me on instagram to get updated on my progression as an artist or learn about my thrifted and antique art finds.";
  }
  if (type === '404') {
    title = 'Oh Snap - 404 Page';
    description = "Looks like this page doesn't exist.";
  }
  if (type === 'art') {
    title = `${data.title} By Laura Sprauer Burns`;
    description = `${data.description.childMarkdownRemark.html.replace(
      /(&lt;([^>]+)>)/gi,
      ''
    )}`;
    image = `${data.thumbnail.file.url}`;
  }
  if (type === 'blog') {
    title = `${data.title}`;
    description = `${data.description.childMarkdownRemark.html.replace(
      /(&lt;([^>]+)>)/gi,
      ''
    )}`;
    image = `${data.shareImage.file.url}`;
  }
  if (type === 'conference') {
    title = `${data.techTalkTitle}`;
    description = `${data.techTalkSubTitle}.`;
  }

  const isBrowser = typeof window !== 'undefined';
  const url = isBrowser
    ? window.location.origin
    : 'https://laurasprauerburns.com';

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
        <meta property="og:site_name" content="Laura Sprauer Burns" />
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
          {type === 'gift-search' && (
            <GiftSearch darkmode={darkmode} data={data} />
          )}
          {type === 'art' && <Art darkmode={darkmode} data={data} />}
          {type === 'blog' && <Blog darkmode={darkmode} data={data} />}

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
