import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NEPLLOGO from '/assets/nepllogo.jpg'
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div >
            <div className='container'>
                <div className='nav-upper'>
                    <div className='nav-upper-left'>
                        <Link to="/Contact">SUPPORT</Link>
                        <a href="#">PARTNER</a>
                    </div>
                    <div className="nav-upper-right">
                        <a href="https://www.facebook.com/profile.php?id=61564663453366" target='_blank' rel='noopener noreferrer'><i className="bi bi-facebook"></i></a>
                        <a href="https://x.com/neplbbsr" target='_blank' rel='noopener noreferrer'><i className="bi bi-twitter"></i></a>
                        <a href="https://www.linkedin.com/signup"  target='_blank' rel='noopener noreferrer'><i className="bi bi-linkedin"></i></a>
                        <a href="https://www.instagram.com/nepl_bbsr/" target='_blank' rel='noopener noreferrer'><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
                <hr />
            </div>
            <div className='container nepl-navbar'>
                <Link to="/Home" className='nav_active'>
                    <img src={NEPLLOGO} alt="Logo"></img>
                </Link>

                <div className={menuOpen ? "side-bar" : 'nepl-navbar-right'}>
                    <Link to="/Home" className='active_home'>Home</Link>
                    <Link to="/Aboutus">About Us</Link>
                    

                    <div>
                        <Link to="/Main_Service">Services</Link>
                        <Link to="#" className="dropdown" data-bs-toggle="dropdown" aria-expanded="false" >
                            <span><i className="bi bi-chevron-down"></i></span>
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/Servicethree">Electrical Engineer Services</Link></li>
                            
                            <li><Link className="dropdown-item" to="/Servicetwo">Solar Energy Services</Link></li>
                            <li><Link className="dropdown-item" to="/Service">Civil Engineer Services</Link></li>
                            
                            <li><Link className="dropdown-item" to="/Servicefour">IT Engineer Services</Link></li>
                        </ul>
                    </div>

                   
                    <Link to="/Joinus">Career</Link>
                    <Link to="/Gallery">Gallery</Link>
                    <Link to="/Project">Project</Link>
                    <Link to="/Contact">Contact Us</Link>
                    <h1 className='menu-bar' onClick={() => setMenuOpen(!menuOpen)}><i className="bi bi-list"></i></h1>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
