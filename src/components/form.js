import React from 'react';



import './form.css'

class Form extends React.Component {
    
    sendAnswer(event) {
    event.preventDefault();
    this.props.checkAnswer(parseInt(this.guess.value));    
    this.guessForm.reset();
    }
    

    render() {
        return (
          <div>
            <form className = 'main-form' onSubmit={event => this.sendAnswer(event)} ref={(input => this.guessForm=input)}>
            <input type="text" placeholder='Enter your Guess' ref={(input) => this.guess = input}></input>
            <button className = 'guess-button' type="submit">Guess</button>
            <p>Guess # <span className='big-number'>{this.props.guesses.length}</span>!</p>
        </form>
        
          </div>
        )
    }
    
}

export default Form;