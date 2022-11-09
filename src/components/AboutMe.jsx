import './AboutMe.scss';

const AboutMe = () => {
    return(
        <>
            <h6 className='subtitle' id='about-me'>Sobre mí</h6>
            <div style={{display: 'flex'}}>
            <p className='about__text'>
                Mi pasión por la <span>tecnología</span> y por el aprendizaje me ha llevado a estudiar <span> programación </span> 
                de forma <span>autodidácta</span>. La carrera y experiencia de <span>profesor</span> de música me brindó herramientas
                pedagógico-didácticas y de autoconocimiento, así como también de <span> transmisión</span> de los conocimientos y 
                <span> trabajo en equipo</span>. Por otra parte, compongo mis propias obras y hago contenido de música en vivo. 
                Actualmente me encuentro en <span>constante aprendizaje</span> y al pendiente de las nuevas tecnologías para 
                <span> fortalecer</span> mi formación en el ámbito profesional IT.
            </p>
            </div>
        </>
    );
}

export default AboutMe;