import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Proyects from './components/Proyects';
import Tecnologies from './components/Tecnologies';

function App() {

  const Presentation = () => {
    return(
    <div>
      <h1>Fernando Utizi</h1>
      <h2>Front-end Developer</h2>
      <h5>Soy un apasionado de la tecnología, la creatividad y el aprendizaje</h5>
    </div>
    )
  }

  return (
    <div className='App'>
      <Nav />
      <div className='body'>
        <Presentation />
        <Proyects />     
        <Tecnologies />
        <h6>Mas sobre mí</h6>
      </div>
      <Footer>
          <h5>Contactame</h5>
          <form></form>
      </Footer>
      
    </div>
  );
}

export default App;
