import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Proyects from './components/Proyects';
import Tecnologies from './components/Tecnologies';
import Presentation from './components/Presentation';
import Form from './components/Form';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className='App' id='home'>
      <ThemeProvider>
        <Nav />
        <div className='body'>
          <Presentation />
          <Proyects />     
          <Tecnologies />
          <h6 className='subtitle' id='about-me'>Sobre mí</h6>
          <h3 className='subtitle' id='contact'>Contacto</h3>
          <Form />
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
