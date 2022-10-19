import './Proyects.scss';
import { useState } from 'react';



const Proyects = () => {
    const [visible, setVisible] = useState(false);

    const ver = visible;

    const proyects = [
        {
            title: "Rick and Morty",
            img: "apisearch.jpg",
            text: "buscador de imagenes consumiendo la Api de Rick and Morty",
            icon1: "",
        },
        {
            title: "Supermarket-list",
            img: "supermarket.jpg",
            text: 'Lista de supermercado, estilo "to do" pudiendo agregar y eliminar productos',
            icon1: "",
        },
        {
            title: "compound interest calculator",
            img: "calculator.jpg",
            text: "calculadora de interés compuesto",
            icon1: "",
        }
    ];

    const moreProyects = [
        {
            title: "Rick and Morty",
            img: "apisearch.jpg",
            text: "buscador de imagenes consumiendo la Api de Rick and Morty",
            icon1: "",
        },
        {
            title: "Supermarket-list",
            img: "supermarket.jpg",
            text: 'Lista de supermercado, estilo "to do" pudiendo agregar y eliminar productos',
            icon1: "",
        },
        {
            title: "compound interest calculator",
            img: "calculator.jpg",
            text: "calculadora de interés compuesto",
            icon1: "",
        }
    ];


    return(
        <>
            <h3>Proyectos</h3>
            <div className='proyect__container'>
                    {proyects.map(item => 
                        <div className='proyect'>
                            <h3 className='title'>{item.title}</h3>
                            <img className='img' src={require(`../img/${item.img}`)} alt={proyects.title}></img>
                            <p className='text'>{item.text}</p>
                            <div className='icons'>
                                <img></img>
                            </div>
                        </div>
                    )}

                {visible &&
                    <div className="more-proyects">
                        
                        {moreProyects.map(item => 
                        <div className='proyect'>
                            <h3 className='title'>{item.title}</h3>
                            <img className='img' src={require(`../img/${item.img}`)} alt={moreProyects.title}></img>
                            <p className='text'>{item.text}</p>
                            <div className='icons'>
                                <img></img>
                            </div>
                        </div>
                    )}

                    </div>
                }
                <button className='button button--ver' onClick={() => setVisible(!visible)}>Ver {ver ? 'menos' : 'más'}</button>
            </div>
        </>
    )
}

export default Proyects;