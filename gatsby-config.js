const title = 'Planning'
module.exports = {
  siteMetadata: {
    title: title,
  },
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-theme-material-ui',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-reactfire',
      options: {
        firebaseConfig: {
          apiKey: 'AIzaSyBdOAU2bcA7WE5JpaTFOv9JpjEpcj-YyR8',
          authDomain: 'planning-2f4c9.firebaseapp.com',
          projectId: 'planning-2f4c9',
          storageBucket: 'planning-2f4c9.appspot.com',
          messagingSenderId: '172067337225',
          appId: '1:172067337225:web:cc96cc9a02437b5b27b4d8',
          measurementId: 'G-QN2X3689Y6',
        },
      },
    },
  ],
}
