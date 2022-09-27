import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Magnifier from 'react-magnifier';

import Link from '@components/link';
import SVG from '@components/svg';

import * as styles from './styles.module.scss';

export const Art = ({ darkmode, data }) => {
  const [active, setActive] = useState(0);

  const findAndSetActive = (direction) => {
    const isBrowser = typeof window !== 'undefined';
    // doing this the hard way
    if (isBrowser) {
      data.gallery.map((image, index) => {
        const el = document.getElementById(`${data.title}-${index}`);
        if (el.classList.contains(styles.active)) {
          if (direction === 'left') {
            setActive(index - 1 < 0 ? data.gallery.length - 1 : index - 1);
          }
          if (direction === 'right') {
            setActive(index + 1 > data.gallery.length - 1 ? 0 : index + 1);
          }
        }
      });
    }
  };

  return (
    <div className={`${styles.art} ${darkmode ? styles.darkmode : ''}`}>
      <div>
        <div>
          <Link to="/artist" className={styles.breadcrumb} darkmode={darkmode}>
            <SVG name="arrow" />
            Return to Gallery
          </Link>
          {data.gallery && (
            <div className={styles.carousel}>
              {data.gallery.length > 1 && (
                <div
                  className={styles.leftArrow}
                  onClick={() => {
                    findAndSetActive('left');
                  }}
                >
                  <SVG name="arrow" />
                </div>
              )}
              <div className={styles.loading}>loading...</div>
              {data.gallery.map((image, index) => {
                return (
                  <div
                    id={`${data.title}-${index}`}
                    key={image.file.url}
                    className={`${styles.image} ${
                      active === index ? styles.active : ''
                    }`}
                  >
                    <Magnifier src={image.file.url} />
                  </div>
                );
              })}
              {data.gallery.length > 1 && (
                <div
                  className={styles.rightArrow}
                  onClick={() => {
                    findAndSetActive('right');
                  }}
                >
                  <SVG name="arrow" />
                </div>
              )}
            </div>
          )}
          {data.gallery &&
            data.gallery.length > 1 &&
            data.gallery.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.click} ${
                    active === index ? styles.active : ''
                  }`}
                  onClick={() => {
                    setActive(index);
                  }}
                ></div>
              );
            })}
        </div>
        <div className={styles.content}>
          <h1>{data.title}</h1>
          <p className={styles.info}>
            {moment(data.date).format('MM/DD/YYYY')} <span></span>{' '}
            {data.dimensions}
          </p>
          {data.description && (
            <p
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html,
              }}
            ></p>
          )}
        </div>
      </div>
    </div>
  );
};

Art.propTypes = {
  darkmode: PropTypes.bool,
  data: PropTypes.any,
};

Art.defaultProps = {};

export default Art;
