import './Form.scss';
import { useFormik } from 'formik';
import { useState } from 'react';

const validate = (values) => {
    const errors = {}
    if(!errors.name) {
        errors.name = 'requerido'
    }
    if(!errors.email) {
        errors.email = 'requerido'
    }
    if(!errors.subject) {
        errors.subject = 'requerido'
    }
    if(!errors.message) {
        errors.message = 'requerido'
    }
    return errors;
}

const Form = () => {
    const [mail, setMail] = useState();

    const contacto = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validate,
        onSubmit: (values, {resetForm}) => {
            setMail(values);
            resetForm({values: ''});
        }
    });

    return(
        <form onSubmit={contacto.handleSubmit}>
            <input
                type='text'
                placeholder='Nombre'
                {...contacto.getFieldProps('name')} 
            />
            {contacto.errors.name ? <div style={{color: 'red'}}>{contacto.errors.name}</div> : null}
            <input
                type='email'
                placeholder='E-mail'
                {...contacto.getFieldProps('email')} 
            />
            {contacto.errors.email ? <div>{contacto.errors.email}</div> : null}
            <input
                type='text'
                placeholder='Asunto'
                {...contacto.getFieldProps('subject')} 
            />
            {contacto.errors.subject ? <div>{contacto.errors.subject}</div> : null}
            <input
                type='text-area'
                placeholder='Mensaje'
                {...contacto.getFieldProps('message')} 
            />
            {contacto.errors.message ? <div>{contacto.errors.message}</div> : null}
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Form;