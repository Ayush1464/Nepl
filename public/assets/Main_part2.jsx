import React from 'react';
import "./Main_part2.css";
import M1 from "../../../public/assets/Picture.jpg";
import M2 from "../../../public/assets/Picture1.jpg";
import M3 from "../../../public/assets/Picture2.jpg";
import M4 from "../../../public/assets/Picture3.jpg";

function Main_part2() {
  return (
    <div className='new_main'>
        <div className='new_inner'>
            <div className='image_container'><img src={M1} alt="Civil Engineering" /></div>
            <div className='mainService_slide'>
               <h2><b>Civil Engineer Services</b></h2>
               <p>"Failure is central to engineering. Every single calculation that an engineer makes is a failure calculation. Successful engineering is all about understanding how things break or fail."</p>
            </div>
            <div className='mainService_slide'>
               <h2><b>Solar Energy Services</b></h2>
               <p>"Failure is central to engineering. Every single calculation that an engineer makes is a failure calculation. Successful engineering is all about understanding how things break or fail."</p>
            </div>
            <div className='image_container'><img src={M2} alt="Solar Energy" /></div>
            <div className='image_container'><img src={M3} alt="Electrical Engineering" /></div>
            <div className='mainService_slide'>
               <h2><b>Electrical Engineer Services</b></h2>
               <p>"Failure is central to engineering. Every single calculation that an engineer makes is a failure calculation. Successful engineering is all about understanding how things break or fail."</p>
            </div>
            <div className='mainService_slide'>
               <h2><b>IT Engineer Services</b></h2>
               <p>"Failure is central to engineering. Every single calculation that an engineer makes is a failure calculation. Successful engineering is all about understanding how things break or fail."</p>
            </div>
            <div className='image_container'><img src={M4} alt="IT Engineering" /></div>
        </div>
    </div>
  );
}

export default Main_part2;
