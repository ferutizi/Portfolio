import './Proyectos.scss'
import supermarket from "../img/supermarket.jpg"

import { useState } from 'react'



const Proyectos = () => {
    const [visible, setVisible] = useState(false)

    const ver = visible

    const proyectos = [
        {
            title: "Proyecto1",
            img: "supermarket.jpg",
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, in.`,
            icon1: "",
        },
        {
            title: "Proyecto2",
            img: "supermarket.jpg",
            text: "",
            icon1: "",
        },
        {
            title: "Proyecto3",
            img: "supermarket.jpg",
            text: "",
            icon1: "",
        }
    ]


    return(
        <div className='proyect__container'>
                {proyectos.map(item => 
                    <div className='proyect'>
                        <h3 className='title'>{item.title}</h3>
                        <img className='img' src={require(`../img/${item.img}`)}></img>
                        <div className='text__container'>
                            <p className='text'>{item.text}</p>
                        </div>
                        <div className='icons'>
                            <img></img>
                        </div>
                    </div>
                )}

            {visible &&
                <div className="more-proyects">
                    
                    <div className='proyect'>
                        <h3 className='title'>Proyecto 4</h3>
                        <img className='img' src={supermarket}></img>
                        <p className='text'>Lorem ipsum, dolor sit amet<br />consectetur adipisicing elit. <br /> Obcaecati, in.</p>
                        <div className='icons'>
                            <img></img>
                        </div>
                    </div>

                    <div className='proyect'>
                        <h3 className='title'>Proyecto 5</h3>
                        <img className='img' src={supermarket}></img>
                        <p className='text'>Lorem ipsum, dolor sit amet<br />consectetur adipisicing elit. <br /> Obcaecati, in.</p>
                        <div className='icons'>
                            <img></img>
                        </div>
                    </div>

                    <div className='proyect'>
                        <h3 className='title'>Proyecto 6</h3>
                        <img className='img' src={supermarket}></img>
                        <p className='text'>Lorem ipsum, dolor sit amet<br />consectetur adipisicing elit. <br /> Obcaecati, in.</p>
                        <div className='icons'>
                            <img></img>
                        </div>
                    </div>

                </div>
            }
            <button className='button button--ver' onClick={() => setVisible(!visible)}>Ver {ver ? 'menos' : 'más'}</button>
        </div>
    )
}

export default Proyectos