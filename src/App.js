import React, { Component } from 'react';
import Styled from 'styled-components';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
  }

  render() {
    return (
      <AppDiv>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Hero />
      </AppDiv>
    );
  }
}

export default App;

const AppDiv = Styled.div`

`;
