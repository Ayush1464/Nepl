import React from 'react';
import './Ourprojects.css';

const Ourprojects = () => {
  return (
    <div className="special-projects">
      <center><p style={{color:' #e32636',fontSize:'20px',fontWeight:'600',textTransform:'uppercase'}}>Our works</p></center>
      <h3>Our Special Projects</h3>
      <div className="project-container">
        {/* Left side - first image */}
        <div className="project-grid1">
          <div className="project-item1">
            <img src="./assets/elec1.jpeg" alt="Project 1" className='Project1-img'/>
          </div>
        </div>
        
        {/* Right side - next four images */}
        <div className="project-grid2">
          <div className="project-item">
            <img src="./assets/ele.jpeg" alt="Project 2" className='Project2-img' />
          </div>
          <div className="project-item">
            <img src="./assets/elec2.jpeg" alt="Project 3" className='Project3-img' />
          </div>
          <div className="project-item">
            <div className="commercial-overlay">
              
              {/* <p>COMMERCIAL</p>
              <h3>Benoit Architecture</h3>
              <button>+</button> */}
            </div>
          </div>
          
          <div className="project-item">
            <img src="./assets/proj2.jpeg" alt="Project 4" className='Projec4-img'/>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Ourprojects;
