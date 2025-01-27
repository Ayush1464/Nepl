import React from 'react'
import Navbar from '../Navbar'
import Service3_part1 from './Service3_part1'
import Service3_part2 from './Service3_part2'
import Service3_part3 from './Service3_part3'
import Service3_part4 from './Service3_part4'
import Footer from '../Footer'
import ClientScroll from '../Home/ClientScroll'

const Service3 = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Service3_part1/>
        <br />
        <br />
        <ClientScroll/>
        <Service3_part2/>
        <Service3_part3/>
        <Service3_part4/>
        {/* <Footer/> */}
    </div>
  )
}

export default Service3