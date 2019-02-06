import React from 'react';
import Styled from 'styled-components';

const Card = ({alt}) => {
  return (
      <CardDiv>
        {alt}
      </CardDiv>
      )  
};

export default Card;

const CardDiv = Styled.div`
    border: 1px solid black;
`