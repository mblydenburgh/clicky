import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card/Card';

const CardsWrapper = ({ cards, handleClick }) => {
  const renderCards = cards => cards.map((card, index) => (
    <Card
      url={card.url}
      alt={card.alt}
      clicked={card.clicked}
      key={index}
      id={index}
      handleClick={handleClick}
    />
  ));

  return (
    <WrapperDiv>
      {renderCards(cards)}
    </WrapperDiv>
  );
};

export default CardsWrapper;

CardsWrapper.propTypes = {
  cards: PropTypes.array,
  handleClick: PropTypes.func,
};

const WrapperDiv = Styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-items: center
    max-width: 80%;
    margin: 0 auto;
`;
