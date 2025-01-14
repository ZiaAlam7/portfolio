import React, { useEffect, useState } from 'react'
import './Header.css'
import menu_icon from '../../assets/menu.svg'
import menu_close from '../../assets/Crs_close.svg'

const Header = ({cursorPosition}) => {

  const [scrolling, setScrolling] = useState(false) 
  const [visible, setVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null) 
  const [menu, setMenu] = useState("none")
const [mouseEntered, setMouseEntered] = useState(true);
 

  const handleMouseEnter = () => {
    setMouseEntered(false);
  };

  
  const handleMouseLeave = () => {
    setTimeout(() => {
      setMouseEntered(true);
    }, 1500);
   
  };

  
  const handleMenu = () => {
    setTimeout(() => {
      menu == "none" ? setMenu("block") : setMenu("none")
    }, 50)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true) 
      } else {
        setScrolling(false) 
      }

    
      setVisible(false)

      
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      const newTimeoutId = setTimeout(() => {
        window.scrollY < 50 ? setVisible(false) : setVisible(true)
      }, 2000)
      setTimeoutId(newTimeoutId)
    }

    window.addEventListener('scroll', handleScroll)

  
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId) 
      }
    }
  }, [timeoutId])



  return ( 
    <div className={`nav_section ${scrolling ? 'scrolling' : ''} ${visible && mouseEntered && cursorPosition.y > 30 && menu  === 'none' ? 'visible' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className='container'>
       <div className="navbar">
      <div className="navbar-logo">
        <a href="/">Alam.</a>
      </div>
      <div className="nav_icon" onClick={handleMenu}>
        <img src={menu == 'none' ? menu_icon : menu_close} alt="" />
      </div>
      <div className="nav_links" style={{display:menu}}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Header