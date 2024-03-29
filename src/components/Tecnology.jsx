import './Tecnology.scss'

const Tecnology = ({ tecnology, text }) => {
  return (
    <div className='tecnology'>
      <img
        className='proyect__icon'
        src={require(`../img/icons/${tecnology}.webp`)}
        alt={tecnology}
      />
      <p>{text}</p>
    </div>
  )
}

export default Tecnology
