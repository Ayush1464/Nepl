import React, { useState, useRef } from "react";
import "./Joinus.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import HexagonRow from "./HexagonRow";
import ClientScroll from "../Home/ClientScroll";

const Joinus = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("engineering"); // Default category

  const cultureRef = useRef(null);

  const joinRef = useRef(null);

  const scrollToCulture = () => {
    if (cultureRef.current) {
      cultureRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToJoin = () => {
    if (joinRef.current) {
      joinRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Job listings data with categories
  const jobListings = [
    {
      category: "engineering",
      id: 1,
      title: "WordPress Developer",
      experience: "0-2 years",
      deadline: "2024-10-08",
    },
    {
      category: "engineering",
      id: 2,
      title: "JavaScript Developer",
      experience: "0-2 Years",
      deadline: "2024-10-08",
    },
    {
      category: "engineering",
      id: 3,
      title: "Apps Developer",
      experience: "0-2 Years",
      deadline: "2024-10-08",
    },
    {
      category: "engineering",
      id: 4,
      title: "iOS Developer",
      experience: "0-2 Years",
      deadline: "2024-10-08",
    },
    {
      category: "engineering",
      id: 5,
      title: "Node.js Developer",
      experience: "0-2 Years",
      deadline: "2024-10-08",
    },
    {
      category: "hr_admin",
      id: 6,
      title: "HR Manager",
      experience: "3-5 Years",
      deadline: "2024-10-15",
    },
    {
      category: "hr_admin",
      id: 7,
      title: "Admin Executive",
      experience: "2-4 Years",
      deadline: "2024-10-20",
    },
    {
      category: "support",
      id: 8,
      title: "Customer Support Specialist",
      experience: "0-2 Years",
      deadline: "2024-10-12",
    },
    {
      category: "support",
      id: 9,
      title: "Technical Support Engineer",
      experience: "1-3 Years",
      deadline: "2024-10-18",
    },
    {
      category: "design",
      id: 10,
      title: "UI/UX Designer",
      experience: "2-4 Years",
      deadline: "2024-10-22",
    },
    {
      category: "design",
      id: 11,
      title: "Graphic Designer",
      experience: "1-3 Years",
      deadline: "2024-10-30",
    },
    {
      category: "digital_marketing",
      id: 12,
      title: "Digital Marketing Specialist",
      experience: "0-2 Years",
      deadline: "2024-10-15",
    },
    {
      category: "digital_marketing",
      id: 13,
      title: "SEO Specialist",
      experience: "1-3 Years",
      deadline: "2024-10-25",
    },
  ];

  // Function to handle job card click
  const handleJobClick = (job) => {
    navigate("/Product1", { state: { jobTitle: job.title } });
  };

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter job listings based on selected category
  const filteredJobListings = jobListings.filter(
    (job) => job.category === selectedCategory
  );

  return (
    <div className="Join_Us">
      {/* <Navbar /> */}

      <div className="join-us">
        <div className="joinus_content">
          <h2 style={{ color: "#212121" }}>JOIN US</h2>
          <p style={{ color: "#212121" }}>
            "Join our vibrant team and help us develop ground-breaking,
            impactful solutions. Join us in pursuing our goal of excellence,
            passion, and originality as we lead the industry. We can do amazing
            things when we work together."
          </p>
          <div className="buttons_join">
            
              <button className="join-team" onClick={scrollToJoin}>Join the team</button>
            

            {/* <button className="culture" style={{ backgroundColor: "black" }} onClick={scrollToCulture}>
                Culture
              </button> */}

            <button onClick={scrollToCulture}>Our Culture</button>
          </div>
        </div>
      </div>
      <ClientScroll/>

      <div className="benefits">
        <div className="benefit_content_inside">
          <h3>BENEFITS</h3>
          <h1>Why you Should Join Our Awesome Team</h1>
          <p>
            "Joining our team entails joining a forward-thinking, encouraging
            environment where our top goals are your success and growth. Take
            advantage of a collaborative work atmosphere, ongoing learning
            opportunities, and the ability to truly impact a cutting-edge
            sector. Together, we're reshaping the future, not just constructing
            a business."
          </p>{" "}
          <br />
          <section
            ref={cultureRef}
            style={{
              margin: "20px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "5px",
            }}
          >
            <h1>Our Culture</h1>
            <ul>
              <li>
                <strong>Meaningful Work:</strong> Join us on a mission to
                [briefly describe the purpose or impact of your work]. At NEPL,
                every role contributes to a larger goal, making your work not
                just a job but a meaningful contribution to [industry or cause].
              </li>
              <li>
                <strong>Innovative Culture:</strong> We foster a culture of
                innovation where ideas are not just welcomed but encouraged.
              </li>
              <li>
                <strong>Professional Growth:</strong> We invest in our people.
                Your growth is our priority, and we provide opportunities for
                skill development, mentorship programs, and continuous learning.
              </li>
              <li>
                <strong>Diverse and Inclusive Community:</strong> We celebrate
                diversity and believe in creating an inclusive workplace where
                everyone feels valued and heard. Join a team that embraces
                differences and understands the strength that comes from diverse
                perspectives.
              </li>
            </ul>
          </section>
        </div>
        {/* Scrollable container for benefit cards */}
        
      </div>
      {/* <div
          className="benefit_card"
          style={{ maxHeight: "500px", overflowY: "scroll" }}
        >
          <div className="joinus_card">
            <img
              src="./assets/Team.png"
              alt="Team work"
              style={{ backgroundColor: "#f2f2f2" }}
            />
            <br />
            <br />
            <b>Team work</b>
            <br />
            <br />
            <p>
              Teamwork fuels our success through collaboration and mutual
              respect.
            </p>
          </div>
          <div className="joinus_card">
            <img
              src="./assets/Secure.png"
              alt="Secured Future"
              style={{ backgroundColor: "#C6F5A0" }}
            />
            <br />
            <br />
            <b>Secured Future</b>
            <br />
            <br />
            <p>
              Join us for a secured future with stability and growth
              opportunities.
            </p>
          </div>
          <div className="joinus_card">
            <img
              src="./assets/Learning.png"
              alt="Learning Opportunity"
              style={{ backgroundColor: "#D3D3D3", height: "50px" }}
            />
            <br />
            <br />
            <b>Learning Opportunity</b>
            <br />
            <br />
            <p>Access valuable growth-focused learning opportunities.</p>
          </div>
          <div className="joinus_card">
            <img
              src="./assets/Upgrade.png"
              alt="Upgrade Skills"
              style={{ margin: "3px", backgroundColor: "#F8D3E3" }}
            />
            <br />
            <br />
            <b>Upgrade Skills</b>
            <br />
            <br />
            <p>Enhance your skills with continuous learning opportunities.</p>
          </div>
          <div className="joinus_card">
            <img
              src="./assets/corporate.png"
              alt="Work Culture"
              style={{ backgroundColor: "#E0E0E0", height: "50px" }}
            />
            <br />
            <br />
            <b>Work Culture</b>
            <br />
            <br />
            <p>
              Experience a positive work culture that values teamwork and
              respect.
            </p>
          </div>
          <div className="joinus_card">
            <img
              src="./assets/achievement.png"
              alt="Professional Growth"
              style={{ backgroundColor: "#D9EAD3", height: "50px" }}
            />
            <br />
            <br />
            <b>Professional Growth</b>
            <br />
            <br />
            <p>
              Opportunities for continuous professional growth and skill
              enhancement.
            </p>
          </div>
          <div className="joinus_card">
            <img
              src="./assets/inclusion.png"
              alt="Diverse Community"
              style={{ backgroundColor: "#F5F5DC", height: "50px" }}
            />
            <br />
            <br />
            <b>Diverse and Inclusive Community</b>
            <br />
            <br />
            <p>Join a diverse team where everyone's voice is valued.</p>
          </div>
        </div> */}

        <HexagonRow/>

      <section className="career-openings" ref={joinRef}> 
        <div className="Career_content">
          <div className="sidebar" style={{ listStyle: "none" }}>
            <ul>
              <li
                onClick={() => handleCategoryClick("hr_admin")}
                className={selectedCategory === "hr_admin" ? "active_join" : ""}
              >
                HR & ADMIN <span>(2)</span>
              </li>
              <li
                onClick={() => handleCategoryClick("engineering")}
                className={
                  selectedCategory === "engineering" ? "active_join" : ""
                }
              >
                ENGINEERING <span>(5)</span>
              </li>
              <li
                onClick={() => handleCategoryClick("support")}
                className={selectedCategory === "support" ? "active_join" : ""}
              >
                SUPPORT<span>(2)</span>
              </li>
              <li
                onClick={() => handleCategoryClick("design")}
                className={selectedCategory === "design" ? "active_join" : ""}
              >
                DESIGN<span>(2)</span>
              </li>
              <li
                onClick={() => handleCategoryClick("digital_marketing")}
                className={
                  selectedCategory === "digital_marketing" ? "active_join" : ""
                }
              >
                DIGITAL MARKETING<span>(2)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="main-content">
          <div className="main1">
            <h3>COME JOIN US</h3>
            <h1>Career Openings</h1>
            <p>
              We're always looking for creative, talented self-starters to join
              the NEPL family. Check out our open roles below and fill out an
              application.
            </p>
          </div>
          <div className="job-listings">
            {filteredJobListings.map((job) => (
              <div className="job-card" key={job.id}>
                <div className="job-info">
                  <div className="dev">
                    <b>{job.title}</b>
                  </div>
                  <div className="exp">
                    <p>
                      Experience <b>{job.experience}</b>
                    </p>
                  </div>
                  <div className="dt">
                    <p>
                      Deadline <b>{job.deadline}</b>
                    </p>
                  </div>
                  <div className="apply-arrow">
                    <Link to="/Product1" onClick={() => handleJobClick(job)}>
                      &#10140;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Joinus;
