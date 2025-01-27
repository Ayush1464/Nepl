import React from 'react'
import "./Single_project_part3.css"
import image6 from "/assets/project_img5.svg"
import image7 from "/assets/Gallery_rectangle23.png"
import image8 from "/assets/project_img7.jpg"


const Single_project_part3 = () => {
  return (
    <div className='part3_main'>
        <div className='part3_inner'>
            <div>
                <img src={image6} alt="" />
            </div>
            <div className='middle_img'>
            {/* <p>Commercial</p>
            <h4>Benoit Architecture</h4>
            <b>+</b> */}
            
                <img src={image7} alt="" />
            
                
                
            </div>
            <div>
                <img src={image8} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Single_project_part3