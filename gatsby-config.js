const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Tranity Project Blog`,
    name: `Tranity Project Blog`,
    siteUrl: `https://blog.tranityproject.com`,
    description: `Tranity Project is an open source community that help people to make their own application, web or mobile.`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `Perspectives on technology, design and business from the team at Tranity Project.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/tranityproject`,
      },
      {
        name: `github`,
        url: `https://github.com/tranityproject`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        rootPath: "/",
        basePath: "/",
        authorsPage: true,
        mailchimp: false,
        sources: {
          local: true,
          contentful: false,
        },
      },
    },
  ],
};
