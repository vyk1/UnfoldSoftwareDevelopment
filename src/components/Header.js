import PropTypes from 'prop-types'
import React from 'react'
import icon from '../images/unfold_icon_2.png'
import './styles.css'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={icon} alt="icon" style={{ maxWidth: '100%', maxHeight: '80%', paddingTop: '7%' }} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Unfold Software Development</h1>
        <p>
          Desenvolvimento Descomplicado
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Quem Somos
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Especialidades
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Responsável
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Fale conosco
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
