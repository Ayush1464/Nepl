import React from 'react'
import "./Gallery.css"
import Navbar from '../Navbar'
import Footer from '../Footer'
import ClientScroll from '../Home/ClientScroll'

const Gallery = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className='gallery_section'>
        
    <div className="gallery-header">
      <img src="./assets/gg.jpg" alt="Do Something" className="gallery-header-bg" />
      <div className="gallery-header-content">
        <h1>Portfolio or Gallery</h1>
        <p style={{marginLeft:'200px'}}>Home / Portfolio Archive</p>
        <div className="gallery-contact-box">
          <p>CALL US TODAY</p>
          <div className='about_call_gallery'>
          <i class='bx bxs-phone-call'></i>
          <p><strong>+91 9438344709<br />+91 7008357686</strong></p>
          </div>
         
        </div>
      </div>
    </div>
    <br />
    <br />
    
    <ClientScroll/>

    <div className="gallery-portfolio">
      <div className="gallery-portfolio-item">
        <img src="./assets/proj1.jpeg" alt="1st Photo" />
        <div className="gallery-portfolio-info"></div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/proj2.jpeg" alt="JCB Image" />
        <div className="gallery-portfolio-info">
          <h2>11 KV inter posing</h2>
          <p>Completion : 21 March 2023</p>
        </div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/proj3.jpeg" alt="People" />
        <div className="gallery-portfolio-info"></div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/proj4.jpeg" alt="Transmission Line" />
        <div className="gallery-portfolio-info">
          <h2>NAYAGARH LTABC</h2>
          <p>Completion : 30 january 2022</p>
        </div>
      </div>
      <div className="gallery-portfolio-item gallery-special">
        <img src="./assets/ele.jpeg" alt="Blue Image" />
        <div className="gallery-portfolio-info gallery-special-info">
          {/* <h2>Commercial</h2>
          <p>Benoit Architecture</p>
          <p>+</p> */}
        </div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/Gallery_rectangle20.png" alt="Plane" />
        <div className="gallery-portfolio-info">
          
        </div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/Gallery_rectangle21.png" alt="Building" />
        <div className="gallery-portfolio-info">
         
        </div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/Gallery_rectangle22.png" alt="Panel" />
        <div className="gallery-portfolio-info"></div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/Gallery_rectangle23.png" alt="People" />
        <div className="gallery-portfolio-info"></div>
      </div>
      
    </div>
   

    
    
  </div>
  {/* <Footer className="gallery_footer"/> */}
  </>
  

  
  )
}

export default Gallery