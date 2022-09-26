export default {
  default: {
    slug: '/developer',
    title: 'Developer',
    content: [
      {
        title: 'Resume',
        subTitle: 'experience & skills',
        link: null,
        type: 'Resume',
        techTalkSlug: null,
        techTalkPdf: null,
        internal: {
          type: 'ContentfulResource',
        },
      },
      {
        title: 'About Me',
        subTitle: 'based on a true story',
        link: '/about',
        type: 'Internal Link',
        techTalkSlug: null,
        techTalkPdf: null,
        internal: {
          type: 'ContentfulResource',
        },
      },
      {
        title: 'Insights from a Joot Engineer',
        subTitle: 'navigating startup life',
        link: 'https://joot.io/blog/insights-from-a-joot-engineer-navigating-the-intricacies-of-startup-life',
        type: 'External Link',
        techTalkSlug: null,
        techTalkPdf: null,
        internal: {
          type: 'ContentfulResource',
        },
      },
      {
        title: 'JavaScript History',
        subTitle: 'momentum 2021 talk & article',
        link: 'https://www.ample.co/blog/javascript-history',
        type: 'Tech Talk External Link',
        techTalkSlug: '/momentum-2021',
        techTalkPdf: {
          file: {
            url: '//assets.ctfassets.net/okczg0bbqwnf/4WUs9IinkTKBGVnJHqY7DK/a176af7030c376c1ae45f26d8a7edf4b/25-Years-of-JavaScript-Momentum-2021.pdf',
          },
        },
        internal: {
          type: 'ContentfulResource',
        },
      },
      {
        title: 'What is Jamstack?',
        subTitle: 'interview with ample devs',
        link: 'https://www.ample.co/blog/what-is-jamstack-our-developers-explain-what-a-jamstack-website-is',
        type: 'External Link',
        techTalkSlug: null,
        techTalkPdf: null,
        internal: {
          type: 'ContentfulResource',
        },
      },
    ],
  },
};
