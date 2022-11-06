import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Proyects from './components/Proyects';
import Tecnologies from './components/Tecnologies';
import Presentation from './components/Presentation';
import Form from './components/Form';

function App() {

  return (
    <div className='App'>
      <Nav />
      <div className='body'>
        <Presentation />
        <Proyects />     
        <Tecnologies />
        <h6 className='subtitle'>Sobre mí</h6>
      </div>
      <h3 className='subtitle'>Contacto</h3>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
