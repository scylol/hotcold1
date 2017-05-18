import React from 'react';



import './form.css'

class Form extends React.Component {
    sendAnswer(event) {
    event.preventDefault();
    this.props.checkAnswer(parseInt(this.guess.value, 10));
    this.guessForm.reset();
    }
    render() {
      const gameWon = this.props.won;
      const hideInput = {
        display: ""
      }
      gameWon ? hideInput.display = 'none' : hideInput.display = '';
        return (
          <div>
            <form className='main-form' onSubmit={event => this.sendAnswer(event)} ref={(input => this.guessForm=input)}>
            <input style={hideInput} type="number" placeholder='Enter your Guess' required ref={(input) => this.guess = input}></input>
            <button style={hideInput} className='guess-button' type="submit" >Guess</button>
            <p>Guess # <span className='big-number'>{this.props.guesses.length}</span>!</p>
        </form>

          </div>
        )
    }

}

export default Form;
