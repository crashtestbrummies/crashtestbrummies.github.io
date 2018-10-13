module.exports = {
  siteMetadata: {
    title: 'Crash Team Brummies - Birmingham Roller Derby',
    facebook: 'http://facebook.com/crashTestBrummies/',
    instagram: 'https://www.instagram.com/crashtestbrummies/',
    email: 'info@crashtestbrummies.co.uk'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-fbevents`,
      options: {
        key: process.env.FB_TOKEN
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `crashtestbrummies`
      }
    },
    // This plugin exposes helper functions for processing
    // images with the NPM package “sharp”. It's used by
    // several other plugins.
    `gatsby-plugin-sharp`,
    // This plugin identifies file nodes that are images and
    // transforms these to create new “ImageSharp” nodes.
    // With them you can resize images and
    // generate responsive image thumbnails.
    `gatsby-transformer-sharp`,
    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    `gatsby-plugin-offline`
  ]
}
