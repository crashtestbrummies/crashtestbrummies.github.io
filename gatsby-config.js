require('dotenv').config()
const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer.js')

module.exports = {
  siteMetadata: {
    title: 'Crash Test Brummies - Men\'s roller derby in Birmingham',
    canonical: 'https://www.crashtestbrummies.co.uk/',
    description: 'Men\'s Roller Derby Association (MRDA) Team based in Birmingham, UK.',
    facebook: 'http://facebook.com/crashTestBrummies/',
    instagram: 'https://www.instagram.com/crashtestbrummies/',
    email: 'info@crashtestbrummies.co.uk',
    stripe_publishable_key: process.env.STRIPE_PUBLISHABLE_KEY
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'ctb-website',
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        // Get the correct URLs in blog posts
        linkResolver: () => team => `/team/${team.uid}`,
        // PrismJS highlighting for labels and slices
        htmlSerializer: () => prismicHtmlSerializer
      }
    },

    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-stripe',
    // {
    //   resolve: `gatsby-source-fbevents`,
    //   options: {
    //     key: process.env.FB_TOKEN
    //   }
    // },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `crashtestbrummies`
      }
    },
    {
      resolve: `gatsby-source-ftsgames`,
      options: {
        teamId: `17631`
      }
    },
    {
      resolve: `@wapps/gatsby-plugin-fonts`,
      options: {
        googleFonts: {
          families: [
            'Oswald:400,600'
          ],
          subsets: [
            'latin'
          ]
        }
      }
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product', 'Sku'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false
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
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Crash Test Brummies`,
        short_name: `CTB`,
        start_url: `/`,
        background_color: `#010101`,
        theme_color: `#f5be0b`,
        // Enables `Add to Homescreen` prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/data/images/crash_test_brummies-logo.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: process.env.GA_TOKEN,
        anonymize: true,
        head: true
      }
    }
  ]
}
