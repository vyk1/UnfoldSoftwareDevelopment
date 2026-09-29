import React from 'react'
import './sucess.scss'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Helmet from 'react-helmet'

const Success = () => (
    <Layout>
        <Helmet>
            <title>Unfold Software | Sucesso</title>
        </Helmet>

        <div className="header-custom email-signup-thankyou">
            <div className="content">
                <div className="left-hole"></div>
                <div className="right-hole"></div>
                <div className="main-content">
                    <h1>Sucesso!</h1>
                    <p> Obrigado por entrar em contato conosco!
                    Responderemos em breve <span role="img" aria-label="Winky">&#128521;</span>
                    </p>
                    <Link to="/">
                        <p className="strong">
                            <i className="fa fa-hand-o-left" aria-hidden="true"></i>
                        Voltar para a página inicial</p>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
)

export default Success
