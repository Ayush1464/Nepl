import React from 'react'
import Navbar from '../Navbar'
import Single_project from './Single_project'
import Single_project_part2 from './Single_project_part2'
import Footer from '../Footer'
import Single_project_part3 from './Single_project_part3'
import ClientScroll from '../Home/ClientScroll'



const Project = () => {
  return (
    <div >
        {/* <Navbar/> */}
        <Single_project/>
        <ClientScroll/>
        <Single_project_part2/>
        <Single_project_part3/>
       
        {/* <Footer/> */}
    </div>
  )
}

export default Project