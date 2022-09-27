import React from 'react';
import PropTypes from 'prop-types';

import Link from '@components/link';
import Image from '@components/image';

import * as styles from './styles.module.scss';

export const Artist = ({ darkmode, data }) => {
  return (
    <div className={`${styles.artist} ${darkmode ? styles.darkmode : ''}`}>
      <h1>
        Laura Sprauer <span></span> Artist
      </h1>
      <p>
        I&apos;m an art hobbyist. This isn&apos;t my full-time job, it&apos;s a
        passion. I&apos;m continuously trying to improve and discover my style.
        All support is appreciated. Feel free to browse all finished original
        artwork in my gallery below, or follow me on{' '}
        <Link to="https://www.instagram.com/sprauer.art/" darkmode={darkmode}>
          instagram
        </Link>{' '}
        to get updated on my progression as an artist or learn about my thrifted
        and antique art finds.
      </p>
      <div className={styles.gallery}>
        {data &&
          data.map((art) => {
            return (
              <Link
                key={art.title}
                to={`/art/${art.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Image
                  src={{ childImageSharp: { ...art.thumbnail } }}
                  className={styles.image}
                  alt={art.title}
                />
                <div className={styles.title}>{art.title}</div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

Artist.propTypes = {
  darkmode: PropTypes.bool,
  data: PropTypes.any,
};

Artist.defaultProps = {};

export default Artist;
