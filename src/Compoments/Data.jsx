import React from 'react'
import './Data.css'
import { Link } from 'react-router-dom'
const Data = () => {
  return (
    <div className='data-box'>
      <div className='databox-menu'>
      {/* <span className='data-span1'>About Us</span> */}
<h2 className='data-h2'>With our knowledge
we guarente success</h2>
<span className='data-span'> "We are a dedicated team committed to delivering innovative solutions and exceptional service."</span>
<p className='data-paga'>In the realm of energy solutions, 
knowledge is our guiding light. 
At Nilachala Energy Private Limited, 
we believe that with the right information, skills, and determination, 
success is not only achievable but inevitable. 
Our team's expertise ensures that every project is executed with precision and excellence, 
guaranteeing success with every step we take.</p>
<Link to="/aboutus">
<button className='data-button'>learn more <img src='./assets/long-arrow-alt-right.png' ></img> </button>
</Link>

</div>
<div className='data_video'>
 {/* <img src='.\assets\Imagesvideo-cover1.png' alt='no' className='Imagesvideo1'></img>  */}
 <video src="./assets/data.mp4" controls></video>
</div>
    </div>
  

  )
}

export default Data


