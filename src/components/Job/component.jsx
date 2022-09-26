import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Link from '@components/link';

import * as styles from './styles.module.scss';

const YEAR_HEIGHT = 100;

export const Job = ({
  darkmode,
  jobTitle,
  companyName,
  companyLink,
  jobDescription,
  start,
  end,
}) => {
  const [yearHeightDashed, setYearHeightDashed] = useState('0');

  useEffect(() => {
    // we want to wait 1 second before triggering this height in order to create an animation
    setTimeout(() => {
      const date = new Date();
      const presentYear = date.getFullYear();
      let years = 1;

      if (end === 'Present') {
        years = presentYear - parseFloat(start);
      } else {
        years = parseFloat(end) - parseFloat(start);
      }

      setYearHeightDashed(`${YEAR_HEIGHT * years}px`);
    }, 1000);
  }, []);

  let years = 1;
  const date = new Date();
  const presentYear = date.getFullYear();
  let circleEndYear = end;
  if (end === 'Present') {
    circleEndYear = presentYear;
    years = presentYear - parseFloat(start);
  } else {
    years = parseFloat(end) - parseFloat(start);
  }

  const yearTopStart = `${YEAR_HEIGHT * years + 20}px`;
  const minJobHeight = `${YEAR_HEIGHT * years + 100}px`;

  let company = (
    <Link className={styles.companyName} href={companyLink} target="_blank">
      {companyName}
    </Link>
  );
  if (companyLink === 'null') {
    company = <span className={styles.companyName}>{companyName}</span>;
  }

  return (
    <div
      className={`
        ${styles.job}
        ${darkmode ? styles.darkmode : ''}
      `}
    >
      <div
        className={`${styles.job} ${darkmode ? styles.darkmode : ''}`}
        style={{ minHeight: minJobHeight }}
      >
        <div className={styles.jobTitle}>{jobTitle}</div>
        <div className={styles.jobInfo}>
          {company}
          &nbsp;&nbsp;|&nbsp;&nbsp;{start} - {end}
        </div>
        <div
          className={styles.jobDescription}
          dangerouslySetInnerHTML={{ __html: jobDescription }}
        />
        <div className={styles.years}>
          <div className={styles.start} style={{ top: yearTopStart }}>
            <div>{start}</div>
          </div>
          <div className={styles.end}>
            <div>{circleEndYear}</div>
          </div>
          <div
            className={styles.yearLine}
            style={{ height: yearHeightDashed }}
          />
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  darkmode: PropTypes.bool,
  jobTitle: PropTypes.string,
  companyName: PropTypes.string,
  companyLink: PropTypes.string,
  jobDescription: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
};

Job.defaultProps = {};

export default Job;
