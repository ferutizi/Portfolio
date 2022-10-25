import './Nav.scss';

const Nav = () => {
    return(
        <nav className="nav">
                <p className="logo">Fernando Utizi</p>
            <div className="sections">
                <p className='nav--button'>proyectos</p>
                <p className='nav--button'>Sobre mí</p>
                <p className='nav--button'>Contáctame</p>  
            </div>
            <div className="icons">
                <div className='nav--group'>
                    <a href='https://github.com/ferutizi' target='_blank'>
                        <img className='nav--icon' src={require('../img/icons/github.png')}></img>
                    </a>
                    <a href='https://www.linkedin.com/in/fernando-utizi-2a72a3233/' target='_blank'>
                        <img className='nav--icon' src={require('../img/icons/linkedin.png')}></img>
                    </a>
                </div>
                <div className='nav--darkmode'>
                    <img className='nav--icon' src={require('../img/icons/dark.png')}></img>
                </div>
            </div>
        </nav>
    )
}

export default Nav;