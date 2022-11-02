import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Image from '@components/image';

import * as styles from './styles.module.scss';

export const Blog = ({ darkmode, data }) => {
  return (
    <>
      {data.date && (
        <div
          className={`
            ${styles.header}
            ${styles.blog}
            ${darkmode ? styles.darkmode : ''}
          `}
        >
          {data.featureImage && (
            <div
              className={styles.image}
              style={{
                backgroundImage: `url('${
                  data.featureImageDarkmode && darkmode
                    ? data.featureImageDarkmode.file.url
                    : data.featureImage.file.url
                }')`,
              }}
            ></div>
          )}
          <div className={styles.title}>
            <h1>{data.title}</h1>
            <span className={styles.date}>
              {moment(data.date).format('MM/DD/YYYY')}
            </span>
          </div>
        </div>
      )}

      <div
        className={`${styles.blog} ${darkmode ? styles.darkmode : ''}`}
        dangerouslySetInnerHTML={{
          __html: data.body.childMarkdownRemark.html,
        }}
      ></div>
    </>
  );
};

Blog.propTypes = {
  darkmode: PropTypes.bool,
  data: PropTypes.any,
};

Blog.defaultProps = {};

export default Blog;
