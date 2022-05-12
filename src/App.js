import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Proyectos from './components/Proyectos';

function App() {
  return (
    <div className='App'>
      <Nav />
      
      <h1>Fernando Utizi</h1>
      <h2>Front-end Developer</h2>
      <h5>Soy un apasionado de la tecnología, la creatividad y el aprendizaje</h5>
      
      <Proyectos />

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
