import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h1>Oops,</h1>
    <p>Página não encontrada.</p>
    <p>
      <Link href="/">
        <i class="fa fa-hand-o-left" aria-hidden="true"></i>
      Clique aqui para voltar
      </Link>
    </p>
  </Layout>
)

export default NotFoundPage
