import ProyectsRepo from "./ProyectsRepo"
import Icon from "./Icon"

const Experience = () => {
    return(
        <section>
            <h3 id='experience' className='subtitle'>Experiencia</h3>
            <div className='proyect__container'>
                <div className='proyect__card--experience'>
                    <h3 className='proyect__title'>Trémolo - Escuela de guitarra</h3>
                    <a href='https://www.tremoloescuela.com/' target='_blank' rel='noreferrer'>
                    <img
                        className='proyect__img--experience'
                        src={require('../img/tremolo.webp')}
                        alt= 'Trémolo escuela de guitarra'
                    />
                    </a>
                    <p className='proyect__text'>Página publicitaria con sistema de inscripción online. Desplegada en vercel con dominio propio </p>
                    <div className='proyect__icons'>
                        <div className='proyect__icons--left'>
                            <Icon
                                className='icon'
                                src={require('../img/icons/react.webp')}
                                alt='react'
                            />
                            <Icon
                                src={require('../img/icons/react-router.webp')}
                                alt='react router'
                            />
                            <Icon
                                src={require('../img/icons/sass.webp')}
                                alt='sass'
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
        </section>
    )
}

export default Experience