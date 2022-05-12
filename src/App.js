import './App.scss';
import Proyect from './components/Proyect';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Nav />
      
      <h1>Fernando Utizi</h1>
      <h2>Front-end Developer</h2>
      <h5>Soy un apasionado de la tecnología, la creatividad y el aprendizaje</h5>
      <div className='proyect__container'>
        <Proyect></Proyect>
        <Proyect></Proyect>
        <Proyect></Proyect>
      </div>

      <div className='tecnologies'>
        <img></img>
      </div>
      <h6>Mas sobre mí</h6>
      <Footer>
        <h5>Contactame</h5>
        <form></form>
      </Footer>
      
    </div>
  );
}

export default App;
