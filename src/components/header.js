import React from 'react';
import Form from  './form';

import './header.css'

export default function Header(props) {
  const guesses = [5,5,10,23,100,56,73];
  const guessList = guesses.map((guess,index)=>{
    return (<li className='guess' key={index}>{guess}</li>);
  });
    return (
        <div className = 'wrapper-div'>
            <h1>{'HOT or COLD'}</h1>
            <section className = 'top-section'><h2>Message</h2></section>
            <Form guessList = {guessList} />
        </div>
        
    )
}