import React from 'react';
import './WhyChooseUsPage.css'; // Link to the external CSS file

// Importing icons for each section
import { FaCog, FaTools, FaUserCheck, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const WhyChooseUsPage = () => {
  return (
    <div className="why-choose-us-container">
      <h1 className="section-title">Why Choose Nilachala Energy?</h1>
      <p>"At Nilachala Energy, we stand out for our unwavering commitment to delivering top-notch electrical solutions that meet the diverse needs of our clients. With a team of experienced engineers and industry professionals, we provide end-to-end services, from design and installation to maintenance, ensuring each project is completed on time and within budget. Our customer-centric approach, combined with our use of innovative technologies and a focus on safety and compliance, guarantees high-quality, energy-efficient, and cost-effective solutions that exceed expectations. Whether you're looking for reliable expertise or cutting-edge solutions, Nilachala Energy is your trusted partner."</p>

      <div className="feature-cards-container">
        <div className="feature-card expertise-card">
          <div className="feature-icon"><FaCog /></div>
          <h2 className="feature-title">Expertise and Experience</h2>
          <p className="feature-description">
            With a team of qualified engineers and industry professionals, we have the experience and knowledge to deliver complex electrical projects on time and within budget.
          </p>
        </div>

        <div className="feature-card solutions-card">
          <div className="feature-icon"><FaTools /></div>
          <h2 className="feature-title">End-to-End Solutions</h2>
          <p className="feature-description">
            Nilachala Energy offers a complete range of electrical services from design to installation and maintenance, making us a one-stop-shop for all your electrical needs.
          </p>
        </div>

        <div className="feature-card customer-satisfaction-card">
          <div className="feature-icon"><FaUserCheck /></div>
          <h2 className="feature-title">Customer Satisfaction</h2>
          <p className="feature-description">
            We take pride in our customer-centric approach, ensuring that each client receives personalized service, transparent communication, and high-quality solutions tailored to their specific requirements.
          </p>
        </div>

        <div className="feature-card innovation-card">
          <div className="feature-icon"><FaLightbulb /></div>
          <h2 className="feature-title">Innovation and Technology</h2>
          <p className="feature-description">
            Our company stays ahead of the curve by embracing new technologies, allowing us to provide advanced, cost-effective, and energy-efficient solutions to our clients.
          </p>
        </div>

        <div className="feature-card safety-card">
          <div className="feature-icon"><FaShieldAlt /></div>
          <h2 className="feature-title">Safety and Compliance</h2>
          <p className="feature-description">
            Nilachala Energy is committed to upholding the highest safety standards and complying with all relevant regulations. We ensure that every project is completed safely and in full compliance with industry standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsPage;
