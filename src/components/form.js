import React from 'react';

import Footer from './footer';

import './form.css'

export default function Form(props) {
    return (
        <div>
        <form className = 'main-form'>
        <input type="text" placeholder='Enter your Guess'></input>
        <button className = 'guess-button'>Guess</button>
        <p>Guess # <span className='big-number'>{props.guessList.length}</span>!</p>
      </form>
       <Footer guesses = {props.guessList} />
       </div>
    )
}