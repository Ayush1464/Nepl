import React from 'react'
import "./Main_part1.css"
import ClientScroll from '../Home/ClientScroll'

const Main_part1 = () => {
  return (
    <div className="main_header">
      {/* <img src="./assets/Gallery_rectangle1.png" alt="Do Something" className="gallery-header-bg" /> */}
      <img src="./assets/Mback.jpg" alt="" className='main_header-bg '/>
      <div className="main_header-content">
        <h1 style={{marginLeft:'240px'}}>Service</h1>
        <span style={{marginLeft:'240px'}}>Home / Service</span>
        <div className="main_header-box">
          <p>CALL US TODAY</p>
          <div className='about_call_service'>
          <i class='bx bxs-phone-call'></i>
          <p><strong>+91 9438344709 <br />+91 7008357686</strong></p>
          </div>
          
          
        </div>
        
      </div>
      
    </div>
  )
}

export default Main_part1