import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

import DownloadPDF from '../DownloadPDF';
import PdfViewer from '../PdfViewer';

function Conference({
  darkMode,
  pdf,
  blogLink,
  title,
  subTitleBold,
  subTitleThin,
}) {
  // add darkMode class if darkMode is true
  let containerClasses = `${styles.container}`;
  if (darkMode) {
    containerClasses = `${styles.container} ${styles.darkMode}`;
  }

  let showBlogLink = false;
  if (blogLink && blogLink !== '') {
    const blogIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <g fillRule="evenodd">
          <g fillRule="nonzero">
            <path d="M11.429 6c0 .076-.026.14-.079.193-.052.053-.115.08-.19.08H5.269c-.075 0-.138-.027-.19-.08C5.026 6.14 5 6.076 5 6v-.727c0-.076.026-.14.078-.193.052-.053.115-.08.19-.08h5.893c.074 0 .137.027.19.08.052.053.078.117.078.193V6zM5.268 9.182c-.075 0-.138-.027-.19-.08C5.026 9.05 5 8.985 5 8.91v-.727c0-.076.026-.14.078-.193.052-.053.115-.08.19-.08h9.464c.075 0 .138.027.19.08.052.053.078.117.078.193v.727c0 .076-.026.14-.078.193-.052.053-.115.08-.19.08H5.268zm0 5.818c-.075 0-.138-.027-.19-.08-.052-.053-.078-.117-.078-.193V14c0-.076.026-.14.078-.193.052-.053.115-.08.19-.08h9.464c.075 0 .138.027.19.08.052.053.078.117.078.193v.727c0 .076-.026.14-.078.193-.052.053-.115.08-.19.08H5.268zm5.893-4.182c.074 0 .137.027.19.08.052.053.078.117.078.193v.727c0 .076-.026.14-.079.193-.052.053-.115.08-.19.08H5.269c-.075 0-.138-.027-.19-.08-.052-.053-.078-.117-.078-.193v-.727c0-.076.026-.14.078-.193.052-.053.115-.08.19-.08h5.893z"/>
          </g>
        </g>
      </svg>
    );
    showBlogLink = (
      <a href={blogLink} className={styles.blog} target="_blank" rel="noreferrer">
        <h2>
          Article
          <div>
            {blogIcon}
            <div className={styles.text}>Read</div>
          </div>
        </h2>
      </a>
    );
  }

  return (
    <div className={containerClasses}>
      <div className={styles.wrapper}>
        <h1>{title}</h1>
        <h3>{subTitleBold} <span>{subTitleThin}</span></h3>
        <PdfViewer pdf={pdf}/>
        <div className={styles.options}>
          <DownloadPDF darkMode={darkMode} pdf={pdf} text="Download"/>
          {showBlogLink}
        </div>
      </div>
    </div>
  );
}

Conference.propTypes = {
  darkMode: PropTypes.string.isRequired,
  pdf: PropTypes.string.isRequired,
  blogLink: PropTypes.string,
  title: PropTypes.string,
  subTitleBold: PropTypes.string,
  subTitleThin: PropTypes.string,
};

Conference.defaultProps = {
  blogLink: '',
  title: '',
  subTitleBold: '',
  subTitleThin: '',
};

export default Conference;
