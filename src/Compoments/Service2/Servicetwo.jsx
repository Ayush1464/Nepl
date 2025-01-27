import React from 'react'
import Navbar from '../Navbar'
import Service2 from './Service2'
import Service2_part1 from './Service2_part1'
import Service2_part2 from './Service2_part2'
import Service2_part3 from './Service2_part3'
import Footer from '../Footer'
import ClientScroll from '../Home/ClientScroll'

const Servicetwo = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Service2/>
        <ClientScroll/>
        <Service2_part1/>
        <Service2_part2/>
        <Service2_part3/>
        {/* <Footer/> */}
        
    </div>
  )
}

export default Servicetwo