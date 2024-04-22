import './Experience.scss'
import ProyectsRepo from './ProyectsRepo'
import Icon from './Icon'

const Experience = () => {
  return (
    <section>
      <h3 className='subtitle'>Experiencia</h3>
      <div className='experience__container'>
        <div className='experience__card'>
          <a href='https://www.tremoloescuela.com/' target='_blank' rel='noreferrer'>
            <img
              className='experience__img'
              src={require('../img/tremolo.webp')}
              alt='Trémolo escuela de guitarra'
            />
          </a>
          <div className='details__container'>
            <a href='https://www.tremoloescuela.com/' target='_blank' rel='noreferrer'>
              <h3 className='experience__title'>Trémolo - Escuela de guitarra</h3>
            </a>
            <p className='experience__text'>
              Página publicitaria con sistema de inscripción online, diseño
              propio y paginación con React Router. Implementación de google maps.
              Desplegada en vercel con dominio propio
            </p>
            <div className='experience__icons'>
              <div className='experience__icons--left'>
                <Icon
                  src={require('../img/icons/React.webp')}
                  alt='React'
                />
                <Icon
                  src={require('../img/icons/React Router.webp')}
                  alt='React Router'
                />
                <Icon
                  src={require('../img/icons/Sass.webp')}
                  alt='Sass'
                />
              </div>
              <div className='proyect__icons--right'>
                <ProyectsRepo
                  repository='https://github.com/ferutizi/tremolo-escuela-guitarra'
                  deploy='https://www.tremoloescuela.com/'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
