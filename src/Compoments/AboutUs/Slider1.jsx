import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Slider1.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '/assets/projectmanagement.jpeg';
import slide_image_2 from '/assets/technical.jpeg';
import slide_image_3 from '/assets/customsolutions.jpeg';
import slide_image_4 from '/assets/safety.jpeg';
import slide_image_5 from '/assets/advequip.jpeg';
import slide_image_6 from '/assets/precision.jpeg';

function Slider1() {
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSwiperKey(prevKey => prevKey + 1);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    { image: slide_image_1, title: 'Project Management', description: 'Efficiently managing all project aspects to ensure successful outcomes.' },
    { image: slide_image_2, title: 'Technical Support', description: 'Providing expert technical assistance for all your needs.' },
    { image: slide_image_3, title: 'Custom Solutions', description: 'Tailored solutions that fit your unique business requirements.' },
    { image: slide_image_4, title: 'Safety Protocols', description: 'Ensuring maximum safety in all our operations.' },
    { image: slide_image_5, title: 'Advanced Equipment', description: 'Utilizing state-of-the-art equipment for optimal performance.' },
    { image: slide_image_6, title: 'Precision Engineering', description: 'Delivering precise and accurate engineering solutions.' },
  ];

  return (
    <div className="unique-slider-container">
        <h1 style={{
  textAlign: 'center',
  position: 'relative',
  fontSize: '4rem',
}}>
  <span style={{
    position: 'relative',
    display: 'inline-block',
    color: 'var(--white)', // Change the text color to white
    textShadow: `
      1px 1px 0 var(--primary),  
      2px 2px 0 var(--primary), 
      3px 3px 0 var(--primary), 
      4px 4px 0 var(--primary),
      5px 5px 0 var(--primary)
    `,
    transform: 'translateZ(30px)',
    marginRight: '0.8rem', 
  }}>
    We are outstanding at providing
  </span>
  
</h1>

      <Swiper
        key={swiperKey}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.unique-swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.unique-swiper-button-next',
          prevEl: '.unique-swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="unique-swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide 
            key={index} 
            className="unique-swiper-slide" 
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}

        <div className="unique-slider-controller">
          {/* <div className="unique-swiper-button-prev unique-slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="unique-swiper-button-next unique-slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div> */}
          <div className="unique-swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider1;
