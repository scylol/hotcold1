import React, {Component} from 'react';
import './hotColdContainer.css'

import Header from  './components/header';

import Footer from './components/footer';

import Form from './components/form';

class HotCold extends Component{
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: Math.floor(Math.random()*(100 - 1) + 1),
      guesses: [],
      won: false
    }

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(answer) {
    const fakeState = {...this.state};
    if(answer === fakeState.correctAnswer) {
      fakeState.guesses.push(answer);
      fakeState.won = true;
      this.setState(fakeState);
    }
    else {
      fakeState.guesses.push(answer);
      this.setState(fakeState);
    }
  }

  render() {
    return (
    <main>
      <Header guesses={this.state.guesses} won={this.state.won} correctAnswer={this.state.correctAnswer}/>
      <Form  checkAnswer={this.checkAnswer} won={this.state.won} guesses={this.state.guesses}/>
       <Footer  guesses={this.state.guesses}/>
    </main>
  )
  }

}

export default HotCold;
//react
