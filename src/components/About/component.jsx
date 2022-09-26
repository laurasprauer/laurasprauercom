import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Link from '../link';
import Image from '../image';
import Social from '../social';

import * as styles from './styles.module.scss';

export const About = ({ darkmode, data }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    const imageSrc = data ? data[Math.floor(Math.random() * data.length)] : 0;
    const image =
      imageSrc && imageSrc.image
        ? { childImageSharp: { ...imageSrc.image } }
        : null;

    setImage(image);
  }, []);

  const date = new Date();
  const exp = date.getFullYear() - 2013;

  return (
    <div className={`${styles.about} ${darkmode ? styles.darkmode : ''}`}>
      <div className={styles.aboutHeader}>
        <div className={styles.imgContainer}>
          {image && <Image src={image} />}
        </div>
        <div className={styles.heyThere}>
          <h1>Hey&nbsp;&nbsp;There</h1>
        </div>
      </div>

      <div className={styles.wrapper}>
        <h2>As a Developer</h2>
        <p>
          I&apos;ve been developing on the web for the past {exp} years. After
          getting an undergraduate degree in fine art, I&apos;ve spent most of
          my post-collegiate life focusing on my technical skills. My digital
          art focus with a secondary computer science minor set me on a web
          designer path early on - eventually leading me to become a developer
          full time.
        </p>
        <p>
          Working fresh out of college as an interactive designer had me
          building the websites I designed. While I enjoyed creating with
          marketing agencies, I loved coding and wanted to expand my front end
          knowledge. I took a break from being a designer to transition to
          JavaScript developer roles. This is where I discovered the excitement
          of working at startups.
        </p>
        <p>
          When working alongside a small team on a new product, you have a major
          influence on company direction and culture. There&apos;s a need for
          flexibility, creative solutions, and thinking on your feet.
          Unfortunately, most startups fail, but when you find a startup that
          succeeds it can be a wild ride.
        </p>
        <p>
          Want to learn more about my professional experience? View My{' '}
          <Link to="/resume" darkmode={darkmode}>
            Resume
          </Link>{' '}
          or connect with me on{' '}
          <Link
            to="https://www.linkedin.com/in/laurasprauer/"
            target="_blank"
            darkmode={darkmode}
          >
            LinkedIn
          </Link>
          .
        </p>

        <h2>As an Artist</h2>
        <p>
          While I love programming and being in the tech industry, I missed the
          painting, drawing, and art history classes of my undergraduate days.⁠
          I started documenting my growth as an artist on my{' '}
          <Link
            to="https://www.instagram.com/sprauer.art/"
            target="_blank"
            darkmode={darkmode}
          >
            instagram
          </Link>
          , which has encouraged me to share my sketches, paintings, and
          thrifted or antique art finds.{' '}
        </p>
        <p>
          I&apos;m still discovering my preferred style, and haven&apos;t
          attempted to actively sell my pieces quite yet. Feel free to browse my{' '}
          <Link to="/artist" darkmode={darkmode}>
            gallery
          </Link>{' '}
          or follow me on{' '}
          <Link
            to="https://www.instagram.com/sprauer.art/"
            target="_blank"
            darkmode={darkmode}
          >
            instagram
          </Link>
          . All support is appreciated.
        </p>

        <h2>As a Human</h2>
        <p>
          During the day I build slick user interfaces for a more beautiful and
          easy to use web - during the evenings you can find me walking my dog,
          spending quality time with friends and family, and deep diving into
          all things arts and crafts.{' '}
        </p>
        <p>
          Favorite hobbies include: Bonsai, Houseplants, Soccer, Sketching,
          Painting, Crafting and Pokemon Go.
        </p>
        <div className={styles.social}>
          <Social
            icon="github"
            link="https://github.com/laurasprauer"
            darkmode={darkmode}
          />
          <Social
            icon="linkedin"
            link="https://www.linkedin.com/in/laurasprauer/"
            darkmode={darkmode}
          />
          <Social
            icon="instagram"
            link="https://www.instagram.com/sprauer.art/"
            darkmode={darkmode}
          />
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  darkmode: PropTypes.bool,
};

About.defaultProps = {};

export default About;
