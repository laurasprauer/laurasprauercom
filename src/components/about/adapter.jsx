import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import About from './component';

/* prettier-ignore */
const AboutResourcesAdapter  = (props) => {
  const data = useStaticQuery(graphql`
    query AboutResources {
      data: allContentfulAboutImage {
        nodes {
          title
          image {
            gatsbyImageData
          }
        }
      }
    }
  `);

  return <About data={data.data.nodes} {...props}/>;
};

AboutResourcesAdapter.propTypes = {};

AboutResourcesAdapter.defaultProps = {};

export default AboutResourcesAdapter;
