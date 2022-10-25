import './Proyects.scss';
import { useState } from 'react';
import proyects from '../Proyects.json'
import moreProyects from '../MoreProyects.json'



const Proyects = () => {
    const [visible, setVisible] = useState(false);
    const ver = visible;

    return(
        <>
            <h3>Proyectos</h3>
            <div className='proyect__container'>
                    {proyects.map(item => 
                        <div key={item.id} className='proyect__proyect'>
                            <h3 className='proyect__title'>{item.title}</h3>
                            <img 
                                className='proyect__img'
                                src={require(`../img/${item.img}`)}
                                alt={proyects.title}>
                            </img>
                            <p className='proyect__text'>{item.text}</p>
                            <div className='proyect__icons'>
                                <img
                                    className='proyect__icon'
                                    src={require(`../img/icons/${item.icon1}.png`)}
                                    alt={proyects.icon1}>
                                </img>
                                <img
                                    className='proyect__icon'
                                    src={require(`../img/icons/${item.icon2}.png`)}
                                    alt={proyects.icon1}>
                                </img>
                                <img
                                    className='proyect__icon'
                                    src={require(`../img/icons/${item.icon3}.png`)}
                                    alt={proyects.icon1}>
                                </img>
                                <img
                                    className='proyect__icon'
                                    src={require(`../img/icons/${item.icon4}.png`)}
                                    alt={proyects.icon1}>
                                </img>
                            </div>
                        </div>
                    )}

                {visible &&
                    <div className="more-proyects">
                        
                        {moreProyects.map(item => 
                        <div className='proyect__proyect'>
                            <h3 className='proyect__title'>{item.title}</h3>
                            <img
                                className='proyect__img'
                                src={require(`../img/${item.img}`)}
                                alt={moreProyects.title}>
                            </img>
                            <p className='proyect__text'>{item.text}</p>
                            <div className='proyect__icons'>
                                <img></img>
                            </div>
                        </div>
                    )}

                    </div>
                }
                <button
                    className='button button--ver'
                    onClick={() => setVisible(!visible)}
                >Ver {ver ? 'menos' : 'más'}
                </button>
            </div>
        </>
    )
}

export default Proyects;