import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Proyects from './components/Proyects';

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
  const Tecnologies = () => {
    return(
    <>
      <h3>Tecnologías</h3>
      <div style={{display: 'flex', gap: 20, justifyContent: 'center'}}>
        <p>HTML</p>
        <p>CSS</p>
        <p>JS</p>
        <p>React</p>
        <p></p>
      </div>
    </>
    )
  }

  return (
    <div className='App'>
      <Nav />
      <body className='body'>
        <Presentation />
        <Proyects />     
        <Tecnologies />
        <h6>Mas sobre mí</h6>
      </body>
      <Footer>
          <h5>Contactame</h5>
          <form></form>
      </Footer>
      
    </div>
  );
}

export default App;
