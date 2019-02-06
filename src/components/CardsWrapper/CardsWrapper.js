import React from 'react';
import Styled from 'styled-components'
import Card from './Card/Card'

const CardsWrapper = ({cards}) => {
    return (
        <WrapperDiv>
            {cards.map(card => <Card alt={card.alt} />)}
        </WrapperDiv>
        );
};

export default CardsWrapper;

const WrapperDiv = Styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    max-width: 80%;
    margin: 0 auto;
`;