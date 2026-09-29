import vetorizadorVideo from '../videos/vetorizador-demo.mp4'
import vetorizadorPoster from '../images/vetorizador-poster.jpg'

// Para incluir um novo projeto, basta adicionar um objeto a este array.
// media (opcional): { type: 'image', src, alt } ou { type: 'video', src, poster }
const projects = [
  {
    id: 'confera',
    name: 'Confera',
    description:
      'Confera reúne submissão de trabalhos, avaliação com controle de conflito de interesse e cobrança de inscrição com split automático em uma só plataforma, pronta para uso imediato no seu próximo evento.',
    link: {
      href: 'https://confera.web.app/',
      label: 'Acessar o Confera',
    },
  },
  {
    id: 'vetorizador',
    name: 'Vetorizador',
    description:
      'Converte logo/arte em JPG ou PNG para SVG vetorizado, pronto para ir para a serigrafia.',
    link: {
      href:
        'mailto:unfoldsd@gmail.com?subject=Acesso%20ao%20Vetorizador',
      label: 'Solicitar acesso',
    },
    media: {
      type: 'video',
      src: vetorizadorVideo,
      poster: vetorizadorPoster,
    },
  },
]

export default projects
