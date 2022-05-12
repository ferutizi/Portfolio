import './Proyectos.scss'

import { useState } from 'react'
import Proyect from "./Proyect"



const Proyectos = () => {
    const [visible, setVisible] = useState(false)

    const ver = visible

    return(
        <div className='proyect__container'>
            <Proyect />
            <Proyect />
            <Proyect />
            {visible &&
                <div className="more-proyects">
                    <Proyect />
                    <Proyect />
                    <Proyect />
                </div>
            }
            <button onClick={() => setVisible(!visible)}>Ver {ver ? 'menos' : 'más'}</button>
        </div>
    )
}

export default Proyectos