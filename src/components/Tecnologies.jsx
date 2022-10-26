import Tecnology from "./Tecnology";
import './Tecnology.scss'

const Tecnologies = () => {

    return(
        <>
            <h3>Tecnologías</h3>
            <div className="tecnology__container">
                <Tecnology tecnology={'react'} text={'React'} />
                <Tecnology tecnology={'redux'} text={'Redux'}/>
                <Tecnology tecnology={'css'} text={'CSS'}/>
                <Tecnology tecnology={'sass'} text={'Sass'}/>
                <Tecnology tecnology={'bootstrap'} text={'Bootstrap'}/>
                <Tecnology tecnology={'js'} text={'JavaScript'}/>
                <Tecnology tecnology={'html'} text={'HTML'} />
            </div>
        </>
    )
}

export default Tecnologies;
    
