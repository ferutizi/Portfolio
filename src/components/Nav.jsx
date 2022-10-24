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
                <img className='nav--icon' src={require('../img/icons/github_white.png')}></img>
                <img className='nav--icon' src={require('../img/icons/linkedin_white.png')}></img>
                <img className='nav--icon' src={require('../img/icons/dark_white.png')}></img>
                {/* github linkedin nightmode */}
            </div>
        </nav>
    )
}

export default Nav;