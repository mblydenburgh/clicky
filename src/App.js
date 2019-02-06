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
        {alt:"1"},{alt:"2"},{alt:"3"},{alt:"4"},{alt:"5"},{alt:"6"},
      ]
  }

  render() {
    return (
      <AppDiv>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Hero />
        <CardsWrapper cards={this.state.cards} />
      </AppDiv>
    );
  }
}

export default App;

const AppDiv = Styled.div`

`;
