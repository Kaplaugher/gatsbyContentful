module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'ohb62k8xq36j',
        accessToken: 'bb52bddb3694f002a79ed5ea62d1aaf211a479b71d885048506b8e98e56fbb4d'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ],
}