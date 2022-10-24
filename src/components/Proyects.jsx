import './Proyects.scss';
import { useState } from 'react';



const Proyects = () => {
    const [visible, setVisible] = useState(false);

    const ver = visible;

    const proyects = [
        {
            id: 1,
            title: "Rick and Morty",
            img: "1.jpg",
            text: "Buscador de imagenes consumiendo la Api de Rick and Morty",
            icon1: "",
        },
        {
            id: 2,
            title: "Ecommerce",
            img: "5.jpg",
            text: "Aplicación de ecommerce",
            icon1: "",
        },
        {
            id: 3,
            title: "Supermarket-list",
            img: "2.jpg",
            text: 'Lista de supermercado estilo "to do"',
            icon1: "",
        }
    ];

    const moreProyects = [
        {
            id: 4,
            title: "Compound interest calculator",
            img: "3.jpg",
            text: "Calculadora de interés compuesto",
            icon1: "",
        },
        {
            id: 5,
            title: "Small PDF page",
            img: "4.jpg",
            text: 'Página web estática',
            icon1: "",
        },
        {
            id: 6,
            title: "Small PDF page",
            img: "4.jpg",
            text: 'Página web estática',
            icon1: "",
        },
    ];


    return(
        <>
            <h3>Proyectos</h3>
            <div className='proyect__container'>
                    {proyects.map(item => 
                        <div key={item.id} className='proyect__proyect'>
                            <h3 className='proyect__title'>{item.title}</h3>
                            <img className='proyect__img' src={require(`../img/${item.img}`)} alt={proyects.title}></img>
                            <p className='proyect__text'>{item.text}</p>
                            <div className='proyect__icons'>
                                <img></img>
                            </div>
                        </div>
                    )}

                {visible &&
                    <div className="more-proyects">
                        
                        {moreProyects.map(item => 
                        <div className='proyect__proyect'>
                            <h3 className='proyect__title'>{item.title}</h3>
                            <img className='proyect__img' src={require(`../img/${item.img}`)} alt={moreProyects.title}></img>
                            <p className='proyect__text'>{item.text}</p>
                            <div className='proyect__icons'>
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