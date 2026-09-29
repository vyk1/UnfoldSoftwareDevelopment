import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Unfold Software | Página Não Encontrada</title>
    </Helmet>
    
    <h1>Oops,</h1>
    <p>Página não encontrada.</p>
    <p>
      <Link to="/">
        <i className="fa fa-hand-o-left" aria-hidden="true"></i>
      Clique aqui para voltar
      </Link>
    </p>
  </Layout>
)

export default NotFoundPage
