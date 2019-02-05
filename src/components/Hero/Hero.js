import React from 'react';
import Styled from 'styled-components';

const Hero = () => (
  <HeroDiv>
    <h1>Welcome to Clicky!</h1>
    <h3>Click on all the images without repeating!</h3>
  </HeroDiv>
);

export default Hero;

const HeroDiv = Styled.div`
  background: url(white-waves.png);
  min-height:35vh;
  text-align: center;
  display: grid;
  grid-template-rows: repeat(2,1fr);
  align-items: center;
`;
