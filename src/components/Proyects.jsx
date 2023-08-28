import './Proyects.scss'
import { useState } from 'react'
import proyects from '../Proyects.json'
import moreProyects from '../MoreProyects.json'
import MapProyecs from './MapProyects'

const Proyects = () => {
  const [visible, setVisible] = useState(false)

  return (
    <section>
      <h3 id='proyects' className='subtitle'>Proyectos</h3>
      <div className='proyect__container'>
        <MapProyecs mapProyect={proyects} />
        {
          visible && <MapProyecs mapProyect={moreProyects} />
        }
      </div>
      <button
        className='button button--ver'
        onClick={() => setVisible(!visible)}
      >Ver {visible ? 'menos' : 'más'}
      </button>
    </section>
  )
}

export default Proyects
