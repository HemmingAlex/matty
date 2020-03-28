module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-material-ui',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Berkshire Swash',
            variants: [`400`, `700`] 
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
        ],
      },
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBXlNhZCI0nTuzY6rJZ-JcEpsw6A5g-n_8",
          authDomain: "brand-s-burgers.firebaseapp.com",
          databaseURL: "https://brand-s-burgers.firebaseio.com",
          projectId: "brand-s-burgers",
          // storageBucket: "<YOUR_FIREBASE_STORAGE_BUCKET>",
          // messagingSenderId: "<YOUR_FIREBASE_MESSAGING_SENDER_ID>",
          // appId: "<YOUR_FIREBASE_APP_ID>"
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
}