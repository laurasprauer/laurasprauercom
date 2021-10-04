import React from 'react';
import PropTypes from 'prop-types';

// import styles
// import styles from './styles.module.scss';

function PdfViewer({
  pdf,
}) {
  return (
    <div>
      {pdf}
    </div>
  );
}

PdfViewer.propTypes = {
  pdf: PropTypes.string.isRequired,
};

export default PdfViewer;
