import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Home from './Compoments/Home/Home';
import Aboutus from './Compoments/AboutUs/Aboutus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Compoments/Contacts/Contact';
import Service from './Compoments/Services/Service';
import Servicetwo from './Compoments/Service2/Servicetwo';
import Service3 from './Compoments/Service3/Service3';
import Service4 from './Compoments/Service4/Service4';
import Gallery from './Compoments/Gallery/Gallery';
import Joinus from './Compoments/Join_us/Joinus';
import Single_project from './Compoments/Single_project/Single_project';
import Project from './Compoments/Single_project/Project';
import Main_service from './Compoments/Main_Service/Main_service';
import Product1 from './Compoments/product_designer/Product1';
import ScrollToTop from './Compoments/ScrollToTop';
import Navbar from './Compoments/Navbar';
import Footer from './Compoments/Footer';
import Preloader from './Compoments/Preloader'; // Import the preloader component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay or perform actual loading logic
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000); // Adjust the duration based on your requirements

    return () => clearTimeout(timer); // Cleanup timeout when component unmounts
  }, []);

  return (
    <Router basename="/">
      <ScrollToTop />
      {loading ? (
        <Preloader /> // Show preloader while loading is true
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Main_Service" element={<Main_service />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Servicetwo" element={<Servicetwo />} />
            <Route path="/Servicethree" element={<Service3 />} />
            <Route path="/Servicefour" element={<Service4 />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Joinus" element={<Joinus />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Product1" element={<Product1 />} />
            {/* Add other routes here */}
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
