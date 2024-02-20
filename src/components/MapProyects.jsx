import './Proyects.scss'
import Icon from './Icon'
import ProyectsRepo from './ProyectsRepo'

const MapProyecs = ({ mapProyect }) => {
  return (
    <>
      {mapProyect.map(item =>
        <div key={item.id} className='proyect__card'>
          <a href={item.deploy} target='_blank' rel='noreferrer'>
            <h3 className='proyect__title'>{item.title}</h3>
          </a>
          <a href={item.deploy} target='_blank' rel='noreferrer'>
            <img
              className='proyect__img'
              src={require(`../img/${item.img}`)}
              alt={item.title}
            />
          </a>
          <p className='proyect__text'>{item.text}</p>
          <div className='proyect__icons'>
            <div className='proyect__icons--left'>
              <Icon
                src={require(`../img/icons/${item.icon1}.webp`)}
                alt={item.icon1}
              />
              <Icon
                src={require(`../img/icons/${item.icon2}.webp`)}
                alt={item.icon2}
              />
              <Icon
                src={require(`../img/icons/${item.icon3}.webp`)}
                alt={{ item }.icon3}
              />
            </div>
            <div className='proyect__icons--right'>
              <ProyectsRepo
                repository={item.repository}
                deploy={item.deploy}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MapProyecs
