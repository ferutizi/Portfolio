import './Proyects.scss';
import Icon from './Icon';
import ProyectsRepo from './ProyectsRepo';

const MapProyecs = ({ mapProyect }) => {
    return(
        <>
            {mapProyect.map(item => 
                        <div key={item.id} className='proyect__proyect'>
                            <h3 className='proyect__title'>{item.title}</h3>
                            <img 
                                className='proyect__img'
                                src={require(`../img/${item.img}`)}
                                alt={{mapProyect}.title}>
                            </img>
                            <p className='proyect__text'>{item.text}</p>
                            <div className='proyect__icons'>
                                <div className='proyect__icons--left'>
                                    <Icon 
                                        src={require(`../img/icons/${item.icon1}.png`)}
                                        alt={{mapProyect}.icon1}
                                    />
                                    <Icon 
                                        src={require(`../img/icons/${item.icon2}.png`)}
                                        alt={{mapProyect}.icon2}
                                    />
                                    <Icon 
                                        src={require(`../img/icons/${item.icon3}.png`)}
                                        alt={{mapProyect}.icon3}
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
        </>
    )
}

export default MapProyecs;