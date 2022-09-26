import React from 'react';
import PropTypes from 'prop-types';

import PdfViewer from '../pdfViewer/index';
import DownloadPDF from '../downloadPDF/index';

import * as styles from './styles.module.scss';

export const Conference = ({ darkmode, data }) => {
  return (
    <div className={`${styles.conference} ${darkmode ? styles.darkmode : ''}`}>
      <h1>{data.techTalkTitle}</h1>
      <h2>{data.techTalkSubTitle}</h2>
      <PdfViewer darkmode={darkmode} pdf={data.techTalkPdf.file.url} />
      <div className={styles.options}>
        <DownloadPDF
          text="Download"
          darkmode={darkmode}
          pdf={data.techTalkPdf.file.url}
          type="download"
        />
        <DownloadPDF
          text="Article"
          darkmode={darkmode}
          pdf={data.link}
          type="article"
        />
      </div>
    </div>
  );
};

Conference.propTypes = {
  darkmode: PropTypes.bool,
  data: PropTypes.any,
};

Conference.defaultProps = {};

export default Conference;
