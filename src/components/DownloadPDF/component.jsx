import React from 'react';
import PropTypes from 'prop-types';

import Link from '@components/link';
import SVG from '@components/svg';

import * as styles from './styles.module.scss';

export const DownloadPDF = ({ darkmode, pdf, text, type }) => {
  return (
    <Link
      to={pdf}
      className={`
        ${styles.container}
        ${darkmode ? styles.darkmode : ''}
      `}
      target="_blank"
      {...(type === 'download' && { download: true })}
    >
      <h2>{text}</h2>
      {type === 'download' && (
        <div>
          <SVG name="download" />
          <div className={styles.line} />
          <div className={styles.text}>PDF</div>
        </div>
      )}
      {type === 'article' && (
        <div className={styles.article}>
          <SVG name="blog" />
          <div className={styles.text}>READ</div>
        </div>
      )}
    </Link>
  );
};

DownloadPDF.propTypes = {
  darkmode: PropTypes.bool,
  pdf: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
};

DownloadPDF.defaultProps = {};

export default DownloadPDF;
