import React, { useState, useRef, useLayoutEffect} from 'react';
import '../ImageSlider/ImageSlider.scss';
import image1 from '../../../assets/foodImages/food-item-1.jpg';
import image2 from '../../../assets/foodImages/food-item-2.jpg';
import image3 from '../../../assets/foodImages/food-item-3.jpg';
import image4 from '../../../assets/foodImages/food-item-4.jpg';
import image5 from '../../../assets/foodImages/food-item-5.jpg';
import Heart from '@react-sandbox/heart';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
  ];
  
  const handleWheel = (e) => {
    e.stopPropagation();
  };

  useLayoutEffect(() => {
    const slideWidth = sliderRef.current.offsetWidth;
    sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }, [currentSlide]);

  const [active, setActive] = useState(false)

  return (
    <div className="&__feature" ref={sliderRef}>
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <img src={slide.image} alt="healthyFood" className="slide__img" />
          <Heart
            className='heart'
            strokeWidth={50}
            width={40}
            height={40}
            active={active}
            onClick={() => setActive(!active)}
        />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;