import React from 'react';
import PropTypes from 'prop-types';
import { Document, Page } from 'react-pdf';
import getPublicResourceLink from '../../utils';

// import styles
import styles from './styles.module.scss';

export default class PdfViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      pages: null,
      width: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions, false);
    setTimeout(() => {
      this.updateWindowDimensions();
    }, 500);
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({
      pages: numPages,
    });
  }

  prevPage = () => {
    this.setState((prevState) => ({
      page: prevState.page - 1,
    }));
  }

  nextPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  }

  updateWindowDimensions = () => {
    const width = document.getElementById('pdf-viewer').offsetWidth;
    this.setState({
      width,
    });
  }

  render() {
    const arrow = (
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 17.898C9 18.972 10.2649 19.546 11.0731 18.8388L17.3838 13.3169C18.1806 12.6197 18.1806 11.3801 17.3838 10.6829L11.0731 5.16108C10.2649 4.45388 9 5.02785 9 6.1018V17.898Z"/>
      </svg>
    );

    let showNav = false;
    if (this.state.pages) {
      // add darkMode class if darkMode is true
      let navClasses = `${styles.nav}`;
      if (this.props.darkMode) {
        navClasses = `${styles.nav} ${styles.darkMode}`;
      }

      showNav = (
        <div className={navClasses}>
          <button disabled={this.state.page === 1} onClick={this.prevPage} type="button">
            {arrow} Previous
          </button>
          <p>{this.state.page} / {this.state.pages}</p>
          <button disabled={this.state.page === this.state.pages} onClick={this.nextPage} type="button">
            Next {arrow}
          </button>
        </div>
      );
    }

    return (
      <div id="pdf-viewer">
        <Document
          file={getPublicResourceLink(`${this.props.pdf}`)}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={this.state.page} width={this.state.width}/>
        </Document>
        {showNav}
      </div>
    );
  }
}

PdfViewer.propTypes = {
  pdf: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
};
