import React from 'react'
import Navbar from '../Navbar'
import Service4_part1 from './Service4_part1'
import Service4_part2 from './Service4_part2'
import Service4_part3 from './Service4_part3'
import Service4_part4 from './Service4_part4'
import Footer from '../Footer'
import ClientScroll from '../Home/ClientScroll'

const Service4 = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Service4_part1/>
        <br />
        <br />
        <ClientScroll/>
        <Service4_part2/>
        <Service4_part3/>
        <Service4_part4/>
        {/* <Footer/> */}
    </div>
  )
}

export default Service4