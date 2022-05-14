import './Proyectos.scss'
import supermarket from "../img/supermarket.jpg"

import { useState } from 'react'



const Proyectos = () => {
    const [visible, setVisible] = useState(false)

    const ver = visible

    const proyectos = [
        {
            title: "hola",
            img: "supermarket.jpg",
            text: `Lorem ipsum, dolor sit amet ${<br />}consectetur adipisicing elit. ${<br />} Obcaecati, in.`,
            icon1: "",
        },
        {
            title: "titulo2",
            img: "",
            text: "",
            icon1: "",
        },
        {
            title: "",
            img: "",
            text: "",
            icon1: "",
        }
    ]


    return(
        <div className='proyect__container'>
            <ul>
                {proyectos.map(item => 
                    <div className='proyect'>
                        <h3 className='title'>{item.title}</h3>
                        <p>../img/{item.img}</p>
{/*                         <img className='img' src={require('../img/'+ item.img)}></img> */}
                        <p className='text'>{item.text}</p>
                        <div className='icons'>
                            <img></img>
                        </div>
                    </div>
                )}
            </ul>
            <div className='proyect'>
                <h3 className='title'>Proyecto 1</h3>
                <img className='img' src={supermarket}></img>
                <p className='text'>Lorem ipsum, dolor sit amet<br />consectetur adipisicing elit. <br /> Obcaecati, in.</p>
                <div className='icons'>
                    <img></img>
                </div>
            </div>

            <div className='proyect'>
                <h3 className='title'>Proyecto 2</h3>
                <img className='img' src={supermarket}></img>
                <p className='text'>Lorem ipsum, dolor sit amet<br />consectetur adipisicing elit. <br /> Obcaecati, in.</p>
                <div className='icons'>
                    <img></img>
                </div>
            </div>

            <div className='proyect'>
                <h3 className='title'>Proyecto 3</h3>
                <img className='img' src={supermarket}></img>
                <p className='text'>Lorem ipsum, dolor sit amet<br />consectetur adipisicing elit. <br /> Obcaecati, in.</p>
                <div className='icons'>
                    <img></img>
                </div>
            </div>

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