import React from 'react';
import './header.css'

class Header extends React.Component {

  render() {
    let message = 'Guess a Number between 1 and 100';
    const isWon = this.props.won;
    const lastGuess = this.props.guesses[this.props.guesses.length - 1];
    const correctAnswer = this.props.correctAnswer;
    const mathOp = Math.abs(lastGuess - correctAnswer);
    if(isWon === true) {
      message = 'You win!';
    }
    else if (mathOp < 10) {
      message = 'Supa Hot!'
    }
    else if (mathOp > 10 && mathOp < 20) {
      message = 'Warm';
    } else if(mathOp > 20) {
      message = 'Cold';
    }
    return (
      <div className='wrapper-div'>
        <h1>{'HOT or COLD'}</h1>
        <section className='top-section'>
          <h2>{message}</h2>
        </section>
      </div>

    )
  }

}

export default Header;
