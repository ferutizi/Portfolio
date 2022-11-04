import './Form.scss';
import { useFormik } from 'formik';

const Form = ({ setMail }) => {


    const contacto = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        onSubmit: values => setMail(values)
    })

    return(
        <form onSubmit={contacto.handleSubmit}>
            <input
                type='text'
                placeholder='Nombre'
                {...contacto.getFieldProps('name')} />
            <input
                type='email'
                placeholder='E-mail'
                {...contacto.getFieldProps('email')} />
            <input
                type='text'
                placeholder='Asunto'
                {...contacto.getFieldProps('subject')} />
            <input
                type='text-area'
                placeholder='Mensaje'
                {...contacto.getFieldProps('message')} />
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Form;