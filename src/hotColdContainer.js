import React, { Component } from 'react';
import './hotColdContainer.css';

import Header from './components/header';

import Footer from './components/footer';

import Form from './components/form';



class HotCold extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: Math.floor(Math.random() * (100 - 1) + 1),
      guesses: [],
      won: false
    };

    this.checkAnswer = this.checkAnswer.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame() {
    const newState = {
      correctAnswer: Math.floor(Math.random() * (100 - 1) + 1),
      guesses: [],
      won: false
    };
    this.setState(newState);
  }
  checkAnswer(answer) {
    // const fakeState = {...this.state};
    if (answer === this.state.correctAnswer) {
      this.setState({
        guesses: [...this.state.guesses, answer],
        won: true
      });
      // fakeState.guesses = [...fakeState.guesses, answer]
      // // fakeState.guesses.push(answer);
      // fakeState.won = true;
      // this.setState(fakeState);
    } else {
      // fakeState.guesses = [...fakeState.guesses, answer]
      // fakeState.guesses.push(answer);
      this.setState({
        guesses: [...this.state.guesses, answer]
      });
      // this.setState(fakeState);
    }
  }

  render() {
    return (
      <main>
        <button className='newgame-button' onClick={this.resetGame}> New Game </button>
        <Header
          guesses={this.state.guesses}
          won={this.state.won}
          correctAnswer={this.state.correctAnswer}
        />
        <Form
          checkAnswer={this.checkAnswer}
          won={this.state.won}
          guesses={this.state.guesses}
        />
        <Footer guesses={this.state.guesses} />

      </main>
    );
  }
}

export default HotCold;
//react
