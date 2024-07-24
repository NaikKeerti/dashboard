import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import TopCategory from './TopCategory';
import BestSellers from './BestSellers';


const HomeWrapper = styled.div`
  width: 100%;
  padding: 10px 30px;
`;

const Home = () => {
  return (
   <HomeWrapper>
    <Carousel/>
    <TopCategory/>
    <BestSellers/>
    
    
   </HomeWrapper>
  )
}

export default Home