import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Proyects from './components/Proyects';
import Tecnologies from './components/Tecnologies';
import Presentation from './components/Presentation';
import Form from './components/Form';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className='App' id='home'>
        <Nav />
        <div className='body'>
          <Presentation />
          <Proyects />     
          <Tecnologies />
          <AboutMe />
          <Form />
        </div>
        <Footer />
    </div>
  );
}

export default App;
