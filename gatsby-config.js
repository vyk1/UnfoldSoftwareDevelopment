module.exports = {
  siteMetadata: {
    title: 'Unfold Software Development',
    author: 'Victoria Botelho Martins',
    description:
      'Sistemas web sob medida, automação de processos (BPM/Camunda) e integrações em Chapecó, SC. Transformação digital para o seu negócio.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Unfold Software Development',
        short_name: 'Unfold',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/unfold_icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
