import React, { useRef, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Contact.css';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ClientScroll from '../Home/ClientScroll';

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [emailError, setEmailError] = useState(''); 
  const [phoneError, setPhoneError] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState(''); 
  const [message, setMessage] = useState(''); // Track message input
  const [remainingChars, setRemainingChars] = useState(300); // Track remaining characters

  const maxMessageLength = 300;

  const emailRegex = /^(?!\.)(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



  // Update this regex for international phone numbers
  const phoneRegex = /^[+]?[0-9]{10,15}$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  
    if (value === '') {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };
  

  const handlePhoneChange = (value) => {
    setPhone(value);

    if (value === '') {
      setPhoneError('Phone number is required');
    } else if (!phoneRegex.test(value)) {
      setPhoneError('Please enter a valid phone number');
    } else {
      setPhoneError('');
    }
  };


  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setRemainingChars(maxMessageLength - value.length);
  };

  
  const sendEmail = (e) => {
    e.preventDefault();
  
    // Log the captured phone number for debugging
    console.log("Captured phone number:", phone);
  
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
  
    if (!phoneRegex.test(phone)) {
      setPhoneError('Please enter a valid phone number');
      return;
    }
  
    emailjs
      .sendForm('service_gqr357a', 'template_bzsohrw', form.current, 'cOiTMagzVAX_Js2gz')
      .then(
        () => {
          form.current.reset();
          setEmail('');
          setPhone('');
          setMessage('');
          setRemainingChars(maxMessageLength);
          setEmailError('');
          setPhoneError('');
          setSuccessMessage('Your message has been sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };
  

  return (
    <div className="container1">
      <div className="heading">
        <h1>Contact Us</h1>
        <span style={{ color: 'hsl(195, 19%, 92%)' }}>Home / Contact Us</span>
      </div>

      {/* <div className="lastpart">
      <div className="one">
  <form ref={form} onSubmit={sendEmail}>
    <div className="form-container">
      <div className="field-container">
        <label htmlFor="from_name"  className='text_mandatory1'>Name</label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          placeholder="Enter Your name"
          className="mandatory"
          required
        />
      </div>
      <div className="field-container">
        <label htmlFor="from_email"  className='text_mandatory1'>Email</label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          placeholder="Enter Your Mail"
          className="mandatory"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && (
          <p style={{ color: 'red', fontSize: '15px' }}>
            {emailError}
          </p>
        )}
      </div>
    </div>

    <div className="phone-address-container">
      <div className="field-container">
        <label htmlFor="from_address"  className='text_mandatory1'>Address</label>
        <input
          type="text"
          id="from_address"
          name="from_address"
          placeholder=" Enter Your Address "
          className="contact_address"
          required
        />
      </div>
      <div className="field-container">
        <label htmlFor="phone"  className='text_mandatory1'>Phone Number</label>
        <PhoneInput
          className="custom-phone-input"
          country={'in'}
          value={phone}
          name="phone"
          onChange={handlePhoneChange}
          inputProps={{
            required: true,
            placeholder: ' Enter Your Phone Number',
            id: 'phone', // Added ID for accessibility
          }}
          enableSearch={true}
        />
        {phoneError && (
          <p style={{ color: 'red', fontSize: '12px' }}>
            {phoneError}
          </p>
        )}
        <input
          type="hidden"
          name="from_phone"
          value={phone}
        />
      </div>
    </div>

    <div className="field-container">
      <label htmlFor="from_message"  className='text_mandatory1'>Message </label>
      <textarea
        id="from_message"
        name="from_message"
        placeholder="Message"
        className='text_mandatory'
        value={message}
        onChange={handleMessageChange}
        maxLength={maxMessageLength} // Set the maximum character limit
        required
      />
      <p style={{ fontSize: '12px', color: '#666', textAlign: 'right' }}>
        {remainingChars} characters remaining
      </p>
    </div>

    <button type="submit" value="Send">
      Submit
    </button>
  </form>
  {successMessage && (
    <p style={{ color: 'green', margin: '5px 0' }}>{successMessage}</p>
  )}
</div>

</div> */}

<ClientScroll/>
<div className="contact_us_2">
      <div className="responsive-container-block big-container">
        {/* <div className="blueBG"></div> */}
        <div className="responsive-container-block container">
          <form className="form-box" ref={form} onSubmit={sendEmail}>
            <div className="container-block form-wrapper">
              <p className="text-blk contactus-head">Get in Touch</p>
              <p className="text-blk contactus-subhead">
                Let's get Connected
              </p>
              <div className="responsive-container-block">
                <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                  <p className="text-blk input-title">NAME</p>
                  <input
                    className="input"
                    id="ijowk"
                  
                    placeholder="Please enter name..."
                    type="text"
                    // id="from_name"
                    name="from_name"
                   
                    
                    required
                  />
                </div>
                
                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <p className="text-blk input-title">EMAIL</p>
                  <input
                    className="input"
                    type="email"
                    id="from_email"
                    name="from_email"
                   
                    value={email}
                    onChange={handleEmailChange}
                    required
                    
                    
                    placeholder="Please enter email..."
                  />
                  {emailError && (
          <p style={{ color: 'red', fontSize: '15px' }}>
            {emailError}
          </p>
        )}
                </div>
                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <p className="text-blk input-title">PHONE NUMBER</p>
                  {/* <input
                    className="input"
                    id="imgis"
                    name="PhoneNumber"
                    placeholder="Please enter phone number..."
                  /> */}
<PhoneInput
    country={'in'}
    value={phone}
    type="tel"
    name="phone"
    onChange={handlePhoneChange}
    inputStyle={{
        border:'1px solid black',
        outline: 'none',          

         height:'3.5rem',
       
        borderRadius: '5px',      
        width: '96%',   
        marginLeft:'2%',    
        marginBottom:'-2%',
       
    }}
    inputProps={{
        required: true,
        placeholder: ' Enter Your Phone Number',
        id: 'phone',
        autoFocus: true,
    }}
    enableSearch={true}
/>

        {phoneError && (
          <p style={{ color: 'red', fontSize: '12px' }}>
            {phoneError}
          </p>
        )}
        <input
          type="hidden"
          name="from_phone"
          value={phone}
        />
      
                </div>

                <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                  <p className="text-blk input-title">ADDRESS</p>
                  <input
                    className="input"
                    id="ijowk"
                    type="text"
                    
                    name="from_address"
                    placeholder=" Enter Your Address "
                 
                    required
                
                  
                    
                   
                  />
                </div>





                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                  <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND</p>
                  <textarea
                    className="textinput"
                    id="i5vyy"
                    placeholder="Please enter query..."

                    
        name="from_message"
        
       
        value={message}
        onChange={handleMessageChange}
        maxLength={maxMessageLength} // Set the maximum character limit
        required
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="submit-btn" value="Send">Submit</button>
            </div>

        


            <div className="social-media-links">
              <a href="#" id="ix94i-2">
                <img
                  className="link-img"
                  src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                  alt="Twitter"
                />
              </a>
              <a href="#">
                <img
                  className="link-img"
                  src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                  alt="Facebook"
                />
              </a>
              
              <a href="#" id="izldf-2">
                <img
                  className="link-img"
                  src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                  alt="Instagram"
                />
              </a>
            </div>
          </form>
          {successMessage && (
  <p className="success-message">{successMessage}</p>
)}

        </div>
      </div>
    </div>


<div className="mapp">
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.7651083485707!2d85.77128797402399!3d20.309987512079733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d8aae4fec7%3A0xbf6ffb34d3a1a811!2sNilachala%20Energy%20Private%20Limited!5e0!3m2!1sen!2sin!4v1726658445260!5m2!1sen!2sin&zoom=1"
    width="60%"
    height="300"
    style={{ border: '0' }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
></iframe>

</div>


      <div className="about">
        <div className="bottom2_contact">
          <div className="b1"></div>
          <div className="b2" style={{ marginTop: '20px' }}>
            <b style={{ fontSize: '20px' }}>Company Address</b>
            <h1 style={{ fontSize: '18px' }}>
              <b style={{ fontSize: '20px' }}>Office :-</b> PlotNo-1528/59,
              Shyam Nagar, Bharatpur, BBSR, Pin-751003
            </h1>
          </div>
        </div>

        <div className="bottom1_contact">
          <div className="b1">
            <i className="bx bx-phone-call"></i>
          </div>
          <div className="b2">
            <p style={{ fontSize: '15px' }}>
              <b>Company contacts</b>
            </p>
            <p style={{ fontSize: '0.8rem' }}>
              +91 9438344709 <br />
              +91 7008357686
            </p>
          </div>
        </div>
        <div className="bottom_contact">
          <div className="b1">
            <i className="bx bx-message-rounded-dots"></i>
          </div>
          <div className="b2">
            <p style={{ fontSize: '15px' }}>
              <b>E-mail</b>
            </p>
            <p style={{ fontSize: '0.8rem' }}>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Admin@neplbbsr.info" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'blue' }}
              >
                admin@neplbbsr.info
              </a>
              <br />
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=neplbbsr@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{  color: 'blue' }}
              >
                neplbbsr@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
