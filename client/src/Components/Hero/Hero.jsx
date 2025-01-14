import React, { useEffect, useState } from 'react'
import './Hero.css'


const Hero = () => {

  const text = "Hi, I am a Front-End Web Developer, I Love Converting Designs into CSS and React, I Take Great Delight in Coding, Get in Touch if You Want Custom Coded Website."

  const words = ["Zealous", "Innovative", "Ambitious", "Adept", "Leadership", "Authentic", "Motivated"];

  const [words2, setWords2] = useState([])
  const [index, setIndex] = useState(0)

  const [paragraph, setParagraph] = useState('')
  const [index2, setIndex2] = useState(0)





  useEffect(() => {

    const wordsInterval = setInterval(() => {
      if (index < words.length) {
        setWords2((prevWords) => [...prevWords, words[index]]);
        setIndex(index + 1);
      } else {
        clearInterval(wordsInterval);
      }
    }, 800);

    return () => clearInterval(wordsInterval);

  }, [index])


  useEffect(() => {

    if (index2 < text.length) {
      const timeout = setTimeout(() => {
        setParagraph((prevParagraph) => prevParagraph + text[index2]);
        setIndex2(index2 + 1);
      }, 60);

      return () => clearTimeout(timeout);
    }
  }, [index2]);


  return (
    <div className="section" id='home'>
      <div className="container">
        <div className="hero">
          <div className="name">ZIA ALAM</div>
          <div className="profile_border">
            <div className="profile"></div>
          </div>
          <div className='txt_container'>
            <div className='words_container'>
              {words2.map((item, index) => (
                <p className='word' key={index} style={{'marginLeft':`${index}rem`}}>{item}</p>
              ))}
            </div>
            <div className='intro'>
              <div className='intro_txt'>
                {paragraph}
              </div>
              <div className='intro_btn'>

                <a style={{ 'display': index2 < text.length ? 'none' : 'block' }} href='#contact'>Get in touch</a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero