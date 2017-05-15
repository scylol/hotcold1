import React from 'react';
import './hotColdContainer.css'

export default function HotCold(props){
  const guesses = props.guesses.map((guess,index)=>{
    return (<li classname='guess' key={index}>{guess}</li>);
  });

  return (
    <main>
      <h1>{props.title}</h1>
      <section className = 'top-section'><h2>Message</h2></section>
      <form className = 'main-form'>
        <input type="text" placeholder='Enter your Guess'></input>
        <button className = 'guess-button'>Guess</button>
        <p>Guess # <span className='big-number'>{props.guesses[props.guesses.length-1]}</span>!</p>
      </form>
      <section className = 'bottom-section'><ul>{guesses}</ul></section>
    </main>

  )
}
