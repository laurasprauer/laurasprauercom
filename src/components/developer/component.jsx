import React from 'react';
import PropTypes from 'prop-types';

import Link from '../link/index';
import SVG from '../svg/index';
import * as styles from './styles.module.scss';

export const Developer = ({ darkmode, data }) => {
  return (
    <div className={`${styles.developer} ${darkmode ? styles.darkmode : ''}`}>
      <div className={styles.intro}>
        <h1>Front End Developer</h1>
        <p>
          I build slick user interfaces for a more beautiful and easy-to-use
          web. View my published articles, tech talk slides, resume, and other
          resources below -- or if you&apos;re interested in connecting I&apos;m
          available for new opportunities, speaking engagments, or networking
          over coffee.{' '}
          <Link to={'/contact'} darkmode={!darkmode}>
            Let&apos;s Talk.
          </Link>
        </p>
      </div>
      <div className={styles.resourcesWrapper}>
        <div className={styles.resources}>
          {data &&
            data.content &&
            data.content.map((resource) => {
              let link = resource.link;
              if (resource.type === 'Resume') {
                link = '/resume';
              }
              if (
                resource.type === 'Tech Talk External Link' ||
                resource.type === 'Tech Talk Internal Link'
              ) {
                link = resource.techTalkSlug;
              }

              return (
                <Link
                  key={resource.title}
                  to={link}
                  target={
                    resource.type === 'External Link' ? '_blank' : '_self'
                  }
                  darkmode={darkmode}
                >
                  <div>{resource.title}</div>
                  <div>
                    <span>{resource.subTitle}</span> <SVG name="arrow" />
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

Developer.propTypes = {
  darkmode: PropTypes.bool,
  data: PropTypes.any,
};

Developer.defaultProps = {};

export default Developer;
