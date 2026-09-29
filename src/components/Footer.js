import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        <p className="copyright">&copy; {new Date().getFullYear()} Unfold Software Development. Chapecó, SC, Brasil. CNPJ 67.318.425/0001-14.
        <br />
        Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>. Background with: <a href="https://rpj.bembi.org/">React Particles JS</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
