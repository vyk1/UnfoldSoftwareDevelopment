import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/quem_somos.png'
import pic02 from '../images/programming.jpg'
import projects from '../data/projects'

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
            Arquitetamos e desenvolvemos sistemas <i>web</i> sob medida para o seu negócio.
          </p>
          <p>
            Automação de processos - Modelamos e automatizamos fluxos de trabalho com BPM (Camunda), reduzindo tarefas manuais e retrabalho.
          </p>
          <p>
            Integrações e sistemas <i>backend</i> - Conectamos seus sistemas e serviços com APIs robustas e escaláveis.
          </p>
          <p>
            SEO - Temos ferramentas para que seu site apareça na primeira página!
          </p>
          <p>
            Cuidamos do projeto de ponta a ponta, do levantamento de requisitos à publicação, para que você possa focar no seu negócio <span role="img" aria-label="Winky">&#128521;</span>
          </p>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projetos</h2>
          {projects.map((project, index) => (
            <section key={project.id}>
              {index > 0 && <hr />}
              <h3>{project.name}</h3>
              {project.media && project.media.type === 'image' && (
                <span className="image main">
                  <img src={project.media.src} alt={project.media.alt || project.name} />
                </span>
              )}
              {project.media && project.media.type === 'video' && (
                <video
                  className="project-video"
                  src={project.media.src}
                  poster={project.media.poster}
                  controls
                  muted
                  playsInline
                  preload="none"
                />
              )}
              <p>{project.description}</p>
              {project.link && (
                <ul className="actions">
                  <li>
                    <a
                      href={project.link.href}
                      className="button"
                      {...(project.link.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {project.link.label}
                    </a>
                  </li>
                </ul>
              )}
            </section>
          ))}
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
            À frente da <i>Unfold</i> está Victoria Botelho Martins, M.Sc. em Ciência da Computação pela UFSC e engenheira <i>backend</i> com experiência em Java, Spring Boot e AWS.
          </p>
          <p>
            Confira o <a href="https://vyk1.github.io" target="_blank" rel="noopener noreferrer">Portfólio</a>
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
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success/" >
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
            <h4>Ou se preferir...</h4>
            <li>
              <h5>Whatsapp</h5>
              <a
                href="https://api.whatsapp.com/send?phone=5549988689761"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-whatsapp text-center">
                <span className="label">Whatsapp</span>
              </a>
            </li>
            <li>
              <h5>Email</h5>
              <a
                href="mailto:unfoldsd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-envelope text-center"
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
