import './IconsNav.scss'

const IconsNav = ({ cvOk, setCvOk }) => {
  return (
    <>
      <a href='https://github.com/ferutizi' target='_blank' rel='noreferrer'>
        <img className='nav--icon' src={require('../img/icons/github.webp')} />
      </a>
      <a href='https://www.linkedin.com/in/fernando-utizi-2a72a3233/' target='_blank' rel='noreferrer'>
        <img className='nav--icon' src={require('../img/icons/linkedin.webp')} />
      </a>
      <a href='Fernando Utizi - FrontEnd Developer - CV.pdf' download='Fernando Utizi - FrontEnd Developer - CV.pdf' target='_blank' rel='noreferrer'>
        <img className='nav--icon' src={require(`../img/icons/${cvOk ? 'cv_ok' : 'cv'}.webp`)} onClick={() => setCvOk(true)} />
      </a>
    </>
  )
}

export default IconsNav
