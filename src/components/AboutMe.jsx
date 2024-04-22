import './AboutMe.scss'

const AboutMe = () => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 className='subtitle' id='about-me'>Sobre mí</h3>
      <div className='about__container'>
        <article className='about__container--mobile'>
          <img className='photo' src={require('../img/fernando.webp')} />
          <p className='about__text'>
            Mi pasión por la tecnología y por el aprendizaje me ha llevado a estudiar <span> programación </span>
            de forma <span>autodidácta</span> desde Febrero de 2022. Sin embargo, actualmente soy estudiante de la
            <span>Tecnicatura superior en computación</span>, dictada por la Universidad Nacional del Sur.
            <hr />
            Por otra parte, cuento con una carrera de <span>profesor</span> de música, la cual me ha brindado herramientas
            pedagógico-didácticas, de <span> transmisión</span> de conocimientos y
            <span> trabajo en equipo</span>. A su vez, compongo mis propias obras musicales y hago contenido de música en vivo.
            <hr />
            Actualmente, me encuentro en una <span>búsqueda activa</span> de empleo para aportar mis conocimientos,
            fortalecerlos y que eso me permita ayudar y guiar a compañeros desarrolladores en su formación y trabajo.
          </p>
        </article>
      </div>
    </section>
  )
}

export default AboutMe
