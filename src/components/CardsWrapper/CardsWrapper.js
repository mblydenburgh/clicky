import React from 'react';
import Styled from 'styled-components'
import Card from './Card/Card'

const CardsWrapper = ({cards,handleClick}) => {
    return (
        <WrapperDiv>
            {
                cards.map((card,index) => {
                    return (
                        <Card alt={card.alt} 
                              clicked={card.clicked}
                              key={index}
                              id={index}
                              handleClick={handleClick}
                        />
                    )
                })
            }
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