import { useEffect, useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Project/Projects'
import Skill from './Components/Skill/Skill'
import Cursor from './Components/Cursor/Cursor'

function App() {

const [scrollPosition, setScrollPosition] = useState(0);
const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const findScroll = () => {

      setScrollPosition(window.scrollY)
    
    };

    window.addEventListener('scroll', findScroll);

    return () => {
      window.removeEventListener('scroll', findScroll);
    };
  }, []);



  return (
    <>
    <Cursor cursorPosition={cursorPosition} setCursorPosition={setCursorPosition}/>
     <Header cursorPosition={cursorPosition} />
     <Hero/>
     <About scrollPosition={scrollPosition}/>
     <Projects/>
     <Skill/>
     <Contact scrollPosition={scrollPosition}/>
     <Footer/>
    </>
  )
}

export default App
