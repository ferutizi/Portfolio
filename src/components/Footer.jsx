import './Footer';
import { useState } from 'react';
import Form from './Form';

const Footer = () => {
    const [mail, setMail] = useState();

    return(
        <div>
            <Form />
        </div>
    )
}

export default Footer;