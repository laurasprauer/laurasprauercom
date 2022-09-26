import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Magnifier from 'react-magnifier';

import Link from '../link';
import Image from '../image';
import SVG from '../svg';

import * as styles from './styles.module.scss';

export const Art = ({ darkmode, data }) => {
  const [active, setActive] = useState(0);

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
              {data.gallery.map((image, index) => {
                return (
                  <div
                    key={image.file.url}
                    className={`${styles.image} ${
                      active === index ? styles.active : ''
                    }`}
                  >
                    <Magnifier src={image.file.url} />
                  </div>
                );
              })}
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
