const path = require('path');

exports.onCreateWebpackConfig = ({ actions, getConfig, stage, loaders }) => {
  // const config = getConfig();
  // if (config.externals && config.externals[0]) {
  //   config.externals[0]['node:fs'] = require.resolve('crypto-browserify');
  // }
  // actions.replaceWebpackConfig(config);

  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
        '@components': path.resolve(__dirname, 'src/components'),
      },
      extensions: ['.js', '.json', '.jsx', '.tsx', '.ts'],
      fallback: {
        url: require.resolve('url/'),
        fs: false,
      },
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allContentfulResource(filter: { techTalkSlug: { regex: "//" } }) {
          nodes {
            title
            type
            link
            techTalkSlug
            techTalkPdf {
              file {
                url
              }
            }
            techTalkTitle
            techTalkSubTitle
          }
        }
        allContentfulArt(sort: { date: DESC }) {
          nodes {
            title
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }

  const pageTemplate = path.resolve('./src/templates/flexible.jsx');
  const artTemplate = path.resolve('./src/templates/art.jsx');

  const allResources = result.data.allContentfulResource.nodes;
  const allArt = result.data.allContentfulArt.nodes;

  if (allResources.length > 0) {
    allResources.forEach((resource) => {
      if (resource.techTalkSlug) {
        createPage({
          path: resource.techTalkSlug,
          component: pageTemplate,
          context: {
            slug: resource.techTalkSlug,
            type: 'conference',
            data: resource,
          },
        });
      }
    });
  }

  if (allArt.length > 0) {
    allArt.forEach((art) => {
      const slug = `/art/${art.title.toLowerCase().replace(/\s+/g, '-')}`;
      createPage({
        path: slug,
        component: artTemplate,
        context: {
          slug: slug,
          type: 'art',
          title: art.title,
        },
      });
    });
  }

  createPage({
    path: '/',
    component: pageTemplate,
    context: {
      slug: '/',
      type: 'home',
      animation: 'circle',
    },
  });

  createPage({
    path: '/developer',
    component: pageTemplate,
    context: {
      slug: '/developer',
      type: 'developer',
      animation: 'square',
    },
  });

  createPage({
    path: '/artist',
    component: pageTemplate,
    context: {
      slug: '/artist',
      type: 'artist',
    },
  });

  createPage({
    path: '/contact',
    component: pageTemplate,
    context: {
      slug: '/contact',
      type: 'contact',
    },
  });

  createPage({
    path: '/resume',
    component: pageTemplate,
    context: {
      slug: '/resume',
      type: 'resume',
    },
  });

  createPage({
    path: '/about',
    component: pageTemplate,
    context: {
      slug: '/about',
      type: 'about',
    },
  });

  createPage({
    path: '/gift-search',
    component: pageTemplate,
    context: {
      slug: '/gift-search',
      type: 'gift-search',
    },
  });
};
