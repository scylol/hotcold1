import React from 'react';

export default function Form(props) {
    return (
        <form className = 'main-form'>
        <input type="text" placeholder='Enter your Guess'></input>
        <button className = 'guess-button'>Guess</button>
        <p>Guess # <span className='big-number'>{props.guessList.length}</span>!</p>
      </form>
    )
}