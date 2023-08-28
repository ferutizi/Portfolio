import './Form.scss'
import { useFormik } from 'formik'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
  const validate = (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = 'requerido'
    }
    if (!values.email) {
      errors.email = 'requerido'
    }
    if (!values.subject) {
      errors.subject = 'requerido'
    }
    if (!values.message) {
      errors.message = 'requerido'
    }
    return errors
  }

  const form = useRef()

  const contacto = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      emailjs.sendForm('service_tylurvk', 'template_v133iy8', form.current, 'BWCL7ZUqJm6x267aG')
        .then((result) => {
          console.log(result.text)
        }, (error) => {
          console.log(error.text)
        })
      resetForm({ values: '' })
    }
  })

  return (
    <section>
      <h3 className='subtitle' id='contact'>Contacto</h3>
      <form onSubmit={contacto.handleSubmit} className='form__container' ref={form}>
        <div className='form'>
          <div className='input__row'>
            <input
              className='input__margin--right'
              type='text'
              placeholder='Nombre'
              {...contacto.getFieldProps('name')}
            />
            {contacto.touched.name && contacto.errors.name ? <div className='form__errors'>{contacto.errors.name}</div> : null}
            <div className='input__div' />
            <input
              className='input__margin--left'
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
          {contacto.touched.subject && contacto.errors.subject ? <div className='form__errors2'>{contacto.errors.subject}</div> : null}
          <textarea
            type='text-area'
            placeholder='Mensaje...'
            className='input__row text-area'
            {...contacto.getFieldProps('message')}
          />
          {contacto.touched.message && contacto.errors.message ? <div className='form__errors2'>{contacto.errors.message}</div> : null}
          <div>
            <button className='form__button' type='submit'>Enviar</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Form
