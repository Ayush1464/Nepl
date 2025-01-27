import React, { useState } from 'react';

const Slider = () => {
  const slides = [
    {
      title: "Project Planning",
      description: "Strategic planning for seamless project execution.",
      backgroundImage: 'url("/assets/projectmanagement.jpeg")',
    },
    {
      title: "Technical Support",
      description: "Expert support and solutions for all technical issues.",
      backgroundImage: 'url("/assets/technical.jpeg")',
    },
    {
      title: "Custom Solutions",
      description: "Custom solutions to meet project needs and drive results.",
      backgroundImage: 'url("/assets/customsolutions.jpeg")',
    },
    {
      title: "Safety And Importance",
      description: "Safety is paramount, prioritizing protection and well-being.",
      backgroundImage: 'url("/assets/safety.jpeg")',
    },
    {
      title: "Advance Equipment Services",
      description: "Cutting-edge equipment services for optimal performance.",
      backgroundImage: 'url("/assets/advequip.jpeg")',
    },
    {
      title: "Precision Equipment",
      description: "Precision equipment ensures accuracy, reliability, and optimal performance.",
      backgroundImage: 'url("/assets/precision.jpeg")',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3; // Number of slides to show at once
  const totalSlides = slides.length;

  // Handle click on a slide to change current index
  const handleSlideClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={styles.sliderContainer}>
      <div style={styles.container}>
        <div
          style={{
            ...styles.slides,
            transform: `translateX(-${((currentIndex - 1) * 100) / slidesToShow}%)`, // Adjusted for centering
          }}
        >
          {slides.map((slide, index) => {
            // Determine scale based on the index relative to the currentIndex
            let scale = 0.8; // Default scale for first and last images
            if (index === currentIndex) {
              scale = 1.2; // Center image scale
            } else if (index === (currentIndex - 1 + totalSlides) % totalSlides || index === (currentIndex + 1) % totalSlides) {
              scale = 1; // Second and second-to-last images
            }

            return (
              <div
                key={index}
                onClick={() => handleSlideClick(index)} // Click event handler
                style={{
                  ...styles.card,
                  backgroundImage: slide.backgroundImage,
                  transform: `scale(${scale})`, // Apply scale based on index
                  transition: 'transform 0.5s ease, opacity 0.5s ease', // Smooth transition
                  margin: '0 5px', // Adjust margin for consistent spacing
                  opacity: scale === 0.8 ? 0.7 : 1, // Reduce opacity for smaller images
                }}
              >
                <h3 style={styles.title}>{slide.title}</h3>
                <p style={styles.description}>{slide.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const styles = {
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
    margin: 'auto',
  },
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  slides: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out', // Smooth transition for slide change
    alignItems: 'center', // Align items vertically
  },
  card: {
    width: '300px', // Fixed width for consistent sizing
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '12px',
    cursor: 'pointer', // Change cursor to indicate clickable
  },
  title: {
    fontSize: '1.5em',
    margin: '0',
  },
  description: {
    fontSize: '1em',
    margin: '10px 0 0 0',
  },
};

export default Slider;
