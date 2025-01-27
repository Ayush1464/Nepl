import React, { useRef, useState } from 'react';
import './aboutus.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Slider from './Slider';
import Slider1 from './Slider1';
import LastPart from './LastPart';
import MissionVisionPage from './MissionVisionPage';
import WhyChooseUsPage from './WhyChooseUsPage';
import ClientScroll from '../Home/ClientScroll';

const Aboutus = () => {
  // const form = useRef();
  
  // const [emailError, setEmailError] = useState('');
  // const [phoneError, setPhoneError] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [message, setMessage] = useState(''); // State for the message
  // const [successMessage, setSuccessMessage] = useState('');
  // const [service, setService] = useState(''); // State for selected service

  // const maxMessageLength = 300;

 

  // const emailRegex = /^(?!\.)(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  // const handleEmailChange = (e) => {
  //   const value = e.target.value;
  //   setEmail(value);
  //   if (value === '') {
  //     setEmailError('Email is required');
  //   } else if (!emailRegex.test(value)) {
  //     setEmailError('Please enter a valid email address');
  //   } else {
  //     setEmailError('');
  //   }
  // };

  // const handlePhoneChange = (value) => {
  //   setPhone(value);
  //   if (value === '') {
  //     setPhoneError('Phone number is required');
  //   } else if (value.length < 10) {
  //     setPhoneError('Please enter a valid phone number');
  //   } else {
  //     setPhoneError('');
  //   }
  // };

  // const handleServiceChange = (e) => {
  //   setService(e.target.value); // Update state on change
  // };
  // const handleMessageChange = (e) => {
  //   const value = e.target.value;
  //   setMessage(value);
  //   setRemainingChars(maxMessageLength - value.length);
  // };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   if (!emailRegex.test(email)) {
  //     setEmailError('Please enter a valid email address');
  //     return;
  //   }

  //   if (phoneError) {
  //     return; // Don't send if there's a phone error
  //   }

  //   emailjs.sendForm('service_gqr357a', 'template_49c6jge', form.current, {
  //     publicKey: 'cOiTMagzVAX_Js2gz',
  //   })
  //   .then(
  //     () => {
  //       form.current.reset();
  //       setEmail('');
  //       setPhone('');
  //       setMessage(''); // Reset the message
  //       setEmailError('');
  //       setPhoneError('');
  //       setSuccessMessage('Appointment scheduled successfully!');
  //     },
  //     (error) => {
  //       console.log('FAILED...', error.text);
  //       alert('Failed to send message. Please try again later.');
  //     }
  //   );
  // };

  

  return (
    <div className="about-container">
      {/* <Navbar /> */}
      
      <div class="about-heading">
    <video className="background-video" autoPlay muted loop>
        <source src="/assets/aboutusvideo.mp4" type="video/mp4"/>
        {/* <source src="/assets/aboutusvideo.webm" type="video/webm"/> */}
        Your browser does not support the video tag.
    </video>
    <div className="heading-overlay">
        <h1>About Us</h1>
    </div>
</div>
      <div>
          <button className="about-contact-box">
            <p>Lets Talk</p>
            <div className="about_call">
              {/* <i class="bx bxs-phone-call"></i> */}

              

              <img src="/assets/icons8-call.gif" alt="" style={{marginLeft:'-10%',marginBottom:'5%'}}/>
              
              <p>
                <strong>
                  +91 9438344709 <br />
                  +91 7008357686
                </strong>
              </p>
            </div>
          </button>
        </div>
        <ClientScroll/>
        <WhyChooseUsPage/>
        <MissionVisionPage/>
        <div className="about-wrapper">
    <div className="about-image">
        <img src="./assets/dir_img.jpg" alt="Slide" />
    </div>
    <div className="about-content">
        <h2><b>Overture</b></h2>   
        <div className="About_client">
            <div className="container_about">
                <div className="arrow">
                    <div className="outer"></div>
                    <div className="inner"></div>
                </div>
                <div className="message-body">
                    <p>
                        "Failure is central to engineering. Every single calculation that an engineer makes is a failure calculation. Successful engineering is all about understanding how things break or fail." 
                    </p>
                    <h3>
                        Girja Sankar Rana, <span>Director</span>
                    </h3>
                    <Link to="/Joinus" className="about-btn">Join Us Today</Link>
                </div>
            </div>
        </div>
    </div>
</div>


      
      <div className="about-middle">
        <div className="about-bgimg"></div>
        <h3>Get a Quote</h3>
        <h1><b>Build Your Future Today</b></h1>
        <p style={{fontSize:'15px'}}>I am an Electrician By Profession But an Engineer by Knowledge and Intelligence...</p>
        <Link to="/Joinus" className="about-btn">Join Us Today <i className='bx bx-right-arrow-alt'></i></Link>
      </div>
      
      {/* <div className="about-section">
        <div className="about-bottom">
          <div className="about-b1">01</div>
          <div className="about-b2"><b>Project Planning</b>
            <p>Strategic planning for seamless project execution.</p>
          </div>
        </div>
        <div className="about-bottom1">
          <div className="about-b1">02</div>
          <div className="about-b2"><b>Technical Support</b>
            <p>Expert support and solutions for all technical issues.</p>
          </div>
        </div>
        <div className="about-bottom2">
          <div className="about-b1">03</div>
          <div className="about-b2"><b>Custom Solutions</b>
            <p>Custom solutions to meet project needs and drive results.</p>
          </div>
        </div>
      </div> */}
      {/* <div style={styles.container}>
  <div style={styles.card1}>
    <div style={styles.overlay}></div> 
    <h3 style={styles.title}>Project Planning</h3>
    <p style={styles.description}>Strategic planning for seamless project execution.</p>
  </div>
  <div style={styles.card2}>
    <div style={styles.overlay}></div>
    <h3 style={styles.title}>Technical Support</h3>
    <p style={styles.description}>Expert support and solutions for all technical issues.</p>
  </div>
  <div style={styles.card3}>
    <div style={styles.overlay}></div> 
    <h3 style={styles.title}>Custom Solutions</h3>
    <p style={styles.description}>Custom solutions to meet project needs and drive results.</p>
  </div>
  <div style={styles.card1}>
    <div style={styles.overlay}></div>
    <h3 style={styles.title}>Project Planning</h3>
    <p style={styles.description}>Strategic planning for seamless project execution.</p>
  </div>
  <div style={styles.card2}>
    <div style={styles.overlay}></div> 
    <h3 style={styles.title}>Technical Support</h3>
    <p style={styles.description}>Expert support and solutions for all technical issues.</p>
  </div>
  <div style={styles.card3}>
    <div style={styles.overlay}></div>
    <h3 style={styles.title}>Custom Solutions</h3>
    <p style={styles.description}>Custom solutions to meet project needs and drive results.</p>
  </div>
</div>
 */}

<Slider1/>

      
      {/* <div className="about-lastpart">
        <img src="assets/WhatsApp Image 2024-10-29 at 12.36.12_e67989f8.jpg" alt="" />
        <div className="about-one">
          <h2>Request for Quote</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              name="from_name" 
              placeholder="Full Name *" 
              required 
            />
            <input 
              type="email" 
              name="from_email" 
              placeholder="E-Mail *" 
              value={email}
              onChange={handleEmailChange}
              required 
            />
            {emailError && (
              <p style={{ color: 'red', fontSize: '12px' }} className='email_error'>
                {emailError}
              </p>
            )}

            <PhoneInput
              country={'in'} // Default country code for India
               className="custom-phone-input"
              value={phone}
              onChange={handlePhoneChange}
              inputProps={{
                required: true,
                placeholder: 'Phone Number *',
              }}
              enableSearch={true} 
            />
            {phoneError && (
              <p style={{ color: 'red', marginLeft: '2%', fontSize: '12px' }} className='phone-error'>
                {phoneError}
              </p>
            )}

            <input
            type="hidden"
            name="from_phone" 
            value={phone} 
           />
            <select 
  name="service" 
  value={service} 
  onChange={handleServiceChange} 
  required 
  className="input-dropdown"
>
  <option value="" className="placeholder-option">Select Service *</option>
  <option value="Civil engineering services">Civil engineering services</option>
  <option value="Solar energy services">Solar energy services</option>
  <option value="Electrical engineering services">Electrical engineering services</option>
  <option value="IT engineering services">IT engineering services</option>
</select>



            <textarea 
              name="messages" 
              placeholder="Message *" 
              value={message}
              onChange={handleMessageChange}
              maxLength={maxMessageLength} 
              required
            ></textarea>
            <p style={{ color: 'gray', fontSize: '12px' ,marginLeft:'2%'}}>
              {`${message.length} / 300 characters`} 
            </p>
            
            <button type="submit">Appointment</button>
          </form>
          {successMessage && (
            <p style={{ color: 'green', margin: '5px 0' }}>
              {successMessage}
            </p>
          )}
        </div>
       */}
        
 
        
       
{/* 
        <div className='flex-container'> 
          <div className="about-two">
            <ul>
              <li><img src="./assets/last1.jpg" alt="La3" /></li><br /><br />
              <li><img src="./assets/La1.jpg" alt="La1" /></li><br /><br />
              <li><img src="./assets/icon1.jpg" alt="La2" /></li><br /><br />
            </ul>
          </div>
          <div className="about-three">
            <div className='about-three-1'>
              <h3>Safety and Importance:</h3>
              <p>"Safety is our top priority. We ensure a secure environment to protect our team and maintain operational excellence."</p>
            </div>
            <div className='about-three-2'>
              <h3>Advanced Equipment Services:</h3>
              <p>"Delivering accurate and efficient solutions with advanced machinery, designed to meet the highest standards in every project."</p>
            </div>
            <div className='about-three-3'>
              <h3>Precision Equipment:</h3>
              <p>"Our precision tools ensure top-quality work, enhancing safety and consistency across all projects for superior outcomes."</p>
            </div>
          </div> 
        </div> */}
         {/* <Slider/> */}
        
      {/* </div> */}
      <LastPart/>
      
    
    </div>
  );
};





export default Aboutus;
