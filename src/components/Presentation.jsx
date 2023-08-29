import './Presentation.scss'

const Presentation = ({ cvOk, setCvOk }) => {
  return (
    <section className='presentation__container'>
      <div className='presentation__title'>
        <h1>Fernando Utizi</h1>
        <h2 className='subtitle'>Front-end Developer</h2>
        <p>Soy un apasionado de la <span> tecnología</span>, <br />
          la <span> creatividad</span> y el<span> aprendizaje</span>
        </p>
        <div className='nav--group__presentation'>
          <a href='https://github.com/ferutizi' target='_blank' rel='noreferrer'>
            <img className='nav--icon' src={require('../img/icons/github.png')} />
          </a>
          <a href='https://www.linkedin.com/in/fernando-utizi-2a72a3233/' target='_blank' rel='noreferrer'>
            <img className='nav--icon' src={require('../img/icons/linkedin.png')} />
          </a>
          <a href='Fernando Utizi - FrontEnd Developer - CV.pdf' download='Fernando Utizi - FrontEnd Developer - CV.pdf' target='_blank' rel='noreferrer'>
            <img className='nav--icon' src={require(`../img/icons/${cvOk ? 'cv_ok' : 'cv'}.png`)} onClick={() => setCvOk(true)} />
          </a>
        </div>
      </div>
      <div className='imagen__exodo'>
        <img
          className='exodo__off'
          src={require('../img/exodo_off.png')}
          alt='portada guitarra exodo'
        />
        <img
          className='exodo__on'
          src={require('../img/exodo_on.png')}
          alt='portada guitarra exodo'
        />
      </div>
    </section>
  )
}

export default Presentation