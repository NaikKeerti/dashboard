import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ImageList  } from '../constant';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  justify-content: space-between;

`;

const CarouselSlide = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  padding: auto  ;
`;

const CarouselImage = styled.img`
  height: auto;
  border-radius: 25px;
  border: 1px transparent;
`;

const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
`;

const Indicator = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  border-radius: 50%;
  display: inline-block;
`;

const Carousel = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return (
    <CarouselContainer>
      <CarouselWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      <CarouselSlide>
        {ImageList.map((image, index) => (
         <>
            <CarouselImage src={image.url} alt={`Slide ${index + 1}`} />
            <CarouselImage src={image.url2} alt={`Slide ${index + 1}`} />
            </>
  
        ))}
          </CarouselSlide>
      
      </CarouselWrapper>
      <CarouselIndicators>
        {ImageList.map((_, index) => (
          <Indicator
            key={index}
            active={currentIndex === index}
          />
        ))}
      </CarouselIndicators>
    </CarouselContainer>
  );
};

export default Carousel;
