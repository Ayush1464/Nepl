import React from 'react'
import Service1 from './Service1'
import Service1_part2 from './Service1_part2'
import Service1_part3 from './Service1_part3'
import Service1_part4 from './Service1_part4'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ClientScroll from '../Home/ClientScroll'

const Service = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Service1/>
        <br />
        <br />
        <ClientScroll/>
        <Service1_part2/>
        <Service1_part3/>
        <Service1_part4/>
        {/* <Footer/> */}
    </div>
  )
}

export default Service