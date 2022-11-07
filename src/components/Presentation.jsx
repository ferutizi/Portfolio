import './Presentation.scss';

const Presentation = () => {
    return(
        <div className='presentation__container'>
            <div className='presentation__title'>
                <h1>Fernando Utizi</h1>
                <h2 className='subtitle'>Front-end Developer</h2>
                <p>Soy un apasionado de la <span> tecnología</span>, <br></br>
                    la <span> creatividad</span> y el<span> aprendizaje</span>
                </p>
            </div>
            <div className='imagen__exodo'>
                <img
                    className='exodo__off'
                    src={require('../img/exodo_off.png')}
                    alt="portada guitarra exodo"
                />
                <img
                    className='exodo__on'
                    src={require('../img/exodo_on.png')}
                    alt="portada guitarra exodo"
                />
            </div>
        </div>
    );
}

export default Presentation;