import React from 'react';
import './MissionVisionPage.css';
import { FaFlag, FaEye } from 'react-icons/fa'; // If you're using React Icons

const MissionVisionPage = () => {
  return (
    <div className="mission-vision-container">
      <div className="mission-section">
        <div className="mission-content">
          <FaFlag className="icon" />
          <h2>Our Mission</h2>
          <p>
          At Nilachala Energy Pvt. Ltd., our mission is to provide sustainable, reliable, and innovative energy solutions that empower communities and support industries. We are committed to delivering high-quality electrical, solar, civil, and technological services, focused on enhancing energy infrastructure and minimizing environmental impact. Our goal is to address the growing energy needs of today while ensuring a greener future, integrating renewable energy sources like solar power, and using smart technologies to improve efficiency. We strive to create value for our clients through tailored, effective solutions and exceptional customer service, all while fostering a culture of innovation and continuous learning among our employees.
          </p>
        </div>
      </div>

      <div className="vision-section">
        <div className="vision-content">
          <FaEye className="icon" />
          <h2>Our Vision</h2>
          <p>
          Nilachala Energy Pvt. Ltd. envisions becoming a global leader in sustainable energy solutions, transforming the energy landscape by prioritizing renewable energy and smart technologies. We aim to create a future where clean energy powers communities worldwide, reducing dependence on fossil fuels and lowering environmental impact. Our vision includes bridging the energy access gap, especially in underserved areas, by providing affordable and reliable energy to all. Through innovation, sustainability, and social responsibility, we aim to shape a future where energy contributes to global progress, environmental stewardship, and social well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionPage;
