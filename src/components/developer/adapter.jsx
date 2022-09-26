import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Developer from './component';

/* prettier-ignore */
const DeveloperResourcesAdapter = (props) => {
  const data = useStaticQuery(graphql`
    query DeveloperResources {
      data: contentfulPage(slug: {eq: "/developer"}) {
        slug
        title
        content {
          ... on ContentfulResource {
            title
            subTitle
            link
            type
            techTalkSlug
            techTalkPdf {
              file {
                url
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

  return <Developer data={data.data} {...props}/>;
};

DeveloperResourcesAdapter.propTypes = {};

DeveloperResourcesAdapter.defaultProps = {};

export default DeveloperResourcesAdapter;
