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

        <div class="header-custom email-signup-thankyou">
            <div class="content">
                <div class="left-hole"></div>
                <div class="right-hole"></div>
                <div class="main-content">
                    <h1>Sucesso!</h1>
                    <p> Obrigad@ por entra em contato conosco!
                    Espere por nossa resposta em breve <span role="img" aria-label="Winky">&#128521;</span>
                    </p> {/* We really appreciate you giving us a moment of your time.</p> */}
                    <Link href="/">
                        <p class="strong">
                            <i class="fa fa-hand-o-left" aria-hidden="true"></i>
                        Voltar para a página inicial</p>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
)

export default Success
