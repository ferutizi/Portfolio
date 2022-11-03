import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Proyects from './components/Proyects';
import Tecnologies from './components/Tecnologies';
import Presentation from './components/Presentation';

function App() {

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
