import React, { useState } from 'react';
import './Single_project_part2.css';
import image1 from '/assets/project_img1.jpg';
import image2 from '/assets/project_ing2.jpg';
import image3 from '/assets/projectback.jpg';
import image4 from '/assets/project_img3.jpg';
import image5 from '/assets/project_img4.jpg';
import nayagarh from '/assets/nayagarh.jpeg';
import proj1 from '/assets/proj1.jpeg';
import proj2 from '/assets/proj2.jpeg';
import proj3 from '/assets/proj3.jpeg';
import proj4 from '/assets/proj4.jpeg';
import proj5 from '/assets/proj5.jpeg';
import proj6 from '/assets/proj6.jpeg';
import proj7 from '/assets/proj7.jpeg';
import proj8 from '/assets/proj8.jpeg';
import proj9 from '/assets/proj9.jpeg';

const Single_project_part2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="part2_main">
      <div className="scrollable-container">
        <div className="project_part2">
          <div className="part2_1">
            {/* Image and Description Section */}
            <div className="part2_1_images">
              <img src={nayagarh} alt="" style={{ height: '20rem' }} />
            </div>
            <div className="part2_1_images">
              <div className={`text-wrapper ${isExpanded ? 'expanded' : ''}`}>
                <p>
                  The Nayagarh LTABT project was a pivotal initiative undertaken by Nilachala Energy Pvt Ltd to enhance the electrical infrastructure in Nayagarh district. The project involved the installation of Low Tension Aerial Bunched Cables (LTABT) across various rural and semi-urban areas.
                </p>
              </div>
              <a href="#" className="read-more" onClick={handleToggle}>
                {isExpanded ? 'Read Less' : 'Read More'}
              </a>
            </div>

            {/* Images Section */}
            <div className="part2_1_image">
              <div><img src={proj1} alt="" /></div>
              <div><img src={proj2} alt="" /></div>
              <div><img src={proj3} alt="" /></div>
              <div><img src={proj4} alt="" /></div>
            </div>
          </div>

          {/* Project Info Section */}
          <div className="part2_2">
            <h2>NAYAGARH LTABC</h2>
            <div className="part2_para">
              <p>
                The successful completion of the Nayagarh LTABT project resulted in a significant reduction in technical losses and power theft, enhancing the overall efficiency and reliability of the power distribution system in the region.
              </p>
            </div>

            <h2>Project Info</h2>

            <div className="project_info">
              <b>Client:</b>
              <p>TPCODL</p>
            </div>
            <div className="project_info">
              <b>Category:</b>
              <p>Electrical business</p>
            </div>
            <div className="project_info">
              <b>Completed on:</b>
              <p>30 January 2022</p>
            </div>

            <div className="social_icons">
              <a href="https://www.facebook.com/profile.php?id=61564663453366" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://x.com/neplbbsr" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/nepl_bbsr/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <div>
           <p>Nilachala Energy Pvt. Ltd. is pleased to announce the successful completion of the electrical site works for the Nayagarh project, marking a significant achievement in the company’s commitment to providing high-quality energy solutions. The Nayagarh project, a multi-faceted infrastructure development, included a wide range of electrical services designed to improve the region’s power supply, reliability, and sustainability. With the completion of this project, Nilachala Energy has not only addressed the immediate electrical needs of the region but has also laid the foundation for long-term energy stability and growth. The project highlights Nilachala Energy’s expertise in delivering complex electrical solutions, incorporating cutting-edge technology, and adhering to the highest standards of safety and quality.</p>
          </div>
          </div>
          
        </div>

        <br />
        <br />

        <div className="project_part2">
          <div className="part2_1">
            {/* Second Image and Description Section */}
            <div className="part2_1_images">
              <img src={proj5} alt="" style={{ height: '20rem' }} />
            </div>
            <div className="part2_1_images">
              <div className={`text-wrapper ${isExpanded ? 'expanded' : ''}`}>
                <p>
                  The project involved the installation of an 11kV interposing transformer designed to step down voltage from 11kV to a more suitable level for various equipment and systems. This was crucial for maintaining operational efficiency and safety within the facility.
                </p>
              </div>
              <a href="#" className="read-more" onClick={handleToggle}>
                {isExpanded ? 'Read Less' : 'Read More'}
              </a>
            </div>

            {/* Second Set of Images */}
            <div className="part2_1_image">
              <div><img src={proj6} alt="" /></div>
              <div><img src={proj7} alt="" /></div>
              <div><img src={proj8} alt="" /></div>
              <div><img src={proj9} alt="" /></div>
            </div>
          </div>

          {/* Second Project Info Section */}
          <div className="part2_2">
            <h2>11 KV Interposing</h2>
            <div className="part2_para">
              <p>
                The 11kV Interposing Transformer Installation project successfully met its objectives, providing a critical upgrade to the electrical distribution system and contributing to the overall reliability and efficiency of operations.
              </p>
            </div>

            <h2>Project Info</h2>

            <div className="project_info">
              <b>Client:</b>
              <p>TPCODL</p>
            </div>
            <div className="project_info">
              <b>Category:</b>
              <p>Electrical business</p>
            </div>
            <div className="project_info">
              <b>Completed on:</b>
              <p>21 March 2023</p>
            </div>

            <div className="social_icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div>
              <p>Nilachala Energy Pvt. Ltd. is proud to announce the successful completion of the 11 kV electrical distribution network as part of its larger infrastructure development project in Nayagarh. This critical project, which involved the installation of 11 kV overhead and underground power lines, substations, and transformer units, was completed with a clear focus on enhancing the region’s power reliability, reducing energy losses, and supporting sustainable development. The 11 kV system serves as the backbone for distributing electricity to both residential and commercial users, marking a significant step towards modernizing Nayagarh’s electrical infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_project_part2;
