import React, { useEffect, useRef } from 'react';
import './Imgs.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';

const Images = () => {
  const imgContainerRef = useRef(null);

  useEffect(() => {
    const imgContainer = imgContainerRef.current;
    const images = Array.from(imgContainer.children);

    // Clear previously cloned images if any
    const clonedImages = images.filter(img => img.classList.contains('cloned'));
    clonedImages.forEach(img => imgContainer.removeChild(img));

    // Clone images and append to the container
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      clone.classList.add('cloned');
      imgContainer.appendChild(clone);
    });

    const imgWidth = imgContainer.scrollWidth / imgContainer.children.length;

    const interval = setInterval(() => {
      if (imgContainer.scrollLeft + imgContainer.clientWidth >= imgContainer.scrollWidth / 2) {
        imgContainer.scrollLeft = 0; // Reset to start if at the end of the original images
      } else {
        imgContainer.scrollBy({
          left: imgWidth,
          behavior: 'smooth', // Smooth scrolling effect
        });
      }
    }, 2500); // Auto-scroll every 2.5 seconds

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <div className="imgcontainer" ref={imgContainerRef}>
      <img src={img6} alt="Image 6" />
      <img src={img1} alt="Image 1" />
      <img src={img2} alt="Image 2" />
      <img src={img3} alt="Image 3" />
      <img src={img4} alt="Image 4" />
      <img src={img5} alt="Image 5" />
    </div>
  );
};

export default Images;
