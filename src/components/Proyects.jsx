import './Proyects.scss';
import { useState } from 'react';
import proyects from '../Proyects.json'
import moreProyects from '../MoreProyects.json';
import MapProyecs from './MapProyects';

const Proyects = () => {
    const [visible, setVisible] = useState(false);
    const ver = visible;

    return(
        <>
            <h3 className='subtitle'>Proyectos</h3>
            <div className='proyect__container'>
                <MapProyecs mapProyect={proyects}/>
                {
                    visible &&
                    <MapProyecs mapProyect={moreProyects}/>
                }
                <button
                    className='button button--ver'
                    onClick={() => setVisible(!visible)}
                >Ver {ver ? 'menos' : 'más'}
                </button>
            </div>
        </>
    )
}

export default Proyects;