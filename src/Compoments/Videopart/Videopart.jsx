import React, { useRef, useState } from 'react';
import './Videopart.css';

const Videopart = () => {
  const videoRef = useRef(null); 
  const [isPlaying, setIsPlaying] = useState(false); 

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true); 
      } else {
        videoRef.current.pause(); 
        setIsPlaying(false); 
      }
    }
  };

  const handleError = () => {
    console.error('Failed to load the video.');
   
  };

  return (
    <div className='video-container'>
      <video ref={videoRef} className='video1' preload='auto' onError={handleError}>
        <source src='./assets/energy.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='play-button' onClick={handlePlayPauseClick}>
        <img
          src={isPlaying ? './assets/pause.png' : './assets/playicon.png'}
          alt={isPlaying ? 'Pause' : 'Play'}
        />
      </div>
    </div>
  );
};

export default Videopart;
