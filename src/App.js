import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/navbar'
import Header from './components/header/Header'
import AboutMe from './components/about/AboutMe'
import Education from './components/education/education'
import Skills from './components/skills/Skills'
import ContactForm from './components/contact/contact'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Education />
      <ContactForm />
    </>
  )
}

export default App
