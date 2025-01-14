import React, { useEffect, useState } from 'react'
import './About.css'

const About = ({ scrollPosition }) => {

  const [animation, setAnimation] = useState('none');


  useEffect(() => {
    scrollPosition > 70 ? setAnimation('slideUp 1s ease-in') : null;
  }, [scrollPosition]);


  return (
    <div className="section about" id='about'>
      <div className="container">
        <div className="about_me" style={{ 'animation': animation }}>
          <div className="heading">
            <p>About Me</p>
          </div>
          <div className="paragraph">
          I’m a passionate Front-End Web Developer with over a year of experience and having built a dozen projects, with a strong love for turning stunning designs into functional websites using HTML, CSS, and React. Coding brings me immense joy, and I am always excited to craft beautiful, custom-coded websites that meet both design and user experience standards. If you're looking for a personalized website built with attention to detail and responsive on all devices, feel free to get in touch. Let’s create something amazing together!
          </div>
        </div>
      </div>
    </div>
  )
}

export default About