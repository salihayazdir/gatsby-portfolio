/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'portfolio',
    author: 'salih'
  },
  
  plugins: [
    'gatsby-plugin-postcss',

    'gatsby-plugin-image',

    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'qddq7dst2498',
        accessToken: 'dV52FtgUEin0YGHNXwXaUtXViMNZp_LvVicQ_sN2p6o',
      },
    },
    
    
  ],
}
