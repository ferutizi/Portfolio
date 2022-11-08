import IconsNav from './IconsNav';
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
                    <IconsNav />
                </div>
            </div>
        </nav>
    )
}

export default Nav;