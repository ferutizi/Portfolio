import './IconsNav.scss';

const IconsNav = () => {
    return(
        <>
            <a href='https://github.com/ferutizi' target='_blank'>
                <img className='nav--icon' src={require('../img/icons/github.png')}></img>
            </a>
            <a href='https://www.linkedin.com/in/fernando-utizi-2a72a3233/' target='_blank'>
                <img className='nav--icon' src={require('../img/icons/linkedin.png')}></img>
            </a>
            <a href='CV - Fernando Utizi.pdf' download='CV - Fernando Utizi.pdf' target='_blank'>
                <img className='nav--icon' src={require('../img/icons/cv.png')}></img>
            </a>
        </>
    );
}

export default IconsNav;