import React from 'react';
import './Mappart.css';

const Mappart = () => {
  return (
    <>
    <div className="map-container">
      <img src="./assets/map.png "alt="Map" className="map-image" />
      <div className="icon">
        <img src="./assets/map-icon.png" alt="" /> 
      </div>
      <div className='Address1'>
      <span>Company Address</span>
      <p className='h2name' ><b style={{fontSize:'25px'}}>Office :-</b> Plot No-1528/59, Shyam Nagar, Bharatpur, BBSR, Pin-751003</p>
      </div>
      <div className='numbers'>
        <div className='num'>
          <img src="./assets/call.png" alt=""  className='call_img'/>

        </div>
        <div className='contacts'>
          <span>Company Contacts </span>
          <h6>+91 7008357686  <br />
          +91 9438344709
          </h6>
        

        </div>
    


      </div>
      <div className='emails'>
        <div className='email'>
          <img src="./assets/chat_img.png" alt=""  className='email_img'/>

        </div>
        <div className='mails'>
          <b>Company Emails</b>
          <p  style={{ fontSize: '1rem',height:'2rem' }}>
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
      </div>
      </>
  );
}

export default Mappart;
