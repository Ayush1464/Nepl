import React, { useEffect, useState } from 'react';
import './Middle.css';
import shape1 from '/assets/shape1.png';
import shape2 from '/assets/Shape2.png';
import shape3 from '/assets/Shape3.png';
import Middleimg from '/assets/homebrandnew.jpg';
import { Link } from 'react-router-dom';

// Counter Component for Animated Number Effect
const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = parseInt(end); // Target number
    const incrementTime = Math.abs(Math.floor(duration / endValue)); // Calculate interval time

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [end, duration]);

  return (
    <span className="number">{count}</span>
  );
};

const Middle = () => {
  return (
    <>
      <div className="middle-part">
        <img src={Middleimg} alt="Middle image" loading='lazy' />
        <div className='Home_hero'>
        <div>
      <h1 className="Home_header">
        
        <span className="Home_header1 leBeat"> Construction <span style={{color:'#212121',fontSize:'50px',fontWeight:'600'}}>Solution</span> For everyone</span>
      </h1>
      <div className="cssanimation leBeat"></div>
    </div>

          <blockquote className='quote'>
            What I view life like is about energy. Everything is about energy - everything. We physically are little units of electrical energy, and we vibrate and project electromagnetic thought.
          </blockquote>
          <Link to="/contact" className="button-link">
            <button className="button_middle">Learn More
              {/* Learn more <img src="./assets/long-arrow-alt-right.png" alt="arrow" /> */}
            </button>
          </Link>
        </div>
      </div>

      <div className="container-box">
        <div className="box green">
          <p>
            <Counter end="160" duration={2000} /> {/* Counter for Completed Projects */}
            <br />Completed Projects
          </p>
        </div>
        <div className="box blue">
          <p>
            <Counter end="6" duration={1500} /> {/* Counter for Years of Experience */}
            +<br />Years of Experience
          </p>
        </div>

        <div className="services"><br />
          <h5 className='text'>We construct and manage places and infrastructures</h5>
          <div className="service">
            <img src={shape1} alt="General Contract Icon" />
            <div className='sub-service'>
              <h3 className='header-details'>General Contract</h3>
              <p>"For an effective collaboration, we provide customized energy solutions with transparent terms that include audits, installations, and maintenance."</p>
            </div>
          </div>
          <div className="service">
            <img src={shape3} alt="Project Planning Icon" />
            <div className='sub-service'>
              <h3 className='header-details' style={{ marginLeft: '15px' }}>Project Planning</h3>
              <p style={{ marginLeft: '15px' }}>"Thorough project planning guarantees efficient resource management, on-time delivery, and alignment with customer objectives for effective energy solutions."</p>
            </div>
          </div>
          <div className="service">
            <img src={shape2} alt="Refurbishment Icon" />
            <div className='sub-service'>
              <h3 className='header-details' style={{ marginLeft: '5px' }}>Refurbishment</h3>
              <p style={{ marginLeft: '5px' }}>"With little interruption to business operations, professional refurbishing services increase energy efficiency and prolong the life of your equipment."</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
