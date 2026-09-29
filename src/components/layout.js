import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { property: 'og:type', content: 'website' },
              { property: 'og:locale', content: 'pt_BR' },
              { property: 'og:site_name', content: data.site.siteMetadata.title },
              { property: 'og:title', content: data.site.siteMetadata.title },
              { property: 'og:description', content: data.site.siteMetadata.description },
              { property: 'og:url', content: data.site.siteMetadata.siteUrl },
              { property: 'og:image', content: `${data.site.siteMetadata.siteUrl}/og-image.jpg` },
              { property: 'og:image:width', content: '1200' },
              { property: 'og:image:height', content: '630' },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'keywords', content: 'victoria botelho martins, unfold, software, development, desenvolvimento, soluções, modernas, digitais, sistemas, sistemas web, websites, chapecó, automação de processos, transformação digital, bpm, camunda, integrações, backend, empresa, empreendedorismo, tsuru, origami, santa catarina' },
            ]}
          >
            <html lang="pt-BR" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
