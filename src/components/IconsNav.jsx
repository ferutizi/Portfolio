import './IconsNav.scss';

const IconsNav = ({ cvOk, setCvOk }) => {
    return(
        <>
            <a href='https://github.com/ferutizi' target='_blank'>
                <img className='nav--icon' src={require('../img/icons/github.png')}></img>
            </a>
            <a href='https://www.linkedin.com/in/fernando-utizi-2a72a3233/' target='_blank'>
                <img className='nav--icon' src={require('../img/icons/linkedin.png')}></img>
            </a>
            <a href='Fernando Utizi-FrontEnd Developer-CV.pdf' download='Fernando Utizi-FrontEnd Developer-CV.pdf' target='_blank'>
                <img className='nav--icon' src={require(`../img/icons/${cvOk ? 'cv_ok' : 'cv'}.png`)} onClick={() => setCvOk(true)}></img>
            </a>
        </>
    );
}

export default IconsNav;