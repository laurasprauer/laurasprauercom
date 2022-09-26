import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Resume from './component';

/* prettier-ignore */
const ResumeResourcesAdapter = (props) => {
  const data = useStaticQuery(graphql`
    query ResumeResources {
      data: contentfulPage(slug: {eq: "/resume"}) {
        pdfDownloadText
        pdfDownload {
          file {
            url
          }
        }
        content {
          ... on ContentfulJob {
            company
            companyLink
            startYear
            endYear
            jobTitle
            description {
              childMarkdownRemark {
                html
              }
            }
            internal {
              type
            }
          }
          ... on ContentfulKnownTech {
            content {
              name
              link
              internal {
                type
              }
            }
            internal {
              type
            }
          }
        }
      }
    }
  `);

  return <Resume data={data.data} {...props}/>;
};

ResumeResourcesAdapter.propTypes = {};

ResumeResourcesAdapter.defaultProps = {};

export default ResumeResourcesAdapter;
