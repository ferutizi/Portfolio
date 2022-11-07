import './Footer';
import './Footer.scss'
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Footer = () => {
    const {theme} = useContext(ThemeContext);
    return(
        <div className='footer__container'>
        </div>
    )
}

export default Footer;