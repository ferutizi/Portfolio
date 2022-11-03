import Tecnology from "./Tecnology";
import './Tecnology.scss';

const Tecnologies = () => {
    return(
        <>
            <h3 className="subtitle">Tecnologías</h3>
            <div className="tecnology__container">
                <Tecnology tecnology={'react'} text={'React'} />
                <Tecnology tecnology={'redux'} text={'Redux'}/>
                <Tecnology tecnology={'css'} text={'CSS'}/>
                <Tecnology tecnology={'sass'} text={'Sass'}/>
                <Tecnology tecnology={'bootstrap'} text={'Bootstrap'}/>
                <Tecnology tecnology={'js'} text={'JavaScript'}/>
                <Tecnology tecnology={'html'} text={'HTML'} />
                <Tecnology tecnology={'github_2'} text={'GitHub'} />
                <Tecnology tecnology={'mySQL'} text={'MySQL'} />
            </div>
        </>
    )
}

export default Tecnologies;
    
