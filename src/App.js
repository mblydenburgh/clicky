import React, { Component } from 'react';
import Styled from 'styled-components';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import CardsWrapper from './components/CardsWrapper/CardsWrapper';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    cards: [
      { alt: '1', clicked: false },
      { alt: '2', clicked: false },
      { alt: '3', clicked: false },
      { alt: '4', clicked: false },
      { alt: '5', clicked: false },
      { alt: '6', clicked: false },
    ],
  }

  // Fisher-Yates sorting algorithm
  shuffle = (a) => {
    let j; let x; let i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  handleClick = (id) => {
    const newCards = [...this.state.cards];
    const { clicked } = newCards[id];

    console.log(`clicked ${id}`);
    if (!clicked) {
      newCards[id].clicked = true;
      const shuffledCards = this.shuffle(newCards);
      this.setState(prevState => ({
        score: prevState.score + 1,
        cards: shuffledCards,
      }));
    } else {
      console.log('already clicked');
      this.setState({ score: 0 });
    }
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
