import './Nav.scss';

const Nav = () => {
    return(
        <nav className="nav">
                <a href='#home' className="logo">Fernando Utizi</a>
            <div className="sections">
                <a href='#proyects' className='nav--button'>Proyectos</a>
                <div className='nav--button__div'></div>
                <a href='#about-me' className='nav--button'>Sobre mí</a>
                <div className='nav--button__div'></div>
                <a href='#contact' className='nav--button'>Contacto</a>  
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
            </div>
            <div className='nav--menu'>
                <img className='nav--icon' src={require('../img/icons/menu.png')}></img>
            </div>
        </nav>
    )
}

export default Nav;