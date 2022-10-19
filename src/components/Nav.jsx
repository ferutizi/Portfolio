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
                <p className='nav--button'>G</p> 
                <p className='nav--button'>L</p> 
                <p className='nav--button'>N</p> 
            </div>
        </nav>
    )
}

export default Nav;