import './Proyects.scss';
import { useState } from 'react';
import proyects from '../Proyects.json'
import moreProyects from '../MoreProyects.json'
import Icon from './Icon';
import ProyectsRepo from './ProyectsRepo';



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
                                <div className='proyect__icons--left'>
                                    <Icon 
                                        src={require(`../img/icons/${item.icon1}.png`)}
                                        alt={proyects.icon1}
                                    />
                                    <Icon 
                                        src={require(`../img/icons/${item.icon2}.png`)}
                                        alt={proyects.icon2}
                                    />
                                    <Icon 
                                        src={require(`../img/icons/${item.icon3}.png`)}
                                        alt={proyects.icon3}
                                    />
                                </div>
                                <div className='proyect__icons--right'>
                                    <ProyectsRepo
                                        repository={item.repository}
                                        deploy={item.deploy}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                {visible &&
                    <div className="more-proyects">
                        
                        {moreProyects.map(item => 
                        <div key={item.id} className='proyect__proyect'>
                            <h3 className='proyect__title'>{item.title}</h3>
                            <img
                                className='proyect__img'
                                src={require(`../img/${item.img}`)}
                                alt={moreProyects.title}>
                            </img>
                            <p className='proyect__text'>{item.text}</p>
                            <div className='proyect__icons'>
                                <div className='proyect__icons--left'>
                                    <Icon 
                                            src={require(`../img/icons/${item.icon1}.png`)}
                                            alt={moreProyects.icon1}
                                        />
                                    <Icon 
                                        src={require(`../img/icons/${item.icon2}.png`)}
                                        alt={moreProyects.icon2}
                                    />
                                    <Icon 
                                        src={require(`../img/icons/${item.icon3}.png`)}
                                        alt={moreProyects.icon3}
                                    />
                                    
                                </div>
                                <div className='proyect__icons--right'>
                                    <ProyectsRepo
                                        repository={item.repository}
                                        deploy={item.deploy}
                                    />
                                </div>
                                
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