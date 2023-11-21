import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import DownloadPDF from '@components/downloadPDF';
import Job from '@components/job';
import Link from '@components/link';
import * as styles from './styles.module.scss';

export const Resume = ({ darkmode, data }) => {
  const [timelineHeight, setTimelineHeight] = useState('0px');

  useEffect(() => {
    // we want to wait 1 second before triggering this height in order to create an animation
    setTimeout(() => {
      const height = document.getElementById('timeline-content').clientHeight;
      setTimelineHeight(`${height - 60}px`);
    }, 1000);
  }, []);

  // organize content by jobs or known tech
  let jobs = [];
  let knowTech = [];
  if (data && data.content) {
    data.content.map((item) => {
      if (item.internal.type === 'ContentfulJob') {
        jobs.push(item);
      }
      if (item.internal.type === 'ContentfulKnownTech') {
        knowTech = [...item.content];
      }
    });
  }

  return (
    <div className={`${darkmode ? styles.darkmode : ''}`}>
      <div className={styles.wrapper}>
        <h1>Laura Sprauer</h1>

        <DownloadPDF
          text={data.pdfDownloadText}
          darkmode={darkmode}
          pdf={data.pdfDownload.file.url}
          type="download"
        />

        <div className={styles.timelineContainer}>
          <div id="timeline-content" className={styles.timelineContent}>
            {jobs.map((job) => {
              return (
                <Job
                  key={job.company}
                  darkmode={darkmode}
                  jobTitle={job.jobTitle}
                  companyName={job.company}
                  companyLink={job.companyLink}
                  jobDescription={job.description.childMarkdownRemark.html}
                  start={job.startYear}
                  end={job.endYear}
                />
              );
            })}
          </div>
          <div
            className={styles.timelineLine}
            style={{ height: timelineHeight }}
          >
            <div className={styles.line} />
          </div>
        </div>

        <div className={styles.skills}>
          <div className={styles.skillsTitle}>Known Technologies</div>
          <div id="known-technologies" className={styles.skillsDescription}>
            {knowTech.map((tech) => {
              if (tech.link) {
                return (
                  <>
                    <Link to={tech.link} target="_blank">
                      {tech.name}
                    </Link>
                    ,&ensp;
                  </>
                );
              } else {
                return <>{tech.name},&ensp;</>;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Resume.propTypes = {
  darkmode: PropTypes.bool,
  data: PropTypes.any,
};

Resume.defaultProps = {};

export default Resume;
