import React from 'react';
import { graphql } from 'gatsby';
import Container from '@components/container';
import { withMixpanel } from 'gatsby-plugin-mixpanel';

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

  componentDidMount() {
    const { slug } = this.props.pageContext;
    const { mixpanel } = this.props;
    if (process.env.NODE_ENV === 'production') {
      mixpanel.track('Site Visit', {
        url: `${slug}`,
      });
    }
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
      thumbnail {
        file {
          url
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

export default withMixpanel()(ArtTemplate);
