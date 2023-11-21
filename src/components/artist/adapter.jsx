import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Artist from './component';

/* prettier-ignore */
const ArtistResourcesAdapter  = (props) => {
  const data = useStaticQuery(graphql`query ArtistResources {
  data: allContentfulArt(sort: {date: DESC}) {
    nodes {
      title
      thumbnail {
        gatsbyImageData
      }
    }
  }
}`);

  return <Artist data={data.data.nodes} {...props}/>;
};

ArtistResourcesAdapter.propTypes = {};

ArtistResourcesAdapter.defaultProps = {};

export default ArtistResourcesAdapter;
