import './Tecnology.scss';

const Tecnology = ({ tecnology, text }) => {
    return(
        <div className="tecnology">
            <img 
                className="icon"
                src={require(`../img/icons/${tecnology}.png`)}
                alt={tecnology}
            />
            <p>{text}</p>
        </div>
    )
}

export default Tecnology;