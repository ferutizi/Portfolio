import Tecnology from "./Tecnology";
import tecnologies from "../Tecnologies.json";
import './Tecnology.scss';

const Tecnologies = () => {
    return(
        <>
            <h3 className="subtitle">Tecnologías</h3>
            <div className="tecnology__container">
                {tecnologies.map(item => 
                    <Tecnology key={item.id} tecnology={item.tecnology} text={item.text} />
                )}
            </div>
        </>
    )
}

export default Tecnologies;
    
