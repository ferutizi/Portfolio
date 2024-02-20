import './ProyectsRepo.scss'

const ProyectsRepo = ({ repository, deploy }) => {
  return (
    <>
      <a className='a--experience' href={repository} target='_blank' rel='noreferrer'>
        <img
          className='icon'
          src={require('../img/icons/github.webp')}
          alt='github'
        />
      </a>
      <a className='a--experience' href={deploy} target='_blank' rel='noreferrer'>
        <img
          className='icon'
          src={require('../img/icons/deploy.webp')}
          alt='deploy'
        />
      </a>
    </>
  )
}

export default ProyectsRepo
