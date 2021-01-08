import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

export default class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: props.jobTitle,
      companyName: props.companyName,
      companyLink: props.companyLink,
      jobDescription: props.jobDescription,
      start: props.start,
      end: props.end,
    };
  }

  render() {
    let years = 1;
    const date = new Date();
    const presentYear = date.getFullYear();
    let circleEndYear = this.state.end;
    if (this.state.end === 'Present') {
      circleEndYear = presentYear;
      years = presentYear - parseFloat(this.state.start);
    } else {
      years = parseFloat(this.state.end) - parseFloat(this.state.start);
    }

    const yearHeight = 100;
    const yearHeightDashed = `${yearHeight * years}px`;
    const yearTopStart = `${(yearHeight * years) + 20}px`;
    const minJobHeight = `${(yearHeight * years) + 100}px`;

    return (
      <div className={styles.job} style={{ minHeight: minJobHeight }}>
        <div className={styles.jobTitle}>
          {this.state.jobTitle}
        </div>
        <div className={styles.jobInfo}>
          <a className={styles.companyName} href={this.state.companyLink} target="_blank" rel="noopener noreferrer">
            {this.state.companyName}
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;{this.state.start} - {this.state.end}
        </div>
        <div className={styles.jobDescription}>
          {this.state.jobDescription}
        </div>

        <div className={styles.years}>
          <div className={styles.start} style={{ top: yearTopStart }}><div>{this.state.start}</div></div>
          <div className={styles.end}><div>{circleEndYear}</div></div>
          <div className={styles.yearLine} style={{ height: yearHeightDashed }} />
        </div>
      </div>
    );
  }
}

Job.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyLink: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
