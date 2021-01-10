import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

const YEAR_HEIGHT = 100;

export default class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearHeightDashed: '0',
    };
  }

  componentDidMount() {
    // we want to wait 1 second before triggering this height in order to create an animation
    setTimeout(() => {
      const date = new Date();
      const presentYear = date.getFullYear();
      let years = 1;

      if (this.props.end === 'Present') {
        years = presentYear - parseFloat(this.props.start);
      } else {
        years = parseFloat(this.props.end) - parseFloat(this.props.start);
      }

      this.setState({
        yearHeightDashed: `${YEAR_HEIGHT * years}px`,
      });
    }, 1000);
  }

  render() {
    let years = 1;
    const date = new Date();
    const presentYear = date.getFullYear();
    let circleEndYear = this.props.end;
    if (this.props.end === 'Present') {
      circleEndYear = presentYear;
      years = presentYear - parseFloat(this.props.start);
    } else {
      years = parseFloat(this.props.end) - parseFloat(this.props.start);
    }

    const yearTopStart = `${(YEAR_HEIGHT * years) + 20}px`;
    const minJobHeight = `${(YEAR_HEIGHT * years) + 100}px`;

    // add darkMode class if darkMode is true
    let containerClasses = `${styles.job}`;
    if (this.props.darkMode) {
      containerClasses = `${styles.job} ${styles.darkMode}`;
    }

    let company = <a className={styles.companyName} href={this.props.companyLink} target="_blank" rel="noopener noreferrer">{this.props.companyName}</a>;
    if (this.props.companyLink === 'null') {
      company = <span className={styles.companyName}>{this.props.companyName}</span>;
    }

    return (
      <div className={containerClasses} style={{ minHeight: minJobHeight }}>
        <div className={styles.jobTitle}>
          {this.props.jobTitle}
        </div>
        <div className={styles.jobInfo}>
          {company}
          &nbsp;&nbsp;|&nbsp;&nbsp;{this.props.start} - {this.props.end}
        </div>
        <div className={styles.jobDescription} dangerouslySetInnerHTML={{ __html: this.props.jobDescription }} />
        <div className={styles.years}>
          <div className={styles.start} style={{ top: yearTopStart }}><div>{this.props.start}</div></div>
          <div className={styles.end}><div>{circleEndYear}</div></div>
          <div className={styles.yearLine} style={{ height: this.state.yearHeightDashed }} />
        </div>
      </div>
    );
  }
}

Job.propTypes = {
  darkMode: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyLink: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
