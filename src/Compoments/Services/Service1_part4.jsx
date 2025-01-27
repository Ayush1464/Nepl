import React from 'react';
import "./Service1_part4.css";
import { Link } from 'react-router-dom';

import { CCard, CCardBody, CCardImage, CCardTitle, CCardText, CButton } from '@coreui/react';
import ReactImg from '/assets/Electrical_Update.jpeg'; // Replace with your image path
import ReactImg1 from '/assets/civilupdate.jpeg';
import ReactImg2 from '/assets/itupdate.jpeg';
import ReactImg3 from '/assets/solarupdate.jpeg';


const Service1_part4 = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        // <div className='last_main'>
        //     <h2 className="center-mobile1">Other Services</h2>
        //     <div className='last_Service4'>
        //         <div className='bottom_Service4'>
        //             <div className='b_service4'></div>
        //             <div className='con_Service4'>
        //                 <h4 style={{ fontSize: '18px', color: 'grey' }}>Explore services</h4>
        //                 <h3 style={{ fontWeight: '700' }}>Civil Engineer services</h3>
        //                 <br /><br />
        //                 <Link to="/Service" className='last_BtnService4' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
        //                     Read<i className='bx bx-right-arrow-alt'></i>
        //                 </Link>
        //             </div>
        //         </div>

        //         <div className='bottom_Service4'>
        //             <div className='b_service4'></div>
        //             <div className='con_Service4'>
        //                 <h4 style={{ fontSize: '18px', color: 'grey' }}>Explore services</h4>
        //                 <h3 style={{ fontWeight: '700' }}>Solar energy services</h3>
        //                 <br /><br />
        //                 <Link to="/Servicetwo" className='last_BtnService4' style={{ color: 'black', fontSize: '15px' }}>
        //                     Read<i className='bx bx-right-arrow-alt'></i>
        //                 </Link>
        //             </div>
        //         </div>

        //         <div className='bottom_Service4'>
        //             <div className='b_service4'></div>
        //             <div className='con_Service4'>
        //                 <h4 style={{ fontSize: '18px', color: 'grey' }}>Explore services</h4>
        //                 <h3 style={{ fontWeight: '700' }}>Electrical engineer services</h3>
        //                 <br /><br />
        //                 <Link to="/Servicethree" className='last_BtnService4' style={{ color: 'black', fontSize: '15px' }}>
        //                     Read<i className='bx bx-right-arrow-alt'></i>
        //                 </Link>
        //             </div>
        //         </div>

        //         <div className='bottom_Service4'>
        //             <div className='b_service4'></div>
        //             <div className='con_Service4'>
        //                 <h4 style={{ fontSize: '18px', color: 'grey' }}>Explore services</h4>
        //                 <h3 style={{ fontWeight: '700' }}>IT Engineer services</h3>
        //                 <br /><br />
        //                 <Link to="/Servicefour" className='last_BtnService4' style={{ color: 'black', fontSize: '15px' }}>
        //                     Read<i className='bx bx-right-arrow-alt'></i>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' ,marginBottom:'-100px'}}>
       <h2 style={{ width: '100%', marginBottom: '20px' , textAlign: 'center'}}>Explore Our Services</h2> {/* Added heading */}
       <CCard
  style={{
    width: '18rem',
    margin: '10px',
    backgroundImage: `url(${ReactImg1})`, // Set the background image
    backgroundSize: 'cover', // Cover the entire card
    backgroundPosition: 'center', // Center the image
    color: 'white', // Set text color for better visibility
   
  }}
>
  <CCardBody style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1rem',display:'flex',flexDirection:'column',justifyContent:'center'}}> {/* Add semi-transparent background */}
    <CCardTitle>Civil Engineering Services</CCardTitle>
    <CCardText>
      Civil engineering services involve designing, building, and maintaining essential infrastructure like roads, bridges, and water systems.
    </CCardText>
    <Link to="/Service" onClick={scrollToTop} style={{
      display: 'inline-block',
      padding: '8px 16px',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '4px',
      textDecoration: 'none',
      border: 'none',
      textAlign: 'center',
      width:'8rem',
    }}>
      Know More
    </Link>
  </CCardBody>
</CCard>
      
<CCard
  style={{
    width: '18rem',
    margin: '10px',
    backgroundImage: `url(${ReactImg})`, // Set the background image
    backgroundSize: 'cover', // Cover the entire card area
    backgroundPosition: 'center', // Center the image
    color: 'white', // Set text color for better visibility
  }}
>
  <CCardBody style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1rem' }}> {/* Add semi-transparent background */}
    <CCardTitle>Electrical Engineering Services</CCardTitle>
    <CCardText>
      Electrical engineering services focus on designing and maintaining systems for power, lighting, and machinery across various sectors.
    </CCardText>
    <Link to="/Servicethree" onClick={scrollToTop} style={{
      display: 'inline-block',
      padding: '8px 16px',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '4px',
      textDecoration: 'none',
      border: 'none',
      textAlign: 'center',
    }}>
      Know More
    </Link>
  </CCardBody>
</CCard>

<CCard
  style={{
    width: '18rem',
    margin: '10px',
    backgroundImage: `url(${ReactImg3})`, // Set the background image
    backgroundSize: 'cover', // Cover the entire card area
    backgroundPosition: 'center', // Center the image
    color: 'white', // Set text color for better visibility
  }}
>
  <CCardBody style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1rem' }}> {/* Add semi-transparent background */}
    <CCardTitle>Solar Engineering Services</CCardTitle>
    <CCardText>
      Solar engineering services specialize in designing, installing, and maintaining solar energy systems to optimize renewable energy use and efficiency.
    </CCardText>
    <Link to="/Servicetwo" onClick={scrollToTop} style={{
      display: 'inline-block',
      padding: '8px 16px',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '4px',
      textDecoration: 'none',
      border: 'none',
      textAlign: 'center',
    }}>
      Know More
    </Link>
  </CCardBody>
</CCard>

<CCard
  style={{
    width: '18rem',
    margin: '10px',
    backgroundImage: `url(${ReactImg2})`, // Set the background image
    backgroundSize: 'cover', // Cover the entire card area
    backgroundPosition: 'center', // Center the image
    color: 'white', // Set text color for better visibility
  }}
>
  <CCardBody style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1rem' }}> {/* Add semi-transparent background */}
    <CCardTitle>IT Engineering Services</CCardTitle>
    <CCardText>
      IT engineering services provide tech solutions like software development and system integration to improve business efficiency.
    </CCardText>
    <Link to="/Servicefour" onClick={scrollToTop} style={{
      display: 'inline-block',
      padding: '8px 16px',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '4px',
      textDecoration: 'none',
      border: 'none',
      textAlign: 'center',
    }}>
      Know More
    </Link>
  </CCardBody>
</CCard>

    </div>
    );
};

export default Service1_part4;
