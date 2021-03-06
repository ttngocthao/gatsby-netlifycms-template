/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "website name",
    titleTemplate: "",
    description: "description",
    url: "https://www.arthaus.co.uk", // No trailing slash allowed!
    image: "/images/favicon.icon", // Path to your image you placed in the 'static' folder
    twitterUsername: "accountName",
    facebookUsername: "accountName",
    instagramUsername: "accountName",
    linkedInUsername: "accountName",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./src/pages` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/pages/blog`,
        name: "blogData",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/pages`,
        name: "pagesData",
      },
    },
    { resolve: `gatsby-remark-source-name` },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
    { resolve: "gatsby-plugin-react-helmet" },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato", "Droid Serif"],
        },
        //use local font - uncomment below
        // custom: {
        //   families: ["Lato-Reg,Lato-Light,Lato-Black,Black"],
        //   urls: [`/fonts/fonts.css`], //fonts folder should be placed in static folder
        // },
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
    //not sure if below needed
    // {
    //   resolve: `gatsby-plugin-netlify-identity`,
    //   options: {
    //     url: `https://nostalgic-curran-576267.netlify.app`, // required!
    //   },
    // },
  ],
}
