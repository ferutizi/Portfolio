import './App.scss'
import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Proyects from './components/Proyects'
import Tecnologies from './components/Tecnologies'
import Presentation from './components/Presentation'
import Form from './components/Form'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'

function App() {
  const [cvOk, setCvOk] = useState(false)
  return (
    <div className='App' id='home'>
      <Nav cvOk={cvOk} setCvOk={setCvOk} />
      <div className='body'>
        <Presentation cvOk={cvOk} setCvOk={setCvOk} />
        <Experience />
        <Proyects />
        <Tecnologies />
        <AboutMe />
        <Form />
      </div>
      <Footer cvOk={cvOk} setCvOk={setCvOk} />
    </div>
  )
}

export default App
