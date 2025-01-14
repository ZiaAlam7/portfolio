import React  from 'react'
import './Skill.css'


import express from "../../assets/icons/expressjs-icon.svg"
import bootstrap from "../../assets/icons/getbootstrap-icon.svg"
import postman from "../../assets/icons/getpostman-icon.svg"
import git from "../../assets/icons/git-scm-icon.svg"
import javascript from "../../assets/icons/javascript-icon.svg"
import mongodb from "../../assets/icons/mongodb-icon.svg"
import nextjs from "../../assets/icons/nextjs-icon.svg"
import nodejs from "../../assets/icons/nodejs-icon.svg"
import postgresql from "../../assets/icons/postgresql-icon.svg"
import python from "../../assets/icons/python-icon.svg"
import reactjs from "../../assets/icons/reactjs-icon.svg"
import tailwind from "../../assets/icons/tailwindcss-icon.svg"
import npmjs from "../../assets/icons/npmjs-ar21.svg"
import sass from "../../assets/icons/sass-lang-icon.svg"
import vercel from "../../assets/icons/vercel-icon.svg"
import visualstudio_code_icon from "../../assets/icons/visualstudio_code-icon.svg"
import css from "../../assets/icons/w3_css-icon.svg"
import html from "../../assets/icons/w3_html5-icon.svg"




const Skill = () => {


  return (
    <div className="section skills" id='skills'>
      <div className="container">
        <div className="skill_div">
          <div className="heading">
            <p>Skills</p>
          </div>
          <div className="all_skills" >
           
            <div className="skill_card">
              <div className="skill_icon">
                <img src={html} alt="HTML logo/icon" />
              </div>
              <div className="skill_title">
                <p>HTML</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={css} alt="CSS logo/icon" />
              </div>
              <div className="skill_title">
                <p>CSS</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={sass} alt="SASS logo/icon" />
              </div>
              <div className="skill_title">
                <p>SASS</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={tailwind} alt="tailwind logo/icon" />
              </div>
              <div className="skill_title">
                <p>Tailwind</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={bootstrap} alt="Bootstrap logo/icon" />
              </div>
              <div className="skill_title">
                <p>Bootstrap</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={javascript} alt="JavaScript  logo/icon" />
              </div>
              <div className="skill_title">
                <p>JavaScript</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={reactjs} alt="React logo/icon" />
              </div>
              <div className="skill_title">
                <p>React JS</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={npmjs} alt="NPM logo/icon" />
              </div>
              <div className="skill_title">
                <p>npm</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={express} alt="Express logo/icon" />
              </div>
              <div className="skill_title">
                <p>Express JS</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={nextjs} alt="Next Js logo/icon" />
              </div>
              <div className="skill_title">
                <p>Next JS</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={mongodb} alt="MongoDB logo/icon" />
              </div>
              <div className="skill_title">
                <p>MongoDB</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={postgresql} alt="PostgreSQL logo/icon" />
              </div>
              <div className="skill_title">
                <p>PostgreSQL</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={visualstudio_code_icon} alt="VS Code logo/icon" />
              </div>
              <div className="skill_title">
                <p>VS Code</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={nodejs} alt="Node logo/icon" />
              </div>
              <div className="skill_title">
                <p>Node JS</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={git} alt="git logo/icon" />
              </div>
              <div className="skill_title">
                <p>Git</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={vercel} alt="Vercel logo/icon" width={64} />
              </div>
              <div className="skill_title">
                <p>Vercel</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={python} alt="Python logo/icon" />
              </div>
              <div className="skill_title">
                <p>Python</p>
              </div>
            </div>

            <div className="skill_card">
              <div className="skill_icon">
                <img src={postman} alt="Postman logo/icon" />
              </div>
              <div className="skill_title">
                <p>Postman</p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Skill