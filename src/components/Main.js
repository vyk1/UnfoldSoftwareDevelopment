import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/quem_somos.png'
import pic02 from '../images/programming.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
        onKeyDown={() => {
          this.props.onCloseArticle()
        }}
        role="button"
        tabIndex="0"
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Quem Somos</h2>
          <span className="image main">
            <img src={pic01} alt="quem somos" />
          </span>
          <p>
            A <i>Unfold Software Development</i> é uma empresa especializada em desenvolvimento de <i>Software</i> para diversos propósitos.
          </p>
          <p>Mas nossa maior preocupação é que nossos clientes tenham resultados de qualidade e esperados.</p>
          <p>Portanto, antes de darmos o primeiro passo, utilizamos a metodologia <i>Design First</i>, em que desenhamos o sistema conjuntamente.</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Especialidades</h2>
          <span className="image main">
            <img src={pic02} alt="Coding" />
          </span>
          <p>
            Arquitetamos e desenvolvemos aplicativos <i>mobile</i> (iOS e Android), websites e <i>Progressive Web Apps</i>.
          </p>
          <p>
            SEO - Temos ferramentas para que seu site apareça na primeira página!
          </p>
          <p>
            Trabalhamos para que tudo você precise se preocupar seja apenas com a Hospedagem <span role="img" aria-label="Winky">&#128521;</span>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Responsável</h2>
          <p>
            Confira o <a href="https://vyk1.github.io" target="_blank" rel="noopener noreferrer">Portifólio</a>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Fale Conosco</h2>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success/" data-netlify-recaptcha="true" >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="field half first">
              <label htmlFor="name">Nome</label>
              <input required type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input required type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Mensagem</label>
              <textarea required name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Enviar Mensagem" className="special" />
              </li>
              <li>
                <input type="reset" value="Resetar" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://api.whatsapp.com/send?phone=5549988689761" className="icon fa-whatsapp">
                <span className="label">Whatsapp</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/vyk1"
                rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:unfoldsd@gmail.com"
                rel="noopener noreferrer"
                className="icon fa-envelope"
              >
                <span className="label">E-mail</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
