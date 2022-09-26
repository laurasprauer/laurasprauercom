import React from 'react';
import { graphql } from 'gatsby';
import Container from '@components/container';

class ArtTemplate extends React.Component {
  constructor(props) {
    super(props);
    const isBrowser = typeof window !== 'undefined';

    this.state = {
      darkmode:
        isBrowser && localStorage.getItem('LS-darkmode')
          ? localStorage.getItem('LS-darkmode') === 'true'
            ? true
            : false
          : false,
    };
  }

  toggleDarkmode = () => {
    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      const current = localStorage.getItem('LS-darkmode')
        ? localStorage.getItem('LS-darkmode') === 'true'
          ? true
          : false
        : false;
      localStorage.setItem('LS-darkmode', !current);
      this.setState({
        darkmode: !current,
      });
    } else {
      this.setState({
        darkmode: !this.state.darkmode,
      });
    }
  };

  render() {
    const { slug, type } = this.props.pageContext;
    const data = this.props.data.contentfulArt;
    return (
      <Container
        slug={slug}
        type={type}
        darkmode={this.state.darkmode}
        toggleDarkmode={this.toggleDarkmode}
        data={data}
      />
    );
  }
}

export const pageQuery = graphql`
  query Art($title: String!) {
    contentfulArt(title: { eq: $title }) {
      title
      date
      dimensions
      description {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        gatsbyImageData
        file {
          url
        }
      }
    }
  }
`;

export default ArtTemplate;