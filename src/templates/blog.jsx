import React from 'react';
import { graphql } from 'gatsby';
import Container from '@components/container';

class BlogTemplate extends React.Component {
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
    const data = this.props.data.contentfulBlogPost;
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
  query Blog($title: String!) {
    contentfulBlogPost(title: { eq: $title }) {
      title
      slug
      date
      description {
        childMarkdownRemark {
          html
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      featureImage {
        file {
          url
        }
      }
      featureImageDarkmode {
        file {
          url
        }
      }
      shareImage {
        file {
          url
        }
      }
    }
  }
`;

export default BlogTemplate;
