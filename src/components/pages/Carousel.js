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
  width: 100%;
  transition: transform 0.5s ease-in-out;
`;

const CarouselSlide = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-right: 20px ;
`;

const CarouselImage = styled.img`
  width: 50%;
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

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(goToNextSlide, interval);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [interval]);

  return (
    <CarouselContainer>
      <CarouselWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {/* {ImageList.map((image, index) => (
          <CarouselSlide key={index}>
            <CarouselImage src={image.url} alt={`Slide ${index + 1}`} />
          </CarouselSlide>
        ))} */}
         <CarouselSlide >
            <CarouselImage src="https://meolaa-cdn.gumlet.io/storeLogo/0/0/large/25_1721585474?w=900&q=70&h=undefined" />
            <CarouselImage src="https://meolaa-cdn.gumlet.io/storeLogo/0/0/large/28_1721585549?w=900&q=70&h=undefined" />
          </CarouselSlide>
      </CarouselWrapper>
      {/* <CarouselIndicators>
        {ImageList.map((_, index) => (
          <Indicator
            key={index}
            active={currentIndex === index}
          />
        ))}
      </CarouselIndicators> */}
    </CarouselContainer>
  );
};

export default Carousel;
