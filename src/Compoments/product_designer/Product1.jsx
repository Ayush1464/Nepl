import React from 'react';
import proo1 from "/assets/facebook.img.jpeg";
import proo2 from "/assets/twitter.img.jpeg";
import proo3 from "/assets/linkedin.img.jpeg";
import proo4 from "/assets/instagram.img.jpeg";
import proo5 from "/assets/Location.img.jpeg";
import proo6 from "/assets/JobType.img.jpeg";
import proo7 from "/assets/DatePosted.img.jpeg";
import proo8 from "/assets/Experience.img.jpeg";
import proo9 from "/assets/WorkingHours.img.jpeg";
import proo10 from "/assets/WorkingDays.img.jpeg";
import proo11 from "/assets/Vacancy.img.jpeg";
import './Product1.css'; // Make sure the path is correct
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link,useLocation } from 'react-router-dom';

const Product1 = (props) => {
  const location = useLocation();
  const { jobTitle } = location.state || {};
  return (
    <div>
      {/* <Navbar/> */}
      <div className='product-container'>
        <div className="product-content">
          <h1>{props.text}</h1>

          <h2>Who Are We Looking For</h2>
          <ul>
            <li>A motivated individual with a passion for continuous learning and growth.</li>
            <li>Someone who can adapt to changing business needs and contribute to various projects.</li>
            <li>A team player who can collaborate effectively with different departments.</li>
            <li>A problem-solver who can approach challenges with a solution-oriented mindset.</li>
            <li>Ability to take feedback and iterate quickly to improve work quality.</li>
            <li>Experience in your field is a plus, but we value enthusiasm and a willingness to learn.</li>
            <li>Good understanding of industry best practices and trends.</li>
            <li>Strong communication skills to collaborate with team members and stakeholders.</li>
            <li>Attention to detail and a strong work ethic.</li>
          </ul>

          <h2>What You Will Be Doing</h2>
          <ul>
            <li>Collaborating with team members to define and implement project goals and objectives.</li>
            <li>Executing tasks across different stages of the project lifecycle.</li>
            <li>Conceptualizing and implementing ideas that bring value to the team and the company.</li>
            <li>Creating documentation, reports, and presentations to communicate progress and results.</li>
            <li>Presenting work and deliverables to peers and executive-level stakeholders.</li>
            <li>Conducting research and evaluating data to inform decision-making.</li>
            <li>Establishing and promoting best practices and standards within the team.</li>
            <li>Collaborating with other teams to create cohesive and impactful results.</li>
            <li>Staying up-to-date with industry trends, tools, and technologies.</li>
          </ul>

          <h2>Bonus Points for Familiarity with</h2>
          <ul>
            <li>Experience with tools or technologies relevant to your field.</li>
            <li>Knowledge of cross-functional collaboration to better integrate with other teams.</li>
            <li>Understanding of industry standards and how to apply them in your work.</li>
            <li>Experience working in a dynamic environment with cross-functional teams.</li>
            <li>Familiarity with data-driven decision-making and performance metrics.</li>
          </ul>

          <h2>Educational Requirement</h2>
          <p>
            A degree in a relevant field is preferred, but not required. What matters most is your ability to demonstrate a strong work ethic and a commitment to continuous improvement.
          </p>

          <h2>Salary</h2>
          <ul>
            <li>Salary:Based on Ratings of the interview</li>
            <li>Salary Review: Yearly, based on performance</li>
          </ul>

          <h2>Working Hours</h2>
          <ul>
            <li>10 AM - 6 PM</li>
          </ul>

          <h2>Working Days</h2>
          <ul>
            <li>Monday to Friday</li>
            <li>Weekend: Saturday, Sunday</li>
          </ul>

          <h2>Perks & Benefits You'll Get</h2>
          <ul>
            <li>Health insurance, including dental and vision coverage.</li>
            <li>401(k) matching and retirement planning options.</li>
            <li>Paid time off, including holidays and sick days.</li>
            <li>Professional development opportunities and learning stipends.</li>
            <li>Flexible working hours and remote work options.</li>
            <li>Access to a modern office space with amenities.</li>
            <li>Team outings, company events, and regular social activities.</li>
            <li>Supportive work environment that values diversity and inclusion.</li>
            <li>Opportunities for growth and advancement within the company.</li>
          </ul>

          <hr />

          <h2>Application Process</h2>
          <ul>
            <li>Submit your resume through our online application system.</li>
            <li>Initial phone screening with our HR team.</li>
            <li>Assessment or take-home assignment to gauge your skills.</li>
            <li>On-site or virtual interview with the team.</li>
            <li>Final interview with the leadership team.</li>
            <li>Offer and onboarding process to welcome you to the team.</li>
            <li>Continuous feedback and support throughout your journey with us.</li>
            <li>Opportunities to showcase your work and contribute to the company's growth.</li>
            <li>Be part of a dynamic team that values innovation and creativity.</li>
          </ul>

          <h2>Our Statement</h2>
          <p>
            At NILACHALA ENERGY PRIVATE LIMITED, we believe in creating products and services that make a difference. Our mission is to deliver innovative solutions that enhance the lives of our users and drive meaningful impact. Join us in our journey to shape the future.
          </p>

          <button className="product-apply-button">Apply Now</button>
        </div>

        <div className="product-sidebar" style={{ backgroundColor: 'whitesmoke' }}>
          <button className="product-apply-button">Apply Now</button>
          <div className="product-job-summary">
            <h3>Job Summary</h3>
            <div className="product-job-summary-item">
              <img src={proo5} alt="Location" />
              <span>Bhubaneswar, Odisha</span>
              <br />
              <br />
            </div>
            <div className="product-job-summary-item">
              <img src={proo6} alt="JobType" />
              <span>Full Time</span>
              <br />
              <br />
            </div>
            <div className="product-job-summary-item">
              <img src={proo7} alt="DatePosted" />
              <span>Posted 1 month ago</span>
              <br />
              <br />
            </div>
            <div className="product-job-summary-item">
              <img src={proo8} alt="Experience" />
              <span>0-2 years</span>
              <br />
              <br />
            </div>
            <div className="product-job-summary-item">
              <img src={proo9} alt="WorkingHours" />
              <span>9 AM - 6 PM</span>
              <br />
              <br />
            </div>
            <div className="product-job-summary-item">
              <img src={proo10} alt="WorkingDays" />
              <span>Weekly 5 days, Weekend: Saturday, Sunday</span>
              <br />
              <br />
            </div>
            <div className="product-job-summary-item">
              <img src={proo11} alt="Vacancy" />
              <span>No. of Vacancies: 3</span>
              <br />
              <br />
            </div>
          </div>

          <Link to="/Joinus" className="product-view-all-jobs">View all jobs</Link>
          <div className="product-social-share" style={{ backgroundColor: 'white' }}>
            <h4 style={{ textAlign: 'center' }}>Share this:</h4>
            <a href="#"><img src={proo1} alt="Facebook" /></a>
            <a href="#"><img src={proo2} alt="Twitter" /></a>
            <a href="#"><img src={proo3} alt="LinkedIn" /></a>
            <a href="#"><img src={proo4} alt="Instagram" /></a>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Product1;
