require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [`category`, `product`],
  singleTypes: [],
};


module.exports = {
  siteMetadata: {
    title: `websitebars`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp', // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
};



