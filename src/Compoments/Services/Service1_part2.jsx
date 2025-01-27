import React from 'react'
import "./Service1_part2.css"
// import Rectangle from "../../../public/assets/Rectangle3.jpg"
import Rectangle from '/assets/Rectangle3.jpg'
import Rectangle1 from '/assets/Rectangle4.jpg'
import Rectangle2 from '/assets/Rectangle5.jpg'
const Service1_part2 = () => {
  return (
    <div className='card_Container'>
        <div className='Service2_card'>
            <img src={'./assets/Rectangle3.jpg'} alt="" />
        </div> 
        <div className='Service2_card'>
            <img src={Rectangle1} alt="" />
        </div>
        <div className='Service2_card'>
            <img src={Rectangle2} alt="" />
        </div>

    </div>
  )
}

export default Service1_part2