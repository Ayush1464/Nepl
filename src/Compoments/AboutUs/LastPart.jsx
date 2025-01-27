import React, { useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from '@emailjs/browser';
import "./LastPart.css";

const LastPart = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [service, setService] = useState('');
  const maxMessageLength = 300;
  const emailRegex = /^(?!\.)(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!emailRegex.test(value)) setEmailError('Please enter a valid email address');
    else setEmailError('');
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    setPhoneError(value.length < 10 ? 'Please enter a valid phone number' : '');
  };

  const handleServiceChange = (e) => setService(e.target.value);

  const handleMessageChange = (e) => setMessage(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();
    if (emailError || phoneError) return;

    emailjs.sendForm('service_gqr357a', 'template_49c6jge', form.current, 'cOiTMagzVAX_Js2gz')
      .then(() => {
        form.current.reset();
        setEmail('');
        setPhone('');
        setMessage('');
        setSuccessMessage('Appointment scheduled successfully!');
      })
      .catch((error) => alert('Failed to send message. Please try again later.'));
  };

  return (
    <div className="request-quote-container">
      <img src="assets/WhatsApp Image 2024-10-29 at 12.36.12_e67989f8.jpg" alt="Quote request illustration" className="quote-image" />
      <div className="quote-content">
        <h2>Request for Quote</h2>
        <form ref={form} onSubmit={sendEmail} className="quote-form">
          <label>
            Full Name 
            </label>
            <input type="text" name="from_name" placeholder="Full Name" required className="input-field" />
         

          <label>
            E-Mail 
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="E-Mail"
              value={email}
              onChange={handleEmailChange}
              required
              className="input-field"
            />
        
          {emailError && <p className="error-text">{emailError}</p>}

          <label>
            Phone Number 
            </label>
            <PhoneInput
              country={'in'}
              value={phone}
              onChange={handlePhoneChange}
              inputProps={{ required: true, placeholder: 'Phone Number' }}
              className="custom-phone-input"
            />
         
          {phoneError && <p className="error-text">{phoneError}</p>}
          <input
            type="hidden"
            name="from_phone" 
            value={phone} 
           />

          <label>
            Service 
            </label>
            <select name="service" value={service} onChange={handleServiceChange} required className="dropdown1">
              <option value="">Select Service</option>
              <option value="Civil engineering services">Civil engineering services</option>
              <option value="Solar energy services">Solar energy services</option>
              <option value="Electrical engineering services">Electrical engineering services</option>
              <option value="IT engineering services">IT engineering services</option>
            </select>
          

          <label>
            Message 
            </label>
            <textarea
              name="messages"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
              maxLength={maxMessageLength}
              required
              className="message-box2"
            ></textarea>
          
          <p className="char-count">{`${message.length} / 300 characters`}</p>

          <button type="submit" className="submit-btn">Appointment</button>
        </form>
        {successMessage && <p className="success-text">{successMessage}</p>}
      </div>
    </div>
  );
};

export default LastPart;
