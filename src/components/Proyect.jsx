import './Proyect.scss'
import supermarket from "../img/supermarket.jpg"

const Proyect = () => {
    return(
        <div className='proyect'>
            <h3 className='title'>Proyecto 1</h3>
            <img className='img' src={supermarket}></img>
            <p className='text'>Lorem ipsum, dolor sit amet<br />consectetur adipisicing elit. <br /> Obcaecati, in.</p>
            <div className='icons'>
                <img></img>
            </div>
        </div>
    )
}

export default Proyect