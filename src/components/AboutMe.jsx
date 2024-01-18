import './AboutMe.scss'

const AboutMe = () => {
  return (
    <section>
      <h3 className='subtitle' id='about-me'>Sobre mí</h3>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{ display: 'flex', maxWidth: "900px", justifyContent: "center", alignContent: "center", alignItems: "center", position: "relative"}}>
          <div className='frame--photo' aria-label='Fotografía perfil de Fernando Utizi'></div>
          <p className='about__text'>
            Mi pasión por la tecnología y por el aprendizaje me ha llevado a estudiar <span> programación </span>
            de forma <span>autodidácta</span> desde Febrero de 2022. La carrera y experiencia de <span>profesor</span> de música me brindó herramientas
            pedagógico-didácticas y de autoconocimiento, así como también de <span> transmisión</span> de los conocimientos y
            <span> trabajo en equipo</span>. En agosto de 2023, luego de descubrir que el desarrollo Frontend combinaba mi entusiasmo por la tecnología, 
            la web, y mi lado artístico, decidí inscribirme en la <span>Tecnicatura superior en computación</span>, dictada por la Universidad Nacional del Sur UNS 
            para fortalecer y complementar mi estudio particular del área. Actualmente, me encuentro en una búsqueda activa de empleo para aportar mis conocimientos, 
            fortalecerlos y en un futuro también poder ayudar y guiar a compañeros desarrolladores en su formación y trabajo. 
            Por otra parte, compongo mis propias obras musicales y hago contenido de música en vivo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
