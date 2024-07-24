import React from 'react';
import styled, { keyframes } from 'styled-components';

const tickerAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const TickerWrapper = styled.div`
  width: 100%;
  background-color: #f7776a;
  color: #fff;
  padding: 15px 0;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

const TickerContent = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${tickerAnimation} 100s linear infinite;
`;

const TickerItem = styled.span`
  display: inline-block;
  padding: 0 150px;
`;

const TickerText = [
  'Your Daily Marketplace for Sustainable Products in India',
  'Discover Eco-friendly Goods and Services at Affordable Prices',
  'Join Us in Making a Greener Tomorrow with Sustainable Choices',
  'Empower Local Communities by Shopping Responsibly Today',
  'Join Us in Making a Greener Tomorrow with Sustainable Choices',
  'Discover Eco-friendly Goods and Services at Affordable Prices',
  'Your Daily Marketplace for Sustainable Products in India',
  'Discover Eco-friendly Goods and Services at Affordable Prices',
  'Join Us in Making a Greener Tomorrow with Sustainable Choices',
  'Empower Local Communities by Shopping Responsibly Today',
  'Join Us in Making a Greener Tomorrow with Sustainable Choices',
  'Discover Eco-friendly Goods and Services at Affordable Prices',
];

const Ticker = () => {
  return (
    <TickerWrapper>
      <TickerContent>
        {[...TickerText, ...TickerText].map((item, index) => (
          <TickerItem key={index}>{item}</TickerItem>
        ))}
      </TickerContent>
    </TickerWrapper>
  );
};

export default Ticker;
