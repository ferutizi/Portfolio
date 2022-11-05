import './Form.scss';
import { useFormik } from 'formik';
import { useState } from 'react';

const Form = () => {

    const validate = (values) => {
        const errors = {}
        if(!values.name) {
            errors.name = 'requerido'
        }
        if(!values.email) {
            errors.email = 'requerido'
        }
        if(!values.subject) {
            errors.subject = 'requerido'
        }
        if(!values.message) {
            errors.message = 'requerido'
        }
        return errors;
    }

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
            resetForm({values: contacto.initialValues});
        }
    });

    return(
        <form onSubmit={contacto.handleSubmit}>
            <div className='form'>
                <div className='input__row'>
                    <input
                        type='text'
                        placeholder='Nombre'
                        {...contacto.getFieldProps('name')} 
                    />
                    {contacto.touched.name && contacto.errors.name ? <div className='form__errors'>{contacto.errors.name}</div> : null}
                    <input
                        type='email'
                        placeholder='E-mail'
                        {...contacto.getFieldProps('email')} 
                    />
                    {contacto.touched.email && contacto.errors.email ? <div className='form__errors'>{contacto.errors.email}</div> : null}
                </div>
                <input
                    type='text'
                    placeholder='Asunto'
                    className='input__row'
                    {...contacto.getFieldProps('subject')} 
                />
                {contacto.touched.subject && contacto.errors.subject ? <div className='form__errors'>{contacto.errors.subject}</div> : null}
                <input
                    type='text-area'
                    placeholder='Mensaje'
                    className='input__row'
                    {...contacto.getFieldProps('message')} 
                />
                {contacto.touched.message && contacto.errors.message ? <div className='form__errors'>{contacto.errors.message}</div> : null}
            </div>
            <button className='form__button' type='submit'>Enviar</button>
        </form>
    )
}

export default Form;