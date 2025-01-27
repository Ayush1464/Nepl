import React, { useState, useEffect } from 'react';
import './Middlepart.css'; // Ensure the path is correct

const Middlepart = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 5) { // Number of slides
        newIndex = 1;
      } else if (newIndex < 1) {
        newIndex = 5;
      }
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let slides = document.getElementsByClassName("slide_fade");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.opacity = 1;
      dots[slideIndex - 1].className += " active";
    }
  };

  return (
    <div>
      <div className="slideshow-container">
        <div className="slide_fade">
          <img src="./assets/electrical1.jpg" alt="Image 1"  style={{width:'100%'}}/>
        </div>

        <div className="slide_fade">
          <img src="./assets/ele.jpeg" alt="Image 2" />
          <div className='Slide_overlay'>
          <div className="text-overlay">Electrical Solutions</div>
          <p>Electrical engineers are the unsung heroes of our modern world, quietly ensuring that the lights stay on and our devices function seamlessly. Their expertise is indispensable in shaping the world we live in, from the bustling metropolis to the serene countryside.

Electrical engineers play a pivotal role in designing and maintaining the electrical systems that power our homes, businesses, and infrastructure. They are responsible for everything from generating electricity at power plants to transmitting it across vast distances and distributing it to our homes and workplaces.</p>
          </div>
          
        </div>
        <div className="slide_fade">
          <img src="./assets/civil.jpeg" alt="Image 4" />
          <div className='Slide_overlay'>
          <div className="text-overlay">Construction Solutions</div>
          <p>Civil engineers are the architects of our physical world, shaping the cities, towns, and infrastructure that we rely on every day. Their work is essential for creating the spaces where we live, work, and play, and their contributions are often taken for granted.

From designing towering skyscrapers to constructing vast transportation networks, civil engineers play a vital role in ensuring the safety, functionality, and sustainability of our built environment. They are responsible for planning, designing, and overseeing the construction of roads, bridges, dams, tunnels, and other infrastructure projects that are essential for our modern way of life.
</p>

          </div>
          
          
        </div>

       
        
        <div className="slide_fade">
          <img src="./assets/electrical.jpeg" alt="Image 4" />
          <div className='Slide_overlay'>
          <div className="text-overlay">Solar Solutions</div>
          <p>Solar energy, a clean and renewable source of power, is rapidly gaining momentum as a sustainable alternative to traditional fossil fuels. Harnessing the abundant energy of the sun, solar panels can generate electricity for homes, businesses, and even entire communities.

Beyond its environmental benefits, solar energy offers numerous advantages for individuals and society as a whole. By installing solar panels, homeowners and businesses can significantly reduce their electricity bills, gaining greater energy independence and financial security. Moreover, solar energy is a reliable and low-maintenance source of power, providing a steady supply of electricity throughout the year.</p>
          </div>
          
          
        </div>
        

        <div className="slide_fade">
          <img src="./assets/it.jpeg" alt="Image 4" />
          <div className='Slide_overlay'>
          <div className="text-overlay">Tech Solutions</div>
          <p>In today's interconnected world, IT engineers are the unsung heroes behind the technology that shapes our lives. From the smartphones we carry in our pockets to the complex systems that power our businesses, IT engineers play a crucial role in designing, developing, and maintaining the digital infrastructure that drives our society.

IT engineers are the architects of the digital world, building the networks, software, and hardware that connect us to information and each other. Their expertise is essential for ensuring the smooth operation of everything from online banking and e-commerce to healthcare systems and transportation networks.</p>
          </div>
          
          
        </div>

        {/* Next and previous buttons */}
        <a className="prev_mid" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next_mid" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>

      <br />

      {/* Dots */}
      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
      </div>
    </div>
  );
};

export default Middlepart;
