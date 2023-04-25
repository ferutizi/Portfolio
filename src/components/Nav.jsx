import IconsNav from './IconsNav'
import './Nav.scss'

const Nav = ({ cvOk, setCvOk }) => {
  return (
    <nav className='nav'>
      <a href='#home' className='logo'>Fernando Utizi</a>
      <div className='sections'>
        <a href='#proyects' className='nav--button'>Proyectos</a>
        <div className='nav--button__div' />
        <a href='#about-me' className='nav--button'>Sobre mí</a>
        <div className='nav--button__div' />
        <a href='#contact' className='nav--button'>Contacto</a>
      </div>
      <div className='icons'>
        <div className='nav--group'>
          <IconsNav cvOk={cvOk} setCvOk={setCvOk} />
        </div>
      </div>
    </nav>
  )
}

export default Nav
