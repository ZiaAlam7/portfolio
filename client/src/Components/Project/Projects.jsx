import React, { useEffect, useRef } from 'react'
import './Projects.css'

import img1 from '../../assets/portfolio_img_1.png'
import img2 from '../../assets/portfolio_img_2.png'
import img3 from '../../assets/portfolio_img_3.png'
import img4 from '../../assets/portfolio_img_4.png'
import img5 from '../../assets/portfolio_img_5.png'
import img6 from '../../assets/portfolio_img_6.png'
import img7 from '../../assets/portfolio_img_7.png'

const Projects = () => {

    const scrollContainerRef = useRef(null);
    const scrollContentRef = useRef(null);
  
    useEffect(() => {
      const container = scrollContainerRef.current;
      const content = scrollContentRef.current;
  
      const clone = content.cloneNode(true);
      container.appendChild(clone);
  
    
    }, []);
  
  return (
   <div className="section projects" id='project'>
    <div className="container ">
        <div className="project_all" >
            <div className="heading">
                <p>Projects</p>
            </div>
            <div className="scroll" ref={scrollContainerRef} >
            <div className="project_div"  ref={scrollContentRef}>
                <img src={img1} alt="project image 1" />
                <img src={img2} alt="project image 2" />
                <img src={img3} alt="project image 3" />
                <img src={img4} alt="project image 4" />
                <img src={img5} alt="project image 5" />
                <img src={img6} alt="project image 6" />
                <img src={img7} alt="project image 7" />
               
            </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Projects