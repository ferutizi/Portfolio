import './Nav.scss'

const Nav = () => {
    return(
        <nav className="nav">
                <p className="logo">Fernando Utizi</p>
            <div className="sections">
                <p className='click'>proyectos</p>
                <p className='click'>Sobre mí</p>
                <p className='click'>Contáctame</p>  
            </div>
            <div className="icons">
                <p className='click'>Git</p> 
                <p className='click'>Linkedin</p> 
                <p className='click'>NightMode</p> 
            </div>
        </nav>
    )
}

export default Nav