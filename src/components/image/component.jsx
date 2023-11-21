import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as styles from './styles.module.scss';

const Image = ({ alt, className, src, ...props }) => {
  const classes = `${styles.image} ${className ? className : ''}`;

  const gatsbyImageData = src?.childImageSharp?.gatsbyImageData || null;
  if (gatsbyImageData) {
    const gImage = getImage(src);
    const width = gatsbyImageData.width;
    const height = gatsbyImageData.height;

    return (
      <GatsbyImage
        className={classes}
        alt={alt || 'Laura Sprauer'}
        image={gImage}
        width={width}
        height={height}
      />
    );
  }

  // ---------------------------------------- | Native Image

  if (typeof src === 'string') {
    return (
      <img
        className={classes}
        src={src}
        alt={alt || 'Laura Sprauer'}
        {...props}
      />
    );
  }

  // ---------------------------------------- | Invalid src

  return null;
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({
          layout: PropTypes.oneOf(['constrained', 'fixed', 'fullWidth']),
          images: PropTypes.shape({
            fallback: PropTypes.shape({
              src: PropTypes.string,
              srcSet: PropTypes.string,
              sizes: PropTypes.string,
            }),
            sources: PropTypes.arrayOf(
              PropTypes.shape({
                srcSet: PropTypes.string,
                type: PropTypes.string,
                sizes: PropTypes.string,
              })
            ),
          }),
          width: PropTypes.number,
          height: PropTypes.number,
        }),
      }),
    }),
  ]),
  /**
   * Support for directly passing styles to the image component.
   */
  styles: PropTypes.object,
};

Image.defaultProps = {};

export default Image;
