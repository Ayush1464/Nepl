import React from 'react';
import './Preloader.css';
import logo from '/assets/nepllogo.jpg'; // Update with the correct path to your logo image

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img src={logo} alt="Nilachala Energy Pvt. Ltd. Logo" className="logo" />
     
      <div className="loading-text"style={{color:'skyblue',fontSize:'30px'}}>Welcome to Nilachala Energy Pvt. Ltd.</div>
    </div>
  );
};

export default Preloader;
