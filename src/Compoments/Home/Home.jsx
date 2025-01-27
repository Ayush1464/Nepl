import React from 'react'
import Navbar from '../Navbar'
import Middle from '../Middle'
import Data from '../Data'
import Middlepart from '../Middlepart/Middlepart'
import Ourprojects from '../Ourprojects/Ourprojects'
import Mappart from '../Mappart/Mappart'
import Clientpart from '../Clientpart/Clientpart'
import Videopart from '../Videopart/Videopart'
import Footer from '../Footer'
import ClientScroll from './ClientScroll'
import Nepl_content from './Nepl_content'

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Middle/>
      <Nepl_content/>
      <ClientScroll/>
    
      <Data/>

      <Middlepart/>
      <Ourprojects/>
      <Mappart/>
      <Clientpart/>
      <Videopart/>
      
      {/* <Footer /> */}
    
      
    </>
  )
}

export default Home