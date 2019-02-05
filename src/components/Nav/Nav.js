import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
/* eslint react/jsx-no-comment-textnodes:0 */

const Nav = ({ score, topScore }) => (
  <NavDiv>
    <h1>Clicky Game</h1>
    <h3>Click an Image to Begin</h3>
    <h3>Score:{score} // Top: {topScore}</h3>
  </NavDiv>
);

export default Nav;

Nav.propTypes = {
  score: PropTypes.number,
  topScore: PropTypes.number,
};

Nav.defaultProps = {
  score: 0,
  topScore: 0,
};

const NavDiv = Styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
  background-color: #79addc;

  h3{
    line-height:38px;
  }
`;
