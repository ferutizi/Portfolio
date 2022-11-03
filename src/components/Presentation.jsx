import './Presentation.scss';

const Presentation = () => {
    return(
        <div className='presentation__container'>
            <div className='presentation__tittle'>
                <h1>Fernando Utizi</h1>
                <h2>Front-end Developer</h2>
                <p>Soy un apasionado de la <span> tecnología</span>
                    ,
                    <br></br>la
                    <span> creatividad</span> y el
                    <span> aprendizaje</span></p>
            </div>
            <div>
                <img className='exodo' src={require('../img/exodo.png')} alt="" />
            </div>
        </div>
    );
}

export default Presentation;