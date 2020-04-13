module.exports = {
  siteMetadata: {
    title: `Tech4Humans`,
    description: `Tech4Humans is a podcast dedicated towards showcasing tech projects that are making a positive impact on humanity.`,
    author: `Rahat Chowdhury and Hasibul Chowdhury`,
    keywords: ["podcast", "tech", "tech4humans", "rahat", "hasibul", "technology", "humanity", "chowdhury"],
    siteUrl: `https://www.tech4humans.io`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: 'gatsby-source-anchor',
      options: {
        rss: 'https://anchor.fm/s/13b5b018/podcast/rss',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/staticData/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#B5651E`,
        theme_color: `#B5651E`,
        display: `minimal-ui`,
        icon: `src/images/Grupo61.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/episodes/`,
      },
    },
    `gatsby-plugin-mdx`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

