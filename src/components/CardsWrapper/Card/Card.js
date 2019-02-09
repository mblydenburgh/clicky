import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = ({
  url, alt, handleClick, id,
}) => (
  <CardDiv onClick={() => handleClick(id)}>
    <img src={url} alt={alt} />
  </CardDiv>
);

export default Card;

Card.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.number,
};

const CardDiv = Styled.div`
    border: 1px solid black;
`;
