import React from 'react';
import "./Service3_part3.css";
import { Link } from 'react-router-dom';

function Service3_part3() {
  return (
    <div className="wrapper_ServiceThree">
      <div className="content_ServiceThree">
        <b style={{ fontWeight: '600', fontSize: '30px' }}>Electricity Distribution</b>
        <p style={{ fontSize: '15px' }}>
          To begin, picture a sum of inputs generated electricity, which issues forth to the power lines and substations scattered throughout the area, finally ending up at homes, businesses, and industries. It is at the stage of the generation of power that the journey commences. Power plants are the power generating units where electricity is generated at high voltage and then transmitted via high voltage lines to the respective consuming units to avoid energy loss. In the distribution substation, the station transforms the electricity to a lower voltage suitable for the consumption of the end-user. Through the distribution transformer, service lines, and also feeders, the electricity is passed into the lower voltage distribution lines which include the substation and finally, it is transmitted to a particular consumer.
        </p>
        <br /><br />
      </div>
      <div className="image_ServiceThree">
        <h2><b>Get an appointment with our Expert</b></h2>
        <p>
          Set up a meeting with our knowledgeable experts to discuss your unique requirements and difficulties. To make sure you accomplish your project goals quickly and successfully, our specialists offer tailored advice and workable solutions. Schedule your consultation right now to take advantage of success-oriented guidance and creative tactics.
        </p>
        <button>
          <Link to="/Contact"><i className='bx bx-right-arrow-alt'></i></Link>
        </button>
      </div>
    </div>
  );
}

export default Service3_part3;
