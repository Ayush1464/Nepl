import React, { useState } from 'react';
import './Clientpart.css';

const Clientpart = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "The outcomes that Nilachala Energy Pvt Ltd. provided have us utterly delighted. Their creative thinking and meticulous attention to detail have greatly increased our energy efficiency.",
            name: "Dasarathi Barala",
            Company_name: "Kamini Infrastructure",
            img: './assets/client.png',
        },
        {
            quote: "Throughout our project, Nilachala Energy Pvt Ltd gave us outstanding service and assistance. Our operations have been greatly impacted by the creative problem-solving and commitment to sustainability displayed by their team.",
            name: "Rohit Khanduja",
            Company_name: "Amplus kn One Power Private Limited",
            img: './assets/client.png',
        },
        {
            quote: "Nilachala Energy Pvt Ltd far above our expectations in terms of professionalism and knowledge. Their customized solutions enabled us to successfully and economically meet our energy objectives.",
            name: "Adhyatmik Kumar Jena",
            Company_name: "Aelius Renewable Energy & Innovations Private Limited",
            img: './assets/client.png',
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='main-clientbox'>
            <div className='clientbox-img'>
                <img src='./assets/client.png' alt='Client' className='clientimg' />
            </div>
            <div className='slider-wrapper'>
                <h1>What our client says?</h1>
                <button className='prev-button' onClick={handlePrev}>&#10094;</button>
                <button className='next-button' onClick={handleNext}>&#10095;</button>
                <div className='slider-content' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div className='clientbox-message' key={index}>
                            <div className="container_client">
                                <div className="arrow">
                                    <div className="outer"></div>
                                    <div className="inner"></div>
                                </div>
                                <div className="message-body">
                                    <img src="./assets/clientquote1.png" className='client-icon' alt='Quote Icon' />
                                    <p className='client-para'>{testimonial.quote}</p>
                                </div>
                            </div>
                            {/* Moved name and company outside the message box */}
                            <div className="client-details">
                                <h6 className='client-span1'>{testimonial.name}</h6>
                                <span className='client-span2'>{testimonial.Company_name}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='dots-container'>
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clientpart;
