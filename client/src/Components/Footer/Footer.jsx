import React from 'react'
import './Footer.css'

import github from "../../assets/icons/github-mark.svg"
import gmail from "../../assets/icons/gmail-icon.svg"
import linkedin from "../../assets/icons/linkedin-icon.svg"
import whatsapp from "../../assets/icons/whatsapp-tile.svg"

const Footer = () => {
  return (
    <div className='foot'>
      <div className="footer_social">
            <a href="mailto:ziaalam.dev@gmail.com" target="_blank" title="Email"><img src={gmail} alt="gmail icon" /></a>
            <a href="https://wa.me/+923340921313" target="_blank" title="WhatsApp"><img src={whatsapp} alt="whatsapp icon" /></a>
            <a href="https://www.linkedin.com/in/zia-alam-102572227/" target="_blank" title="LinkedIn Profile"><img src={linkedin} alt="linkedin icon" /></a>
            <a href="https://github.com/ZiaAlam7" target="_blank" title="GitHub Profile"><img src={github} alt="github icon" /></a>
      </div>
      <div className='footer_copy'>
        <p>&copy; 2025 Zia Alam Portfolio. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer