import React, { Component } from 'react';
import Styled from 'styled-components';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import CardsWrapper from './components/CardsWrapper/CardsWrapper'

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    cards:[
        {alt:"1",clicked:false},
        {alt:"2",clicked:false},
        {alt:"3",clicked:false},
        {alt:"4",clicked:false},
        {alt:"5",clicked:false},
        {alt:"6",clicked:false},
      ]
  }

  handleClick(event){
    console.log(`clicked ${event}`);
  }

  render() {
    return (
      <AppDiv>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Hero />
        <CardsWrapper handleClick={this.handleClick} cards={this.state.cards} />
      </AppDiv>
    );
  }
}

export default App;

const AppDiv = Styled.div`

`;
