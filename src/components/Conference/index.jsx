import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

import DownloadPDF from '../DownloadPDF';
import PdfViewer from '../PdfViewer';

function Conference({
  darkMode,
  pdf,
}) {
  // add darkMode class if darkMode is true
  let containerClasses = `${styles.container}`;
  if (darkMode) {
    containerClasses = `${styles.container} ${styles.darkMode}`;
  }

  return (
    <div className={containerClasses}>
      <div className={styles.wrapper}>
        <h1>The History of JavaScript</h1>
        <h3>25 Years of JavaScript <span>- Why History Matters and What We Can Learn From It</span></h3>
        <h2>
          Download
          <DownloadPDF darkMode={darkMode} pdf={pdf}/>
        </h2>
        <PdfViewer pdf={pdf}/>
      </div>
    </div>
  );
}

Conference.propTypes = {
  darkMode: PropTypes.string.isRequired,
  pdf: PropTypes.string.isRequired,
};

export default Conference;
