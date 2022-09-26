import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './styles.module.scss';

export const PdfViewer = ({ darkmode, pdf }) => {
  return (
    <div
      id="pdf-viewer"
      className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}
    >
      <div className={styles.pdfWrapper}>
        <iframe src={pdf}></iframe>
      </div>
    </div>
  );
};

PdfViewer.propTypes = {
  darkmode: PropTypes.bool,
};

PdfViewer.defaultProps = {};

export default PdfViewer;
