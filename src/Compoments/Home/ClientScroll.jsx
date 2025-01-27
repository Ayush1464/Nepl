import React from 'react'
import "./ClientScroll.css"
import  pic1 from "/assets/nepl_client1.jpeg"
import  pic2 from "/assets/nepl_client2.jpeg"
import  pic3 from "/assets/nepl_client3.jpeg"
import  pic4 from "/assets/nepl_client4.jpeg"
import  pic5 from "/assets/nepl_client5.jpeg"
import  pic6 from "/assets/nepl_client6.jpeg"
import  pic7 from "/assets/nepl_client7.jpeg"

const ClientScroll = () => {
  return (
    <div className="Typed_Com1">
    <div className="typed1">
        <img src={pic1} alt="Placeholder" className='photo' />
        <img src={pic2} alt="Placeholder" className='photo' />
        <img src={pic3} alt="Placeholder" className='photo' />
        <img src={pic4} alt="Placeholder" className='photo' />
        <img src={pic5} alt="Placeholder" className='photo' />
        <img src={pic6} alt="Placeholder" className='photo' />
        <img src={pic7} alt="Placeholder" className='photo' />

    </div>
</div>
  )
}

export default ClientScroll